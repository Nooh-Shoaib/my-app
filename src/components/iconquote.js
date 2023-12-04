import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';
import FileUploadButton from '../pages/2ndpageComponents/UploadFile'
function Iconquote() {
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setProductMenuOpen(!isProductMenuOpen);


  };

  const handleCancel = () => {
    setProductMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <button
        type="button"
        className=""
        aria-expanded={isProductMenuOpen}
        onClick={toggleProductMenu}
      >
                 <span className="fab fa-telegram text-2xl px-1 rounded  text-white bg-amber-500"></span>

      </button>

      {isProductMenuOpen && (
        <>
          <div className="overlay" onClick={handleCancel}></div>
          <div className="fixed right-0 -top-6 z-10 mt-3 py-12 h-[900px] w-screen max-w-[550px] bg-white shadow-2xl shadow-black">
            <div className="pt-1.5 -mt-10 px-7 pb-5 font-medium text-2xl lg:text-3xl">

              <button className="ml-2 py-1 rounded-lg" onClick={handleCancel}>
                <i className="fa-solid fa-xmark absolute top-4 right-4"></i>
              </button>
            </div>
            <hr className="mb-2" />



            <form className=' container lg:pl-6 mt-5'>

              <div className="gap-x-0">
                <input type="text" placeholder="Length" className="lg:placeholder:text-sm placeholder:text-xs  lg:w-20 w-8 md:w-24 mx-2 h-9 px-1 border text-sm" />
                <input type="text" placeholder="Width" className="lg:placeholder:text-sm placeholder:text-sm lg:w-20 w-8 md:w-24 mx-2 h-9 px-1 border text-sm" />
                <input type="text" placeholder="Depth" className="  lg:placeholder:text-sm placeholder:text-sm lg:w-20 w-8 md:w-24 mx-2 h-9 px-1 border text-sm" />
                <select className="focus outline-none focus:ring-0 lg:w-52 w-36 mx-2 h-9 px-1 border text-sm">
                  <option>Inches</option>
                  <option>mm</option>
                  <option>cm</option>
                </select>
              </div>

              <div className='flex'>
                <span>
              <h4 className="text-base mx-3 font-semibold">Color:</h4>
              <select className="focus outline-none focus:ring-0 lg:w-60 w-36 md:w-60 px-4 h-9 border text-sm ml-2">
                <option>None</option>
                <option>1 Color</option>
                <option>2 Color</option>
                <option>3 Color</option>
                <option>4 Color</option>
                <option>4/1 Color</option>
                <option>4/2 Color</option>
                <option>4/3 Color</option>
                <option>4/4 Color</option>
              </select>
              </span>
              <span>
              <h4  className="text-base font-semibold">*Quantity</h4>
                <input type="number" className="  md:w-60  mb-2 focus outline-none focus:ring-0 lg:w-60 w-36 px-4 h-9 border text-sm ml-1" />
              </span>
              </div>
              <div>
                <input type="text" placeholder="Full Name" className="my-1.5 w-72 lg:w-[495px] md:w-[490px] h-9 border mx-1 px-2 lg:placeholder:text-sm placeholder:text-xs" />
              </div>
              <div>
                <input type="text" placeholder="Phone" className="my-1.5 w-72 lg:w-[495px] md:w-[490px] h-9 border mx-1 px-2 lg:placeholder:text-sm placeholder:text-xs" />
              </div>
              <div>
                <input type="text" placeholder="Email Address" className="my-1.5 w-72 lg:w-[495px] md:w-[490px] h-9 border mx-1 px-2 lg:placeholder:text-sm placeholder:text-xs" />
              </div>
              <div className='md:px-12'>
              <FileUploadButton />
              </div>
              <div>
                <textarea className="my-1.5 w-72 lg:w-[480px] md:w-[490px] border mx-1 px-2 lg:placeholder:text-sm h-24 placeholder:text-xs" placeholder="Message"></textarea>
              </div>
              <Link to="">
                <button type="submit" className="bg-black text-white md:w-[490px] lg:px-8 lg:py-1.5 px-28 py-2.5 hover:animate-pulse  ">Submit</button>
              </Link>
            </form>
          </div>

        </>
      )}
    </header>
  );
}

export default Iconquote;
