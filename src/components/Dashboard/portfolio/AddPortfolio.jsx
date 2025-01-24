/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { db, storage } from '../../../firebase/firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-hot-toast';

const AddPortfolio = ({ editingItem, setEditingItem, fetchPortfolioItems }) => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: editingItem?.title || '',
      description: editingItem?.description || '',
      projectLink: editingItem?.projectLink || '',
      technologies: editingItem?.technologies || ''
    }
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      let imageUrl = '';
      if (imageFile) {
        const imageRef = ref(storage, `portfolio/${Date.now()}-${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (editingItem) {
        // Update existing item
        await updateDoc(doc(db, 'portfolio', editingItem.id), {
          title: data.title,
          description: data.description,
          projectLink: data.projectLink,
          technologies: data.technologies,
          ...(imageUrl && { imageUrl })
        });
        toast.success('Portfolio item updated successfully');
      } else {
        // Add new item
        await addDoc(collection(db, 'portfolio'), {
          title: data.title,
          description: data.description,
          projectLink: data.projectLink,
          technologies: data.technologies,
          imageUrl,
          createdAt: new Date().toISOString()
        });
        toast.success('Portfolio item added successfully');
      }

      reset();
      setImageFile(null);
      setEditingItem(null);
      fetchPortfolioItems();
    } catch (error) {
      toast.error('Error saving portfolio item');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {editingItem ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
            rows="4"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Project Link</label>
          <input
            type="url"
            className={`w-full p-2 border rounded ${errors.projectLink ? 'border-red-500' : ''}`}
            {...register('projectLink', { 
              required: 'Project link is required',
              pattern: {
                value: /^https?:\/\/.+/,
                message: 'Please enter a valid URL'
              }
            })}
          />
          {errors.projectLink && (
            <p className="text-red-500 text-sm mt-1">{errors.projectLink.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Technologies Used</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${errors.technologies ? 'border-red-500' : ''}`}
            placeholder="e.g., React, Node.js, Firebase"
            {...register('technologies', { required: 'Technologies are required' })}
          />
          {errors.technologies && (
            <p className="text-red-500 text-sm mt-1">{errors.technologies.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
            required={!editingItem}
          />
        </div>
        
        <div className="flex space-x-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Saving...' : editingItem ? 'Update Item' : 'Add Item'}
          </button>

          {editingItem && (
            <button
              type="button"
              onClick={() => {
                setEditingItem(null);
                reset();
                setImageFile(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddPortfolio;
