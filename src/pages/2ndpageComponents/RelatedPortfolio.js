import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CustomLightGallery = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const openLightbox = (index) => {
		setSelectedImageIndex(index);
	};

	const closeLightbox = () => {
		setSelectedImageIndex(null);
	};

	const pageTitle = "Related Portfolio";


	const portimage = [



		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697658536-vape-cartridge-packaging-sire-printing.avif',

		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697655369-food-display-boxes-sire-printing.avif ',


	];


	const goToPreviousImage = () => {
		setSelectedImageIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : portimage.length - 1
		);
	};

	const goToNextImage = () => {
		setSelectedImageIndex((prevIndex) =>
			prevIndex < portimage.length - 1 ? prevIndex + 1 : 0
		);
	};

	return (<>

		<h1 className=" flex justify-center my-12 text-4xl font-semibold">{pageTitle}</h1>
		<div className=" max-w-[1400px] mx-auto">
		<div className="   grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  ">
				{portimage.map((image, index) => (<>
					<div key={index} className="cursor-pointer" onClick={() => openLightbox(index)}>
						<img src={image} alt={`Image ${index}`} />
					</div>

				</>
				))}
			</div>


			{selectedImageIndex !== null && (
				<div className="  fixed top-0 left-0 right-0 bottom-0  z-50 max-w-[100%] max-h-[100vh] overflow-auto flex justify-center items-center bg-black bg-opacity-80">
					<div className='grid grid-cols-1 space-y-32 absolute top-50 left-96'>
						<button className='  bg-amber-500 rounded text-lg font-medium text-white rotate-90'><Link to='https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0'>Whatsapp Quote</Link></button>
						<button className='bg-amber-500 rounded text-lg font-medium text-white rotate-90'>Get a Free Quote
						</button>
					</div>
					<span  onClick={closeLightbox}>
						<i className="fa-solid fa-xmark text-2xl  absolute top-10 right-12 cursor-pointer text-white"></i>
					</span>

					<img src={portimage[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]'/>

					<button className="	absolute top-[350px] left-[480px] " onClick={goToPreviousImage}>
						<i className="fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100"></i>
					</button>
					<button className="right-button absolute top-[350px] right-[480px] " onClick={goToNextImage}>
						<i className="fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100"></i>
					</button>
				</div>
			)}
		</div>
	</>
	);
};

export default CustomLightGallery;