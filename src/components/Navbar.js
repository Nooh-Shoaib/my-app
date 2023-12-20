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





// import { Link } from 'react-router-dom';
// import React from "react";

// const Navbar = () => {
//   return (
//     <header className='absolute inset-x-0 z-30'>
//       <nav className='flex py-4 md:py-6 px-12 w-full max-w-7xl items-center inset-x-auto justify-between dark:bg-zinc-900 dark:text-zinc-200 mx-auto bg-opacity-20'>
//         <h1 className='text-fuchsia-600 dark:text-fuchsia-500 font-bold inline-block text-xl'>
//           Spit.sh ✨
//         </h1>
//         <Link
//           href='/signin'
//           className='duration-200 transition-colors hover:text-fuchsia-600 dark:hover:text-fuchsia-500'
//         >
//           Sign in
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;