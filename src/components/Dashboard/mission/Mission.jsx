import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const DashboardMission = () => {
  const [missionData, setMissionData] = useState({
    title: "",
    description: "",
    vision: "",
    goals: "",
  });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchMissionData();
  }, []);

  const fetchMissionData = async () => {
    try {
      const missionDoc = await getDoc(doc(db, "content", "mission"));
      if (missionDoc.exists()) {
        setMissionData(missionDoc.data());
      }
    } catch (error) {
      console.error("Error fetching mission data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMissionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const missionRef = doc(db, "content", "mission");
      await setDoc(missionRef, missionData, { merge: true });
      alert("Mission content updated successfully!");
    } catch (error) {
      console.error("Error updating mission:", error);
      alert("Failed to update mission content");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Mission & Vision</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title/Heading
            </label>
            <input
              type="text"
              name="title"
              value={missionData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>

          {/* Description Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Description
            </label>
            <textarea
              name="description"
              value={missionData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your description"
            />
          </div>

          {/* Vision Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vision Statement
            </label>
            <textarea
              name="vision"
              value={missionData.vision}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your vision"
            />
          </div>

          {/* Goals Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goals & Objectives
            </label>
            <textarea
              name="goals"
              value={missionData.goals}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your goals and objectives"
            />
          </div>

          {/* Preview Section */}
          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-4">Preview</h3>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">
                {missionData.title || "No title set"}
              </h4>
              <p className="whitespace-pre-wrap">
                {missionData.description || "No description set"}
              </p>
              <div>
                <h5 className="font-medium">Vision:</h5>
                <p className="whitespace-pre-wrap">
                  {missionData.vision || "No vision set"}
                </p>
              </div>
              <div>
                <h5 className="font-medium">Goals & Objectives:</h5>
                <p className="whitespace-pre-wrap">
                  {missionData.goals || "No goals set"}
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSaving}
            className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
              isSaving
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardMission;
