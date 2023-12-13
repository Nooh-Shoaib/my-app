import React from 'react';
import { Link } from 'react-router-dom';
import CustomBoxes from './CustomBoxes';
import ButtonQuote from './ButtonQuote';

export default function Navbar() {
  const navItems = [
    { text: 'All Products', link: '/products-all', key: 'all-Products' },
    { text: 'CBD Packaging', link: '/cbd-packaging', key: 'cbdPackaging' },
    { text: <CustomBoxes />, key: 'custom-boxes' },
    { text: 'Custom Box Styles', link: '/custom-box-styles', key: 'customBoxStyles' },
    { text: 'logo', key: 'logo' },
    { text: 'Custom Stickers', link: '/custom-stickers', key: 'customStickers' },
    { text: 'Christmas Boxes', link: '/christmas-boxes', key: 'christmasBoxes' },
    { text: 'Portfolio', link: '/portfolio', key: 'dynamicPortfolio' },
  ];


  const logoUrl = 'data:image/webp;base64,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';
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
