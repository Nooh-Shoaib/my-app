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
