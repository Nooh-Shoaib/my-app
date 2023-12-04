import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

let address = " 626 92nd Street Brooklyn NY 11220";
let freeShipping = "100% Free shipping all across USA";
let phone = "(410) 834-9965";
let email = "support@sireprinting.com";

let footer = [
        { label: 'Rigid Boxes', link: '/rigid-boxes' },
        { label: 'Cosmetic Packaging Boxes', link: '/cosmetic-packaging-boxes' },
        { label: 'Custom Display Boxes', link: '/custom-display-boxes' },
        { label: 'Eco-Friendly Packaging', link: '/eco-friendly' },
        { label: 'Custom Pillow Packaging Boxes', link: '/custom-pillow-packaging-boxes' },
        { label: 'Soap Packaging Boxes', link: '/soap-packaging-boxes' },
];

const Footercategories = () => {
        return (
                <div>
                        <ul>
                                {footer.map((v, i) => {
                                        return (
                                                <li
                                                        key={i}
                                                        className="text-white font-semibold mx-2 md:text-center mb-3 lg:text-start text-center hover:text-yellow-500"
                                                >
                                                        <Link to={v.link}>{v.label}</Link>
                                                </li>
                                        );
                                })}
                        </ul>
                </div>
        );
};

let footer2 = [
        { label: 'About Us', link: '/about-us' },
        { label: "Contact Us", link: '/contact-us' },
        { label: "Portfolio", link: '/portfolio' },
        { label: "Blogs", link: '/blogs' },
        { label: "Privacy Policy", link: '/privacy-policy' },
        { label: "Terms And Conditions", link: '/terms-conditions' },
];

const Footerlinks = () => {
        return (
                <div>
                        <ul>
                                {footer2.map((v, id) => {
                                        return (
                                                <li
                                                        key={id}
                                                        className="text-white font-semibold mx-2 md:text-center mb-3 lg:text-start text-center hover:text-yellow-500"
                                                >
                                                        <Link to={v.link}>{v.label}</Link>
                                                </li>
                                        );
                                })}
                        </ul>
                </div>
        );
};

let paymentImg =
        "https://sireprinting.com/frontend-theme/assets/images/payment-cards.png";
let CWhref = "https://thecustomwebsites.com/";
let playstoreImg =
        "https://sireprinting.com/frontend-theme/assets/images/download-app.png";
export default function Footer(props) {
        return (
                <footer className="bg-[#202020] ">
                        <section className=" lg:grid md:grid grid-cols-4 lg:mx-10 lg:space-x-8">
                                <ul className="px-5">
                                        <li>
                                                <Link to="#">
                                                        <img
                                                                src="https://sireprinting.com/frontend-theme/assets/images/logo-white.png"
                                                                alt=""
                                                                className="px-12 py-5 md:px-0 md:py-5 md:w-52 lg:px-2 lg:py-5  "
                                                        />
                                                </Link>
                                        </li>
                                        <section className="flex md-block justify-center ">
                                                <input
                                                        type="email"
                                                        placeholder="Email here"
                                                        className=" px-3 py-3 md:w-24 w-60 lg:w-60 focus outline-none focus:ring-1 placeholder-slate-500 rounded-l"
                                                />

                                                <button className="bg-white px-3  py-3 rounded-r">
                                                        <span>
                                                                <i className="fa-sharp fa-solid fa-paper-plane "></i>
                                                        </span>
                                                </button>
                                        </section>
                                        <p className="mt-6 text-white md:text-center lg:text-start text-center text-sm lg:text-base md:text-base">
                                                Subscribe our newsletter and stay updated <br />
                                                with our new products, policies and terms.
                                        </p>
                                        <Link
                                                to="https://play.google.com/store/apps/details?id=com.sireprinting"
                                                target="_blank"
                                        >
                                                <div className="flex justify-center lg:justify-start">
                                                        <img src={playstoreImg} alt="" className="mt-6 " />
                                                </div>
                                        </Link>
                                </ul>
                                <div>
                                        <ul>
                                                <h2 className="lg:text-3xl text-3xl md:text-3xl lg:text-start text-center font-medium mx-2 md:text-center text-white mt-24 mb-5">
                                                        Get In Touch
                                                </h2>
                                                <li className="mt-2 mx-2 md:text-center lg:text-start text-center">
                                                        <Link to="tel:+14108349965">

                                                                <i className="fa-solid fa-phone text-white hover:text-yellow-500">
                                                                        &nbsp;
                                                                        <span className="footericon">
                                                                                {phone}
                                                                        </span>
                                                                </i>
                                                        </Link>
                                                </li>
                                                <li className="mt-2 mx-2 md:text-center lg:text-start text-center">
                                                        <Link to="mailto:support@sireprinting.com">


                                                                <i className="fa-solid fa-envelope text-white hover:text-yellow-500">
                                                                        &nbsp;
                                                                        <span className="footericon">
                                                                                {email}
                                                                        </span>
                                                                </i>
                                                        </Link>
                                                </li>
                                                <li className="mt-2 md:text-center lg:text-start text-center">
                                                        <i className="fa-solid fa-location-dot text-white ">&nbsp;</i>
                                                        <span className="text-white font-semibold">{address}</span>
                                                </li>
                                                <li className="mt-2 md:text-center lg:text-start text-center">
                                                        <i className="fa-solid fa-truck text-white">&nbsp;</i>
                                                        <span className=" text-white font-semibold">
                                                                {freeShipping}
                                                        </span>
                                                </li>
                                                <li className="lg:space-x-6 space-x-6 md:space-x-4 mt-4  flex justify-center lg:justify-normal">
                                                        <Link to="https://www.facebook.com/sireprinting/" target="_blank">
                                                                <i className="fa-brands fa-facebook text-white text-3xl hover:text-amber-500"></i>
                                                        </Link>
                                                        <Link to="https://twitter.com/sireprintingco" target="_blank">
                                                                <i className="fa-brands fa-twitter text-white text-3xl hover:text-amber-500"></i>
                                                        </Link>
                                                        <Link to="https://www.pinterest.com/sireprinting/" target="_blank">
                                                                <i className="fa-brands fa-pinterest text-white text-3xl hover:text-amber-500"></i>
                                                        </Link>
                                                        <Link to="https://www.instagram.com/sireprinting/" target="_blank">
                                                                <i className="fa-brands fa-instagram text-white text-3xl hover:text-amber-500"></i>
                                                        </Link>
                                                </li>
                                                <li className="mt-5 flex lg:justify-normal justify-center ">
                                                        <img src={paymentImg} alt="" className="md:w-48" />
                                                </li>
                                        </ul>
                                </div>
                                <div>
                                        <h2 className="text-3xl text-white font-medium mt-24 mb-7  md:text-center lg:text-start text-center">
                                                {props.heading1}
                                        </h2>
                                        <Footercategories />
                                </div>
                                <div>
                                        <h2 className="text-3xl text-white font-medium mt-24 mb-5 mx-2 md:text-center lg:text-start text-center">
                                                {props.heading2}
                                        </h2>
                                        <Footerlinks />
                                </div>
                        </section>
                        <div className="text-center  py-10 text-white  ">
                                <p>
                                        Copyright ©<span>2020 - 2023 Sire Printing</span> |
                                        <Link to={CWhref} target="_blank">
                                                The Custom Websites
                                        </Link>
                                </p>
                        </div>
                </footer>
        );
}
Footer.propTypes = {
        heading1: propTypes.string.isRequired,
        heading2: propTypes.string,
};
Footer.defaultProps = {
        heading1: "Hot Selling Categories",
        heading2: "Useful Links",
};
