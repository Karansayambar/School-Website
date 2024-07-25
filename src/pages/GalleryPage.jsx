import React, { useState } from 'react';
import { gallery } from '../gallery';
import { IoMdClose } from "react-icons/io";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTopPhotos = (gallery) => {
    const topPhotos = {};
    for(const category in gallery){
      if(gallery.hasOwnProperty(category)){
        topPhotos[category] = gallery[category].slice(0, 3);
      }
    }
    return topPhotos;
  }

  const topPhotos = getTopPhotos(gallery);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  }

  return (
    <div className='md:w-[95%] md:m-8 p-8 bg-yellow-100'>
      <h3 className='text-center p-8 text-2xl font-semibold'>-------- GALLERY 📸--------</h3>
      <div className=' rounded-md grid md:grid-cols-2'>
      {Object.keys(topPhotos).map((category) => (
        <div key={category} className='mb-2 md:w-[600px]' onClick={() => handleCategoryClick(category)}>
          <h2 className='text-2xl font-semibold mb-6 text-center capitalize text-gray-700 cursor-pointer'>
            {category.replace('_', ' ')}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {topPhotos[category].map((img, index) => (
              <div key={img.id} className={`relative overflow-hidden rounded-lg shadow-lg ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}`}>
                <img src={img.url} alt={img.name} className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'/>
                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                  {img.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && (
        <CategoryModal category={selectedCategory} gallery={gallery} onClose={handleCloseModal} />
      )}
    </div>
    </div>
  );
}

const CategoryModal = ({ category, gallery, onClose }) => {
  return (
    <div className='fixed top-40 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20 '>
      <div className='bg-white rounded-lg p-6 max-w-4xl w-full overflow-y-auto'>
        <button onClick={onClose} className='absolute top-30 right-70 text-red-500 bg-red-300 rounded-md text-xl hover:text-gray-700'>
          <IoMdClose/>
        </button>
        <h2 className='text-2xl font-semibold mb-4 text-center capitalize'>{category.replace('_', ' ')}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 snap-y h-[700px]'>
          {gallery[category].map((img) => (
            <div key={img.id} className='relative overflow-hidden rounded-lg shadow-lg snap-center'>
              <img src={img.url} alt={img.name} className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'/>
              <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                {img.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
