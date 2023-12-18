import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1680201805jessie%20towns.png',
    message: 'I`ve been working with Kevin for the past 6 months on a project and he has been very helpful! We initially had some issues with the printing of our boxes but they worked with us to make it right. Our boxes look beautiful!!',
    name: 'Jessie Towns'
  },
  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1665765820ohana%20locksmith.jpg',
    message: 'Highly recommended, been using them for the past 4 years, always great as we expected',
    name: 'Gilad Ohana'
  },

  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1680202714ff2ceefaea478b2f77c1055d0c791962.jpg',
    message: 'I just wanted to say how pleased I was with the presentation and quality of my custom box. Kevin and his team walked me through the process and helped create an experience for my customers. It took us a while but Kevin stood by me like a general and did not waiver until I was happy. Great customer service',
    name: 'Jackie Halstead'
  },

  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1680202213The%20Spirited%20Tree.jpg',
    message: 'Zack was very helpful. Patient while I worked with my artist to get exactly what I needed. The boxes came exactly when he said, and he follows up to make sure you are taken care of. More importantly, he worked to make sure I had the exact quantity needed within the budget you have to work with.',
    name: 'Michelle The Spirited Tree'
  },

  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1680201960Kris%20Eaton.png',
    message: 'I had some boxes made up for a medical marijuana business, the service was amazingly fast. Everything was up front and none of the price quotes changed. Clear communication and a quality product. I will definitely use this company again for future projects!',
    name: ' Kris Eaton'
  },

  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1680202793Francis.png',
    message: 'Zack at Sire hooked it up! Great experience. Great end product. Delivery didn’t have a tracking number, but Zack was there to answer all of my emails.',
    name: 'Francis Francisco'
  },

  {
    image: 'https://s3.amazonaws.com/sireprinting.com/testimonials/1680202898Linda.png',
    message: 'I ordered custom crepe cones from this company a couple month ago. Zack was so helpful professional and promly relied to my questions. Got my orders in a timely manner. The pricing a bit high, but over all very satisfy doing business with Sireprinting',
    name: 'Linda Frisbee'
  },


];

const TestimonialSlider = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const handleRadioChange = (index) => {
    setCurrentTestimonialIndex(index);
    setAutoSlide(true);
  };

  useEffect(() => {
    let intervalId;

    if (autoSlide) {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 8000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoSlide, currentTestimonialIndex]);


  const nextTestimonial = () => {
    const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
    handleRadioChange(nextIndex);
  };

  return (<>

    <div className="testimonial-slide   ">
      <div className="testimonial w-72 h-80 shadow-2xl px-4 rounded  relative ">
        <div className="flex justify-center">
          <img src={testimonials[currentTestimonialIndex].image} className="mt-10 w-20 rounded-full" />
        </div>
        <p className="text-center text-sm">{testimonials[currentTestimonialIndex].message}</p>
        <div className='flex justify-center  '>
          <h1 className='bg-amber-500 text-white rounded px-4 py-1.5  text-sm  font-medium  absolute top-[300px]'>{testimonials[currentTestimonialIndex].name}</h1>
        </div>
      </div>

    </div>
  </>
  );
};

export default TestimonialSlider;
