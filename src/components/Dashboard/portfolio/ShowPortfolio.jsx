/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import { db, storage } from "../../../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const ShowPortfolio = ({
  portfolioItems,
  handleEdit,
  setActiveTab,
  fetchPortfolioItems,
}) => {
  const handleDelete = async (item) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, "portfolio", item.id));
        if (item.imageUrl) {
          const imageRef = ref(storage, item.imageUrl);
          await deleteObject(imageRef);
        }
        toast.success("Portfolio item deleted successfully");
        fetchPortfolioItems();
      } catch (error) {
        toast.error("Error deleting portfolio item");
        console.error(error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-sm text-gray-500 mb-2">
            Technologies: {item.technologies}
          </p>
          <a
            href={item.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mb-4"
          >
            View Project
          </a>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                handleEdit(item);
                setActiveTab("add");
              }}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPortfolio;
