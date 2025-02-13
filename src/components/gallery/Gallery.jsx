import { useState, useEffect } from "react";
import image1 from "../../assets/images/IMG-20250213-WA0003.jpg";
import image2 from "../../assets/images/IMG-20250213-WA0004.jpg";
import image3 from "../../assets/images/IMG-20250213-WA0005.jpg";
import image4 from "../../assets/images/IMG-20250213-WA0006.jpg";
import image5 from "../../assets/images/IMG-20250213-WA0007.jpg";
import image6 from "../../assets/images/IMG-20250213-WA0008.jpg";
import image7 from "../../assets/images/IMG-20250213-WA0012.jpg";
import image8 from "../../assets/images/IMG-20250213-WA0013.jpg";
// import image9 from "../../assets/images/IMG-20250213-WA0014.jpg";
// import image10 from "../../assets/images/IMG-20250213-WA0015.jpg";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const galleryData = [
      { id: 1, alt: "Image 1", src: image1 },
      { id: 2, alt: "Image 2", src: image2 },
      { id: 3, alt: "Image 3", src: image3 },
      { id: 4, alt: "Image 4", src: image4 },
      { id: 5, alt: "Image 5", src: image5 },
      { id: 6, alt: "Image 6", src: image6 },
      { id: 7, alt: "Image 7", src: image7 },
      { id: 8, alt: "Image 8", src: image8 },
    ];
    setImages(galleryData);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="max-w-3xl w-full p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <p className="mt-2 text-center text-gray-600">
              {selectedImage.alt}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300 w-full"
              onClick={closeLightbox}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
