// import React, { useState } from 'react';

// const images = [
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing.png',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-01.png-gallery1',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-02.png-gallery2',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-03.png-gallery3',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-04.png-gallery4',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-05.png-gallery5',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-06.png-gallery6',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-07.png-gallery7',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-08.png-gallery8',
//   'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-09.png-gallery9',
  
  
// ];

// const CustomCarousel = () => {
//   const [selectedImage, setSelectedImage] = useState(images[0]);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleImageClick = (image, index) => {
//     setSelectedImage(image);
//     setSelectedIndex(index);
//   };

//   const handlePrevious = () => {
//     const newIndex = (selectedIndex - 1 + images.length) % images.length;
//     setSelectedImage(images[newIndex]);
//     setSelectedIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (selectedIndex + 1) % images.length;
//     setSelectedImage(images[newIndex]);
//     setSelectedIndex(newIndex);
//   };

//   return (
//     <div className="custom-carousel">
//       <div className="main-image border">
//         <img src={selectedImage} alt="Main Image" className="hover:scale-110 duration-500 cursor-pointer" />
//         <div className="buttons">
//           <button onClick={handlePrevious} className="prev-button">	&lt; </button>
//           <button onClick={handleNext} className="next-button">&gt;</button>
//         </div>
//       </div>
//       <div className="thumbnails">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
//             onClick={() => handleImageClick(image, index)}
//           >
//             <img src={image} alt={`Thumbnail ${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomCarousel;
