
import React from 'react';
import { Link } from "react-router-dom";
import CustomBoxes from '../pages/2ndpageComponents/CustomBoxes';
import ButtonQuote from '../pages/2ndpageComponents/ButtonQuote';

let menuArr = [
  { url: "/all-products", label: "All Products", key: "allProducts" },
  { url: "/cbd-packaging", label: "CBD Packaging", key: "cbdPackaging" },
  { label: <span><CustomBoxes /></span>, key: "customBoxes" },
  { url: "/custom-box-styles", label: "Custom Box Styles", key: "customBoxStyles" },
  { url: "/custom-stickers", label: "Custom Stickers", key: "customStickers" },
  { url: "/christmas-boxes", label: "Christmas Boxes", key: "christmasBoxes" },
  { url: "/portfolio", label: "Portfolio", key: "portfolio" },
];
const Ham = () => {
  return (
    <div>
      <ul>
        {menuArr.map((v) => (
          <React.Fragment key={v.key}>
            <li className="font-semibold mb-3 hover:text-amber-500">
              <Link to={v.url}>{v.label}</Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

let img = "https://sireprinting.com/img/brand/Sire-Printing.png";

export default function HamMenu() {


  return (
    <nav className="bg-white text-gray-900 lg:hidden sticky top-0 z-10 ">
      <div className="container mx-auto flex justify-between ">
        <div className="p-4 text-xl ">
          <ul className="flex  md:space-x-60 space-x-16">
            <li className="toggleable hover:text-black">
              <input
                type="checkbox"
                id="toggle-one"
                className="toggle-input"
              />
              <label
                htmlFor="toggle-one"
                className="grid grid-rows-3 w-auto cursor-pointer  font-extrabold"
              >
                <div className="w-9 h-1.5 bg-black m-0.5"></div>
                <div className="w-9 h-1.5 bg-black m-0.5"></div>
                <div className="w-9 h-1.5 bg-black m-0.5"></div>
              </label>
              <div
                role="toggle-one"
                className="p-6 md:px-24 mega-menu mb-16 shadow-xl bg-white h-screen absolute md:top-20 lg:top-0 top-[64px]">
                <div className="container mx-auto w-full flex flex-wrap justify-between py-12">
                  <ul className="sm:w-1/2 w-full pb-6 pt-6 mx-auto space-y-5">
                    <Ham />
                    <ButtonQuote />
                  </ul>
                </div>
              </div>
            </li>

            <div>
              <Link to="#">
                <img src={img} alt="Sire Printing Logo" className='' />
              </Link>
            </div>
            <li className="toggleable hover:text-black">
              <input
                type="checkbox"
                value="selected"
                id="toggle-two"
                className="toggle-input"
              />
              <label
                htmlFor="toggle-two"
                className="cursor-pointer pt-6 "
              >
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
              </label>
              <div role="toggle-two" className="md:px-24 mega-menu shadow-xl">
                <div className="container mx-auto w-full flex justify-center">
                  <div className="pt-4">
                    <input
                      type="search"
                      placeholder=""
                      className="focus outline-none focus:ring-0 text-black px-2 bg-slate-200 md:w-[750px] w-[315px] md:mt-8 mt-1 opacity-90"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
