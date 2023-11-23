import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Topbar(props) {
  // const [text, setText] = useState('|');
  return (
    <nav className="hidden lg:block">
      <div className=" bg-amber-500">
        <div className="flex justify-between space-x-5 px-24 py-1 h-14 font-sans ">
          <div>
            <ul className="flex my-1">
              <li className="">
               <Link to="tel:+14108349965">
                  <i className="fa fa-phone icon_nav text-white text-base bg-black px-1.5 py-0.5 mt-1.5 rounded"></i>
                  &nbsp; <span>{props.number}</span>
               </Link>
              </li>
              <li className="mt-1.5">&nbsp;&nbsp;|&nbsp;&nbsp;</li>
              <li>
               <Link to="mailto:support@sireprinting.com">
                  <i className="fa fa-envelope icon_nav text-white text-sm bg-black px-2 py-1 mt-1.5 rounded"></i>
                  &nbsp;<span>{props.email}</span>
               </Link>
              </li>
              <li className="mt-1.5">&nbsp;&nbsp;|&nbsp;&nbsp;</li>
              <li>
                <Link
                  to="https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp text-2xl	rounded  px-1 mt-1.5    bg-green-700 text-white"></i>
               </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <input
              type="search"
              placeholder="Search"
              className="rounded-md px-3 py-1.5 focus outline-none focus:ring-0 border-2 bg-slate-50 border-amber-500 placeholder-slate-600"
            />
            <button>
              <span className="input-group-text border-0 bg-black py-2 px-3 text-white rounded-md">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
Topbar.propTypes = {
  number: propTypes.string.isRequired,
  email: propTypes.string,
};
Topbar.defaultProps = {
  number: "12345678",
  email: "example@gmail.com",
};
