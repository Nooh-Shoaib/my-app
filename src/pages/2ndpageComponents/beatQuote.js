import React from 'react'
import { Link } from 'react-router-dom'
import FileUploadButton from './UploadFile'

export default function beatQuote() {
        return (


                <div className=" w-1/3 lg:sticky lg:top-40 lg:right-0 md:sticky  md:top-40 pr-52 md:right-0 lg:h-full md:h-full  lg:mt-36 md:mt-36 mt-6 ">
                        <form>
                                       
                                <fieldset className=" field bg-white mx-1 lg:mx-10 lg:w-72  md:w-52">
                                <div className="bg-amber-500  lg:w-[420px] md:w-[208px] w-full mb-3 h-12 lg:h-12 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                Beat My Quote
                                        </div>
                                        <div className="space-x-2">
                                                <input type="text" placeholder="Length" className="lg:w-20 md:w-10 w-11
                                                 mx-1 h-8 px-1 border placeholder:text-xs" />
                                                <input type="text" placeholder="Width" className="lg:w-20 md:w-10 w-11
                                                 mx-1 h-8 px-1 border placeholder:text-xs" />
                                                <input type="text" placeholder="Depth" className="lg:w-20 md:w-10 w-11
                                                 mx-1 h-8 px-1 border placeholder:text-xs" />
                                                <select className="focus outline-none focus:ring-0 lg:w-32 md:w-11 w-24 mx-2 h-8 px-1 border text-sm">
                                                        <option>Inches</option>
                                                        <option>mm</option>
                                                        <option>cm</option>
                                                </select>
                                        </div>
                                        <div>
                                                <select className="focus outline-none focus:ring-0 w-[270px] md:w-48 lg:w-[397px] mx-1 h-8 px-2 border my-2 text-sm font-medium">
                                                        <option>Choose Product</option>

                                                        <option  >Choose Product</option>
                                                        <option value="Custom CBD Stickers &amp; Labels" >
                                                                Custom CBD Stickers &amp; Labels</option>

                                                        <option value="Kraft Cereal Boxes" >
                                                                Kraft Cereal Boxes</option>
                                                        <option value="Custom Incense Box Packaging" >
                                                                Custom Incense Box Packaging</option>
                                                        <option value="Kraft Boxes with Window" >
                                                                Kraft Boxes with Window</option>
                                                        <option value="Cardboard Box with Handles" >
                                                                Cardboard Box with Handles</option>
                                                </select>
                                        </div>
                                        <div className="flex">
                                                
                                       <span>
                                                <h4 className="mx-2 lg:text-lg text-sm font-semibold">Color:</h4>
                                        <select className="focus outline-none focus:ring-0 lg:w-48 w-32 mx-2 md:w-24 px-4 h-8 border text-sm">
                                                <option>None</option>
                                                <option>1 Color</option>
                                                <option>2 Color</option>
                                                <option>3 Color</option>
                                                <option>4 Color</option>
                                                <option>4/1 Color</option>
                                                <option>4/2 Color</option>
                                                <option>4/3 Color</option>
                                                <option>4/4 Color</option>
                                        </select>
                                        </span>
                                        <span>
                                        <h4 className=' lg:text-lg text-sm font-semibold'>*Quantity</h4>
                                                <input type="number" className=" border w-[133px] md:w-24 lg:w-48 h-8" />
                                        </span>
                                        </div>
                                        <div>
                                                <input type="text" placeholder="Full Name" className="my-1 w-[270px] md:w-48 h-8 lg:w-96 border mx-2 px-2 placeholder:text-sm" />
                                        </div>
                                        <div>
                                                <input type="text" placeholder="Phone" className="my-1 w-[270px] lg:w-96 md:w-48 h-8 border mx-2 px-2 placeholder:text-sm" />
                                        </div>
                                        <div>
                                                <input type="text" placeholder="Email Address" className="my-1 w-[270px] md:w-48  h-8 lg:w-96 border mx-2 px-2 placeholder:text-sm" />
                                        </div>
                                      <FileUploadButton/>
                                        <div>
                                                <textarea className="border placeholder:text-black placeholder:px-3 py-2 mx-2 w-[270px] md:w-48 h-16 lg:w-96 placeholder-text-black text-sm" placeholder="Message"></textarea>
                                        </div>
                                        <Link to="">
                                                <button type="submit" className="bg-black text-white px lg:px-8 md:px-[77px] lg:py-1.5 mb-2 px-[120px]  py-2.5 hover:animate-pulse lg:mr-1 ml-0.5 lg:rounded">Submit</button>
                                        </Link>
                                </fieldset>
                        </form>

                </div>

        )
}















