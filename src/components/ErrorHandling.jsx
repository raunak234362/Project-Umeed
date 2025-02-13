/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorHandling = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="text-center p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-6">
          We're working hard to bring you this feature. Stay tuned!
        </p>
        <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          <Link to='/'>
          Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorHandling;
