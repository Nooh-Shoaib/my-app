import React, { useState } from 'react';
import QuoteAdvantages from './QuoteAdvantages';
const CarouselsThumbnails = ({ images, onSelect, onPrevious, onNext }) => {
        if (!images || images.length === 0) {
                // Handle the case when images are not available or empty
                return null; // Or any fallback content or message
        }

        const [selectedImage, setSelectedImage] = useState(images[0]);
        const [selectedIndex, setSelectedIndex] = useState(0);

        const handleImageClick = (image, index) => {
                setSelectedImage(image);
                setSelectedIndex(index);
        };

        const handlePrevious = () => {
                const newIndex = (selectedIndex - 1 + images.length) % images.length;
                setSelectedImage(images[newIndex]);
                setSelectedIndex(newIndex);
        };

        const handleNext = () => {
                const newIndex = (selectedIndex + 1) % images.length;
                setSelectedImage(images[newIndex]);
                setSelectedIndex(newIndex);
        };

        return (
                <div className="lg:flex my-10 md:flex justify-center">
                        <div className="mx-8">
                                <div className="w-full relative border rounded mt-7 lg:max-w-[410px] lg:max-h-[600px] md:max-w-[410px] md:max-h-[600px]" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                        <img
                                                src={selectedImage}
                                                alt="Main"
                                                className="hover:scale-110 duration-500 cursor-pointer w-full lg:w-full md:w-72"
                                        />
                                        <div className="absolute lg:top-[50%] top-32 lg:space-x-[358px] space-x-[202px] mx-3">
                                                <button onClick={handlePrevious} className="prev-button">
                                                        <i className="fa-solid fa-chevron-left"></i>
                                                </button>
                                                <button onClick={handleNext} className="next-button">
                                                        <i className="fa-solid fa-chevron-right"></i>
                                                </button>
                                        </div>
                                </div>
                                <div className="flex mt-5">
                                        {images.map((image, index) => (
                                                <div
                                                        key={index}
                                                        className={`cursor-pointer w-[90px] h-[65px] mx-1 thumbnail ${index === selectedIndex ? 'active' : ''}`}
                                                        onClick={() => handleImageClick(image, index)}
                                                >
                                                        <img src={image} alt={`Thumbnail ${index}`} className='border rounded-lg object-contain w-full h-full' />
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <div>
                                <QuoteAdvantages />
                        </div>
                </div>
        );
};

export default CarouselsThumbnails;
