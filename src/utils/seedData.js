import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { samplePortfolioData } from '../data/samplePortfolio';
import { sampleBlogsData } from '../data/sampleBlogs';

export const seedPortfolioData = async () => {
  try {
    for (const item of samplePortfolioData) {
      await addDoc(collection(db, 'portfolio'), item);
    }
    console.log('Portfolio data seeded successfully');
  } catch (error) {
    console.error('Error seeding portfolio data:', error);
  }
};

export const seedBlogsData = async () => {
  try {
    for (const blog of sampleBlogsData) {
      await addDoc(collection(db, 'blogs'), blog);
    }
    console.log('Blog data seeded successfully');
  } catch (error) {
    console.error('Error seeding blog data:', error);
  }
}; 