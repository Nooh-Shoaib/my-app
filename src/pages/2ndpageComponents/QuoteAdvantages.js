import React from 'react';
import File from './file';





const advantages = [
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/design-min.webp',
    label: 'Free Graphics',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/eco-min.webp',
    label: 'Eco-Friendly',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/ink-min.webp',
    label: 'Environmental Friendly Ink',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/short-run-min.webp',
    label: 'Short Run',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/size-min.webp',
    label: 'Custom Size & Style',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/price-min.webp',
    label: 'Competitive Price',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/time-min.webp',
    label: 'Fast Turnaround',
  },
  {
    imageUrl:
      'https://s3.amazonaws.com/sireprinting.com/images/perks/delivery-min.webp',
    label: 'Free Delivery',
  },
];
const Advantages = () => {
  return (

    <div className="grid lg:grid-cols-2 grid-cols-2 md:grid-cols-2 justify-items-center lg:gap-x-20   gap-y-0 px-3 py-7">
      {advantages.map((v, i) => {
        return (
          <div key={i} className="w-20 lg:w-[90px]">
            <img src={v.imageUrl} alt={v.label} loading="lazy" />
            <h2 className=" text-xs text-black font-medium flex justify-center text-center">
              {v.label}
            </h2>
          </div>
        );
      })}
    </div>
  );
};


let button = 'Submit'

const formFields = [
  {
    label: 'Length',
    type: 'text',
    name: 'length',
    placeholder: 'Length',
    classNames: 'lg:w-16  md:w-20 w-8 mx-1 h-9 px-1 border placeholder:text-xs',
  },
  {
    label: 'Width',
    type: 'text',
    name: 'width',
    placeholder: 'Width',
    classNames: 'lg:w-16 md:w-20 w-8 mx-1 h-9 px-1 border placeholder:text-xs',
  },
  {
    label: 'Depth',
    type: 'text',
    name: 'depth',
    placeholder: 'Depth',
    classNames: 'lg:w-16 md:w-20 w-8 mx-1 h-9 px-1 border placeholder:text-xs',
  },
];

const colorOptions = [
  'None',
  '1 Color',
  '2 Color',
  '3 Color',
  '4 Color',
  '4/1 Color',
  '4/2 Color',
  '4/3 Color',
  '4/4 Color',
];

export default function QuoteAdvantages() {


  return (
    <div className="border border-gray-300 m-7 rounded-md">
      <form className="lg:flex ">
        <fieldset>
          <div className=" lg:mb-2 mx-2 items-center md:justify-center md:text-2xl flex justify-start lg:font-medium text-lg font-semibold text-center lg:text-3xl lg:py-6 py-4">
            GET CUSTOM QUOTE
          </div>

          <div className="">
            {formFields.map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className={field.classNames}

              />
            ))}
            <select className="focus outline-none focus:ring-0 lg:w-20 md:w-24 w-24 mx-1 h-9  border text-sm">
              <option>Inch</option>
              <option>mm</option>
              <option>cm</option>
            </select>
          </div>

          <div className='flex'>
            <span>
              <h4 className="mx-2 lg:text-base text-sm font-semibold">Color:</h4>
              <select className="focus outline-none focus:ring-0 lg:w-36 w-28 md:w-[170px] px-2 mx-2 h-9 border text-base font-semibold">
                {colorOptions.map((option, index) => (
                  <option className='font-semibold' key={index}>{option}</option>
                ))}
              </select>
            </span>
            <span>
              <h4 className="text-sm lg:text-base font-semibold">*Quantity</h4>
              <input type="number" className="mx-2 border w-[100px] md:w-[171px] lg:w-[139px] h-9" />
            </span>
          </div>

          <div className='flex'>
            <span>
              <h4 className="lg:text-base text-sm font-semibold ">*Full name:</h4>
              <input
                type="text"
                className="my-1 w-[110px]  md:w-[170px]  lg:w-[140px] border mx-2 px-2 h-9 placeholder:text-sm"
                name="fullName"
              />
            </span>
            <span>
              <h4 className="text-sm lg:text-base font-semibold">*Phone</h4>
              <input
                type="text"
                className="my-1 w-[110px] lg:w-[140px]  md:w-[170px]  border md:mx-3 mx-2 h-9 px-2 placeholder:text-sm"
                name="phone"
              />
            </span>
          </div>
          <div>
            <h2 className='text-base font-semibold'>*Email Address:</h2>
            <input
              type="text"
              className="my-1 w-[240px] md:w-[360px] lg:w-[300px] border mx-2 h-9 px-2 placeholder:text-sm"
              name="email"
            />
          </div>
          <File />
          <div>
            <h2 className='lg:mt-5 font-semibold'> *Message:</h2>
            <textarea
              className="border placeholder:text-black placeholder:px-2 py-2 lg:mx-2 mx-0.5 w-[250px] md:w-[360px] lg:w-[300px] placeholder-text-black text-sm"
              placeholder="Write short message"
              name="message"
            ></textarea>
          </div>
          <div className='flex lg:justify-end justify-center'>
            <button
              type="submit"
              className="bg-black text-white lg:px-7 md:px-[150px] lg:mb-6 lg:mt-3   px-24 py-2 hover:animate-pulse font-bold"
            >
              {button}
            </button>

          </div>
        </fieldset>
        <Advantages />
      </form>
    </div>
  );
}