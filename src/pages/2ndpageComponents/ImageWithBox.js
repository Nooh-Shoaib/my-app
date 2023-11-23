import React from 'react'
import { Link } from 'react-router-dom';


let hoverimgArr = [
        {
                imageUrl:
                        "https://sireprinting.com/frontend-theme/assets/images/cardboard.jpg ",
                label: " Cardboard",
                paragraph: "Versatile and recyclable, it's a go-to for packaging needs. Affordable, sturdy, and customizable for any product design.",
        },
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/kraft.jpg",
                label: " Kraft",
                paragraph: "An eco-friendly, durable choice. Ideal for packaging, it's both robust and recyclable. A sustainable solution for your business needs",
        },
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/rigid.png",
                label: " Rigid",
                paragraph: " Rigid stock material offers superior durability and elegance for packaging. The perfect choice for premium products requiring a luxe feel.",
        },
        {
                imageUrl:
                        "https://sireprinting.com/frontend-theme/assets/images/corrugated.png ",
                label: " Corrugated",
                paragraph: "The go-to for shipping needs. Durable, lightweight, and protective, it's the eco-friendly choice for your product's journey.",
        },

];
const Hoverimgs = () => {
        return (<>
                <h1 className='text-center text-2xl lg:text-4xl font-medium mt-12'>Stock Type & Thickness</h1>
                <div className=" max-w-[1400px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 lg:px-28  lg:mx-32  mx-6 md:px-0 gap-2 py-5  ">
                        {hoverimgArr.map((v, i) => {
                                return (

                                        <div key={i} className="text-center shadow-2xl ">
                                                <div className="overflow-hidden">
                                                        <div className=" relative ">
                                                                <img src={v.imageUrl} alt={v.label} loading="lazy" className='hover:scale-110 duration-150 ' />
                                                                <div className=" absolute  bottom-0 left-0 lg:w-full w-full h-32  bg-black bg-opacity-50 opacity-100 ">
                                                                        <h2 className="text-sm lg:text-lg font-medium mt-1 text-white ">
                                                                                {v.label}
                                                                        </h2>
                                                                        <p className='lg:text-sm md:text-sm  text-xs mt-1 text-white'>{v.paragraph}</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                );
                        })}
                </div>
        </>
        );
};

let textimgArr = [
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/stamping.png",
                label: " Foil Stamping",
                paragraph: " A touch of luxury for your packaging. This technique adds metallic shine and depth, elevating your product's visual appeal.",
        },
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/spot.png",
                label: "Spot UV ",
                paragraph: "Enhance your design with high-shine detail. This technique adds texture and depth, spotlighting key features of your product's packaging. ",
        },
        {
                imageUrl:
                        "https://sireprinting.com/frontend-theme/assets/images/gloss.png ",
                label: "Gloss ",
                paragraph: "Amp up your packaging's appeal with its vibrant shine. It enhances color and detail, making your product stand out on the shelves. ",
        },
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/holographic.png",
                label: " Holographic Foiling",
                paragraph: "Add a futuristic flair to your packaging. It offers a captivating, multi-dimensional shine that catches the eye immediately. ",
        },
        {
                imageUrl:
                        "https://sireprinting.com/frontend-theme/assets/images/embossing.png ",
                label: " Embossing",
                paragraph: " Elevate your packaging with a tactile, 3D effect. It adds a touch of elegance and sophistication, making your brand truly stand out.",
        },
        {
                imageUrl:
                        "https://sireprinting.com/frontend-theme/assets/images/debossed.png ",
                label: " Debossing",
                paragraph: " Add a unique element to your packaging. This method creates indented detail, lending an understated, chic aesthetic to your product.",
        },
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/matte.png",
                label: " Matte",
                paragraph: " This finish provides a smooth and decent dull look, non-reflective surface, adding a touch of elegance to your packaging.",
        },
        {
                imageUrl:
                        " https://sireprinting.com/frontend-theme/assets/images/softtouch.png",
                label: " Soft Touch Lamination",
                paragraph: " Infuse a touch of luxury into your packaging. It provides a velvety feel to your packaging, making your product irresistible to touch.",
        },




];
const Imgsboxtext = () => {
        return (<>
                <h1 className='text-center text-2xl lg:text-4xl font-medium '>Finishing Assortment</h1>
                <div className=" max-w-[1400px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 lg:px-28  lg:mx-32 px-6  gap-2 py-5">
                        {textimgArr.map((v, i) => {
                                return (
                                        <div key={i} className="text-center shadow-2xl flex justify-center">
                                                <div className="overflow-hidden">
                                                        <div className=" relative ">
                                                                <img src={v.imageUrl} alt={v.label} loading="lazy" className='hover:scale-110 duration-150 ' />
                                                                <div className=" absolute  bottom-0 left-0 lg:w-full w-full h-32  bg-black bg-opacity-50 opacity-100 ">
                                                                        <h2 className="text-sm lg:text-lg mt-1 font-medium text-white ">
                                                                                {v.label}
                                                                        </h2>
                                                                        <p className='lg:text-sm text-xs md:text-sm mt-1 text-white'>{v.paragraph}</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                );
                        })}
                </div>
        </>
        );
};



export default function ImageWithBox() {
        return (
                <div>
                        <Hoverimgs />
                        <Imgsboxtext />
                </div>
        )
}







