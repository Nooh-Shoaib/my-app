import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../components/layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";
import LoadingComponent from './LoadingIndicator';

const Portfolio = () => {

	const [loading, setLoading] = useState(true);
	const [portfolio, setPortfolio] = useState([]);
	const getApiData = async () => {
		setLoading(true);
		await fetch(
			`https://my-json-server.typicode.com/Nooh-Shoaib/test/portfolio`
		).then((response) =>
			response.json()

		).then((response) => {
			setPortfolio(response);
			setLoading(false);
		}).catch(() => {
			setPortfolio([]);
			setLoading(false);
		});
	};

	useEffect(() => {

		getApiData();
	}, []);



	const pageTitle = "Portfolio";
	const homeLink = "/";
	const linkLabel = "Home";
	const Label = "Portfolio";



	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const openLightbox = (index) => {
		setSelectedImageIndex(index);
	};

	const closeLightbox = () => {
		setSelectedImageIndex(null);
	};



	const goToPreviousImage = () => {
		setSelectedImageIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : portfolio.length - 1
		);
	};

	const goToNextImage = () => {
		setSelectedImageIndex((prevIndex) =>
			prevIndex < portfolio.length - 1 ? prevIndex + 1 : 0
		);
	};



	return (
		<Layout>
			<h1 className="bg-slate-200 h-12 flex items-center">
				<Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h1>
			{loading ? <><LoadingComponent /></> : null}
			<h1 className=" flex justify-center my-12 text-4xl font-semibold">{pageTitle}</h1>
			<div className=" max-w-[1300px] mx-auto">
				<div className=" max-w-[1500px]  grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  ">
					{portfolio.map((portfolio, index) => (<>
						<div key={index} className="cursor-pointer" onClick={() => openLightbox(index)}>
							<img src={portfolio} alt={`portfolio ${index}`} />
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
						<span onClick={closeLightbox}>
							<i className="fa-solid fa-xmark text-2xl  absolute top-10 right-12 cursor-pointer text-white"></i>
						</span>

						<img src={portfolio[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]' />

						<button className="absolute top-[350px] left-[480px] " onClick={goToPreviousImage}>
							<i className="fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100"></i>
						</button>
						<button className=" absolute top-[350px] right-[480px] " onClick={goToNextImage}>
							<i className="fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100"></i>
						</button>
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Portfolio
