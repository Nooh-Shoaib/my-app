import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setProductMenuOpen(!isProductMenuOpen);
  };

  return (
    <header className="bg-white">
      <button
        type="button"
        className="flex justify-center lg:px-0 md:px-[74px] px-[67px] items-center font-semibold  lg:font-med
         md:font-medium hover:text-amber-500  lg:text-base md:text-lg text-xl text-gray-900"
        aria-expanded={isProductMenuOpen}
        onClick={toggleProductMenu}
      >
        CustomBoxes
        <svg
          className="h-5 w-5 flex-none text-black "
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isProductMenuOpen && (
        <div className="absolute lg:left-80 md:left-12 left-4 lg:top-20 z-10  lg:w-screen lg:max-w-4xl md:max-w-2xl max-w-[280px] w-screen md:w-screen bg-white shadow-2xl rounded ring-1 ring-gray-400 " style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <section className="grid lg:grid-cols-3 md:grid-cols-3">

            <ul className=' text-sm lg:text-base font-semibold px-2 lg:px-6 md:px-1 py-5 gap-x-1 '>
              <Link to="/custom-retail-packaging">
                <li className='flex text-black hover:bg-slate-100 py-2 '>
                  <img src='https://sireprinting.com/frontend-theme/assets/images/design.png' alt='' className='w-7' />
                  &nbsp;
                  <p className='flex items-center'>Custom Retail Packaging</p>
                </li>
              </Link>
             <Link to="/rigid-boxes">
                <li className='flex text-black hover:bg-slate-100 py-2 '>
                  <img src='https://sireprinting.com/frontend-theme/assets/images/box.png' alt='' className='w-7' />
                  &nbsp;
                  <p className='flex items-center'>Rigid Boxes</p>
                </li>
                </Link>
                <Link to="/food-packaging">
              <li className='flex text-black hover:bg-slate-100 py-2'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/coffee-bag.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Food Packaging</p>
              </li>
              </Link>
                <Link to="/cosmetic-packaging-boxes">
              <li className='flex text-black hover:bg-slate-100 py-2 md:text-start'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/cosmetics.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Cosmetic Packaging Boxes</p>
              </li>
                </Link>
                <Link to="/eco-friendly">
              <li className='flex text-black hover:bg-slate-100 py-2'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/sustainable.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Eco Friendly</p>
              </li>
              </Link>
              <Link to="/custom-pillow-packaging-boxes">
              <li className='flex text-black hover:bg-slate-100 py-2 md:text-start'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/pillow.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Custom Pillow Packaging Boxes</p>
              </li>
              </Link>
            </ul>

            <ul className=' text-base font-semibold lg:px-6 px-2 md:px-1 py-5 gap-x-1'>
              <Link to="/giftpackaging-boxes">
              <li className='flex text-black hover:bg-slate-100 py-2'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/gift-box.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Gift Packaging Boxes</p>
              </li>
              </Link>
              <Link to="/soap-packaging-boxes">
              <li className='flex text-black hover:bg-slate-100 py-2'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/stand.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Soap Packaging Boxes</p>
              </li>
              </Link>
                 <Link to="/custom-medicine-packaging">
              <li className='flex text-black hover:bg-slate-100 py-2 md:text-start'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/medical.png' alt='' className='w-7 ' />
                &nbsp;
                <p className='flex items-center'>Custom Medicine Packaging</p>
              </li>
                 </Link>
              <Link to="/custom-hang-tags">
              <li className='flex text-black hover:bg-slate-100 py-2'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/tag.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Custom Hand Tags</p>
              </li>
              </Link>
              <Link to="/woven-embroidered-patches">
              <li className='flex text-black hover:bg-slate-100 py-2 md:text-start'>
                <img src='https://sireprinting.com/frontend-theme/assets/images/label.png' alt='' className='w-7' />
                &nbsp;
                <p className='flex items-center'>Woven Embroidered Patches</p>
              </li>
              </Link>
            </ul>
            <ul className=' text-base font-semibold  lg:px-6 px-2 md:px-1 pb-9 pt-5 gap-x-1  '>
                <Link to="/corrugated-boxes">
              <li className='flex items-center text-black hover:bg-slate-100 py-2'> Corrugated Boxes </li>
                </Link>
                <Link to="/kraft-paper-boxes">
              <li className='flex items-center text-black hover:bg-slate-100 py-2'> Kraft Paper Boxes</li>
              </Link>        
              <Link to="/custom-display-boxes">
              <li className='flex items-center text-black hover:bg-slate-100 py-2'> Custom Display Boxes</li>
              </Link>
              <Link to="/custom-packaging-boxes">
              <li className='flex items-center text-black hover:bg-slate-100 py-2'>  Custom Packaging Boxes</li>
              </Link>
              <Link to="/custom-mailer-boxes">
              <li className='flex items-center text-black hover:bg-slate-100 py-2'> Custom Mailer Boxes</li>
              </Link>
            </ul>
          </section>

        </div>
      )
      }

    </header >
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';



// function Navbar() {
//   const [isProductMenuOpen, setProductMenuOpen] = useState(false);

//   const toggleProductMenu = () => {
//     setProductMenuOpen(!isProductMenuOpen);
//   };

//   // Define an array of product categories
//   const productCategories = [
//     {
//       name: 'Custom Retail Packaging',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/design.png',
//       link: '/CustomRetailPackaging',
//     },
//     {
//       name: 'Rigid Boxes',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/box.png',
//       link: '/RigidBoxes',
//     },
//     {
//       name: ' Food Packaging',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/coffee-bag.png ',
//       link: ' ',
//     },
//     {
//       name: 'Cosmetic Packaging Boxes ',
//       imageSrc: ' https://sireprinting.com/frontend-theme/assets/images/cosmetics.png',
//       link: ' ',
//     },
//     {
//       name: 'Eco Friendly ',
//       imageSrc: ' https://sireprinting.com/frontend-theme/assets/images/sustainable.png',
//       link: ' ',
//     },
//     {
//       name: ' Custom Pillow Packaging Boxes',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/pillow.png ',
//       link: ' ',
//     },
//     {
//       name: ' Gift Packaging Boxes',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/gift-box.png ',
//       link: ' ',
//     },
//     {
//       name: ' Soap Packaging Boxes',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/stand.png ',
//       link: ' ',
//     },
//     {
//       name: 'Custom Medicine Packaging ',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/medical.png ',
//       link: ' ',
//     },
//     {
//       name: 'Custom Hang Tags ',
//       imageSrc: ' https://sireprinting.com/frontend-theme/assets/images/tag.png',
//       link: ' ',
//     },
//     {
//       name: ' Woven Embroidered Patches',
//       imageSrc: 'https://sireprinting.com/frontend-theme/assets/images/label.png ',
//       link: ' ',
//     },
   
//   ];

//   return (
//     <header className="bg-white">
//       <button
//         type="button"
//         className="flex items-center gap-x-1 text-base  leading-6 text-gray-900"
//         aria-expanded={isProductMenuOpen}
//         onClick={toggleProductMenu} 
//       >
//         CustomBoxes
//         <svg
//           className="h-5 w-5 flex-none text-gray-400"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {isProductMenuOpen && (
//         <div className="absolute left-80 top-20 z-10 mt-3 w-screen max-w-4xl  bg-white  shadow-2xl  rounded ring-1   ring-gray-400">
//           <section className="   grid lg:grid-cols-3    ">
//             {productCategories.map((category, index) => (
//               <ul
//                 key={index}
//                 className="text-base font-medium space-y-5 px-6 py-5 gap-x-1"
//               >
//                 <Link to={category.link}>
//                   <li className="flex text-black hover:bg-slate-100 py-2">
//                     <img src={category.imageSrc} alt="" className="w-7" />
//                     &nbsp;
//                     <p className="flex items-center">{category.name}</p>
//                   </li>
//                 </Link>
//               </ul>
//             ))}
//           </section>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;




















