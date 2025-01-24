/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { toast } from "react-hot-toast";
import AddBlog from "./AddBlog";
import ShowBlog from "./ShowBlog";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("show");
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [filter, setFilter] = useState("latest"); // 'latest', 'trending', 'all'
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, [filter]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let blogQuery;

      switch (filter) {
        case "trending":
          blogQuery = query(
            collection(db, "blogs"),
            orderBy("views", "desc"),
            limit(10)
          );
          break;
        case "latest":
          blogQuery = query(
            collection(db, "blogs"),
            orderBy("createdAt", "desc")
          );
          break;
        default:
          blogQuery = collection(db, "blogs");
      }

      const querySnapshot = await getDocs(blogQuery);
      const blogData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogData);
    } catch (error) {
      toast.error("Error fetching blogs");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setActiveTab("add");
  };

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
        activeTab === tab
          ? "bg-white text-blue-600 border-t-2 border-blue-600"
          : "bg-gray-50 text-gray-500 hover:text-gray-700"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Blog</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <TabButton tab="show" label="Show Blogs" />
        <TabButton tab="add" label="Add Blog" />
      </div>

      {/* Tab Content */}
      {activeTab === "add" ? (
        <AddBlog
          editingBlog={editingBlog}
          setEditingBlog={setEditingBlog}
          fetchBlogs={fetchBlogs}
        />
      ) : (
        <>
          {/* Filter Buttons */}
          <div className="mb-6 flex space-x-4">
            <button
              onClick={() => setFilter("latest")}
              className={`px-4 py-2 rounded ${
                filter === "latest"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setFilter("trending")}
              className={`px-4 py-2 rounded ${
                filter === "trending"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded ${
                filter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Posts
            </button>
          </div>

          <ShowBlog
            blogs={blogs}
            handleEdit={handleEdit}
            setActiveTab={setActiveTab}
            fetchBlogs={fetchBlogs}
            loading={loading}
          />
        </>
      )}
    </div>
  );
};

export default Blog;
