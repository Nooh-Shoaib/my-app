import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {


  return (
    <div className="lg:container lg:mx-6 mx-3 overflow-x-hidden bg-white my-6 shadow-md">
      <div className="bg-white w-72 lg:w-[1450px]">
        <div>
          <div>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <img src={props.content.imgSrc} alt={props.content.title} className="lg:w-full w-72 h-auto" />
              <div>
                <time
                  className="py-8 text bg-amber-500 lg:px-[5px] px-2 cursor-pointer text-white font-semibold rounded-lg text-sm hover:bg-transparent hover:text-black mx-6"
                  dangerouslySetInnerHTML={{ __html: props.content.date }}
                />

              </div>

              <h3 className="mt-10 text-sm lg:text-2xl font-bold leading-6 text-gray-900 hover:text-amber-500 px-5">
                <Link to="/">{props.content.title}</Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-base leading-6 text-gray-600 px-6">
                {props.content.info}
              </p>
              <div className="flex items-center">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  className="h-10 w-10 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    <a href="#" className="hover:text-amber-500">
                      <i className="fa-solid fa-list"></i>&nbsp;
                      <span className="font-light text-gray-500 hover:text-amber-500">{props.content.author}</span>
                    </a>
                  </p>
                </div>  
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

