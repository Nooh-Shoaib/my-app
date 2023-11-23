// import React, { useState } from 'react';
// import Layout from '../layout';
// import { Link } from "react-router-dom";

// const CustomLightGallery = () => {
// 	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

// 	const openLightbox = (index) => {
// 		setSelectedImageIndex(index);
// 	};

// 	const closeLightbox = () => {
// 		setSelectedImageIndex(null);
// 	};

// 	const pageTitle = "Portfolio";
// 	const homeLink = "/";
// 	const linkLabel = "Home";
// 	const Label = "Portfolio";

// 	const images = [


// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697936552-cardnoard-mailer-boxes-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697935989-2-piece-box-with-window-lid-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697935548-cream-boxes-with-foil-accent-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697934925-bath-bomb-boxes-with-heart-shape-window-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697924122-white-soap-boxes-die-cut-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697659374-vape-pen-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697658536-vape-cartridge-packaging-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697658398-custom-printed-gable-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697658301-vape-display-boxes-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697655369-food-display-boxes-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697653407-cbd-chocolate-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697653068-mailer-boxes-with-custom-inserts-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697651037-mailer-boxes-for-products-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697650949-mailer-boxes-with-diecut-inserts-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697594823-kraft-soap-boxes-with-custom-die-cut-window-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697594876-cbd-gummies-display-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697594934-black-soap-boxes-with-side-hole-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697594992-black-soap-boxes-with-die-cut-logo-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697049780-plain-kraft-tuck-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697048975-soap-gift-boxes-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697048793-printed-die-cut-soap-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697048397-luxury-soap-drawer-box-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697048324-luxury-soap-box-two-piece-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697048265-kraft-soap-boxes-with-round-window-sire-printing.avif ',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697048211-kraft-die-cut-soap-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697047754-die-cut-kraft-pet-soap-boxes-sire-printing.avif',
// 		'https://s3.amazonaws.com/sireprinting.com/portfolios/1697047665-bath-bomb-gift-boxes-sire-printing.avif',

// 	];


// 	const goToPreviousImage = () => {
// 		setSelectedImageIndex((prevIndex) =>
// 			prevIndex > 0 ? prevIndex - 1 : images.length - 1
// 		);
// 	};

// 	const goToNextImage = () => {
// 		setSelectedImageIndex((prevIndex) =>
// 			prevIndex < images.length - 1 ? prevIndex + 1 : 0
// 		);
// 	};

// 	return (
// 		<Layout>
// 			<h1 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h1>
// 			<h1 className=" flex justify-center my-12 text-4xl font-semibold">{pageTitle}</h1>
// 		<div className=" max-w-[1300px] mx-auto">
// 			<div className=" max-w-[1500px]  grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  ">
// 				{images.map((image, index) => (<>
// 					<div key={index} className="cursor-pointer" onClick={() => openLightbox (index)}>
// 						<img src={image} alt={`Image ${index}`} />
// 					</div>

// 				</>
// 				))}
// 			</div>


// 			{selectedImageIndex !== null && (
// 				<div className="  fixed top-0 left-0 right-0 bottom-0  z-50 max-w-[100%] max-h-[100vh] overflow-auto flex justify-center items-center bg-black bg-opacity-80">
// 					<div className='grid grid-cols-1 space-y-32 absolute top-50 left-96'>
// 						<button className='  bg-amber-500 rounded text-lg font-medium text-white rotate-90'><Link to='https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0'>Whatsapp Quote</Link></button>
// 						<button className='bg-amber-500 rounded text-lg font-medium text-white rotate-90'>Get a Free Quote
// 						</button>
// 					</div>
// 					<span  onClick={closeLightbox}>
// 						<i className="fa-solid fa-xmark text-2xl  absolute top-10 right-12 cursor-pointer text-white"></i>
// 					</span>

// 					<img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]'/>

// 					<button className="absolute top-[350px] left-[480px] " onClick={goToPreviousImage}>
// 						<i className="fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100"></i>
// 					</button>
// 					<button className=" absolute top-[350px] right-[480px] " onClick={goToNextImage}>
// 						<i className="fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100"></i>
// 					</button>
// 				</div>
// 			)}
// 		</div>

// 		</Layout>
// 	);
// };

// export default CustomLightGallery;