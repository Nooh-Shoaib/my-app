import React from 'react';
import { Link } from 'react-router-dom';
import CustomBoxes from '../pages/2ndpageComponents/CustomBoxes';
import ButtonQuote from '../pages/2ndpageComponents/ButtonQuote';

export default function Navbar() {
  const navItems = [
    { text: 'All Products', link: '/products/products-all', key: 'all-Products' },
    { text: 'CBD Packaging', link: '/products/cbd-packaging', key: 'cbdPackaging' },
    { text: <CustomBoxes />, key: 'custom-boxes' },
    { text: 'Custom Box Styles', link: '/products/custom-box-styles', key: 'customBoxStyles' },
    { text: 'logo', key: 'logo' },
    { text: 'Custom Stickers', link: '/products/custom-stickers', key: 'customStickers' },
    { text: 'Christmas Boxes', link: '/products/christmas-boxes', key: 'christmasBoxes' },
    { text: 'Portfolio', link: '/portfolio', key: 'dynamicPortfolio' },
  ];


  const logoUrl = 'https://sireprinting.com/img/brand/Sire-Printing.png';
  // console.log('link is clicked ');
  return (
    <nav className="hidden lg:block sticky top-0 bg-white z-20">
      <div className=" shadow-md">
        <ul className="flex items-center justify-center space-x-6 h-24 ">
          {navItems.map((item) => (
            <li key={item.key} className="text-black text-[15px] font-semibold hover:text-amber-500">
              {item.text === 'logo' ? (
                <Link to='/'>
                  <img src={logoUrl} alt="Sire Printing" />
                </Link>
              ) : (
                item.link ? (
                  <Link to={item.link}>{item.text}</Link>
                ) : (
                  item.text
                )
              )}
            </li>
          ))}

          <ButtonQuote />
        </ul>
      </div>
    </nav>
  );
}




{/* <h1 className="bg-slate-200 h-12 flex items-center">
          <Link to="/" className=" mx-7 font-semibold">Home</Link>
          <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
          <Link to={product?.categories[0].categorySlug} className=" mx-7 font-semibold">{product?.categories[0].name}</Link>
          <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
          <span className="text-amber-500 font-semibold"><em>{product?.productTitle}</em></span>
        </h1> */}
{/* {Array(5)
              .fill(null)
              .map((_, index) => (
                <i key={index} className="fa-solid fa-star text-yellow-300"></i>
              ))} */}
