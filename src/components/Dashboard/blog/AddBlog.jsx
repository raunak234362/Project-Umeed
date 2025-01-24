/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { db, storage } from "../../../firebase/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-hot-toast";
import { Editor } from "@tinymce/tinymce-react";

const AddBlog = ({ editingBlog, setEditingBlog, fetchBlogs }) => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState(editingBlog?.tags || []);
  const [content, setContent] = useState(editingBlog?.content || "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editingBlog?.title || "",
      summary: editingBlog?.summary || "",
      category: editingBlog?.category || "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value) {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.target.value = "";
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const onSubmit = async (data) => {
    if (!content) {
      toast.error("Content is required");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = editingBlog?.imageUrl || "";
      if (imageFile) {
        const imageRef = ref(storage, `blogs/${Date.now()}-${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      const blogData = {
        ...data,
        content,
        tags,
        imageUrl,
        author: {
          name: "John Doe", // Replace with actual user data
          avatar: "https://example.com/avatar.jpg", // Replace with actual user avatar
        },
        views: editingBlog?.views || 0,
        likes: editingBlog?.likes || 0,
        updatedAt: new Date().toISOString(),
      };

      if (editingBlog) {
        await updateDoc(doc(db, "blogs", editingBlog.id), blogData);
        toast.success("Blog updated successfully");
      } else {
        blogData.createdAt = new Date().toISOString();
        await addDoc(collection(db, "blogs"), blogData);
        toast.success("Blog added successfully");
      }

      reset();
      setContent("");
      setImageFile(null);
      setTags([]);
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      toast.error("Error saving blog");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.title ? "border-red-500" : ""
            }`}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Summary</label>
          <textarea
            className={`w-full p-2 border rounded ${
              errors.summary ? "border-red-500" : ""
            }`}
            rows="2"
            {...register("summary", { required: "Summary is required" })}
          />
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">
              {errors.summary.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <Editor
            apiKey="926o8hdd1gilg7k2qalc9oa53ylhbdkdmg5cn604ejpb4jjx" // Get a free API key from https://www.tiny.cloud/
            value={content}
            onEditorChange={handleEditorChange}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px }",
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.category ? "border-red-500" : ""
            }`}
            {...register("category", { required: "Category is required" })}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tags</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-blue-700 hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            onKeyDown={handleTagInput}
            placeholder="Type and press Enter to add tags"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Blog Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? "Saving..." : editingBlog ? "Update Blog" : "Add Blog"}
          </button>

          {editingBlog && (
            <button
              type="button"
              onClick={() => {
                setEditingBlog(null);
                reset();
                setContent("");
                setImageFile(null);
                setTags([]);
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

export default AddBlog;
