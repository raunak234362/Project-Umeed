import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UpdateMission = () => {
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm();

  useEffect(() => {
    fetchMissionData();
  }, []);

  const fetchMissionData = async () => {
    try {
      const missionDoc = await getDoc(doc(db, "content", "mission"));
      if (missionDoc.exists()) {
        reset(missionDoc.data()); // Pre-fill form with existing data
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching mission data:", error);
      toast.error("Failed to load mission data");
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const missionRef = doc(db, "content", "mission");
      await updateDoc(missionRef, data);
      toast.success("Mission updated successfully!");
    } catch (error) {
      console.error("Error updating mission:", error);
      toast.error("Failed to update mission");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Update Mission</h2>
          {isDirty && (
            <span className="text-sm text-amber-600">
              * You have unsaved changes
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter mission title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              rows="4"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter mission description"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Vision Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vision Statement
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              {...register("vision", {
                required: "Vision statement is required",
                minLength: {
                  value: 10,
                  message: "Vision statement must be at least 10 characters",
                },
              })}
              rows="3"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.vision ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter vision statement"
            />
            {errors.vision && (
              <p className="mt-1 text-sm text-red-500">
                {errors.vision.message}
              </p>
            )}
          </div>

          {/* Goals Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goals & Objectives
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              {...register("goals", {
                required: "Goals are required",
                minLength: {
                  value: 10,
                  message: "Goals must be at least 10 characters",
                },
              })}
              rows="4"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.goals ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter goals and objectives"
            />
            {errors.goals && (
              <p className="mt-1 text-sm text-red-500">
                {errors.goals.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={!isDirty || isSubmitting}
              className={`flex-1 py-2 px-4 rounded-md text-white transition-colors ${
                !isDirty || isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Updating...
                </span>
              ) : (
                "Update Mission"
              )}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              disabled={!isDirty || isSubmitting}
              className={`px-4 py-2 rounded-md border transition-colors ${
                !isDirty || isSubmitting
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMission;
