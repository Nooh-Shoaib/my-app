import React from "react";
import { Link } from "react-router-dom";
import Iconquote from "./iconquote";

let whatsapp = "https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0";
let phone_number = "tel:+14108349965";
let mail = "mailto:support@sireprinting.com";

export default function FloatingIcon() {
        return (
                <section className="fixed top-44 my-10 space-y-4 lg:hidden z-10 ">
                        <div>
                                <Link to={whatsapp} target="_blank">
                                        <span className="fab fa-whatsapp text-2xl px-1 text-white rounded bg-green-700"></span>
                                </Link>
                        </div>
                        <div>
                                <Link to={phone_number} target="_blank">
                                        <span className="fa fa-phone text-xl px-1 rounded text-white bg-amber-500"></span>
                                </Link>
                        </div>
                        <div>
                                <Link to={mail}>
                                        <span className="fa fa-envelope text-xl px-1 rounded text-white bg-amber-500"></span>
                                </Link>
                        </div>
                        <div>
                                <Iconquote />

                        </div>
                </section>
        );
}
