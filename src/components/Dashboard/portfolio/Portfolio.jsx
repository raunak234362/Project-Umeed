/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import AddPortfolio from './AddPortfolio';
import ShowPortfolio from './ShowPortfolio';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('show');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'));
      console.log(querySnapshot);
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPortfolioItems(items);
    } catch (error) {
      toast.error('Error fetching portfolio items');
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
        activeTab === tab
          ? 'bg-white text-blue-600 border-t-2 border-blue-600'
          : 'bg-gray-50 text-gray-500 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Portfolio</h1>
      
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <TabButton tab="show" label="Show Portfolio" />
        <TabButton tab="add" label="Add Portfolio" />
      </div>

      {/* Tab Content */}
      {activeTab === 'add' ? (
        <AddPortfolio 
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          fetchPortfolioItems={fetchPortfolioItems}
        />
      ) : (
        <ShowPortfolio 
          portfolioItems={portfolioItems}
          handleEdit={handleEdit}
          setActiveTab={setActiveTab}
          fetchPortfolioItems={fetchPortfolioItems}
        />
      )}
    </div>
  );
};

export default Portfolio; 