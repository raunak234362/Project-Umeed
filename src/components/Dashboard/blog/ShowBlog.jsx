/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import { db, storage } from "../../../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const ShowBlog = ({ blogs, handleEdit, fetchBlogs, loading }) => {
  const handleDelete = async (blog) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteDoc(doc(db, "blogs", blog.id));
        if (blog.imageUrl) {
          const imageRef = ref(storage, blog.imageUrl);
          await deleteObject(imageRef);
        }
        toast.success("Blog deleted successfully");
        fetchBlogs();
      } catch (error) {
        toast.error("Error deleting blog");
        console.error(error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white p-4 rounded-lg shadow">
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}
          <div className="flex items-center mb-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600">{blog.author.name}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
          <p className="text-gray-600 mb-2 line-clamp-2">{blog.summary}</p>
          <div 
            className="text-gray-600 mb-2 line-clamp-3 prose prose-sm"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-4">
              <i className="far fa-eye mr-1"></i>
              {blog.views} views
            </span>
            <span>
              <i className="far fa-heart mr-1"></i>
              {blog.likes} likes
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowBlog; 