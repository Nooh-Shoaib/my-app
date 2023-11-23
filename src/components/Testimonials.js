import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const testimonialsData = [
  {
    client: "JESSIE TOWN-<small>Client<small/>",
    text: "I've been working with Kevin for the past 6 months on a project and he has been very helpful! We initially had some issues with the printing of our boxes but they worked with us to make it right. Our boxes look beautiful!!",
    imgSrc: "https://s3.amazonaws.com/sireprinting.com/testimonials/1680201805jessie%20towns.png"
  },
  {
    client: "GILAD OHANA-<small>Client<small/>",
    text: "Highly recommended, been using them for the past 4 years, always great as we expected",
    imgSrc: "https://s3.amazonaws.com/sireprinting.com/testimonials/1665765820ohana%20locksmith.jpg"
  },
  {
    client: "JACKIE HALSTEAD-<small>Client<small/>",
    text: "I just wanted to say how pleased I was with the presentation and quality of my custom box. Kevin and his team walked me through the process and helped create an experience for my customers. It took us a while but Kevin stood by me like a general and did not waiver until I was happy. Great customer service.",
    imgSrc: "https://s3.amazonaws.com/sireprinting.com/testimonials/1680202714ff2ceefaea478b2f77c1055d0c791962.jpg"
  },
  {
    client: "MICHELLE THE SPIRITED TREE-<small>Client<small/>",
    text: "Zack was very helpful. Patient while I worked with my artist to get exactly what I needed. The boxes came exactly when he said, and he follows up to make sure you are taken care of. More importantly, he worked to make sure I had the exact quantity needed within the budget you have to work with.",
    imgSrc: "https://s3.amazonaws.com/sireprinting.com/testimonials/1680202213The%20Spirited%20Tree.jpg"
  },
];



export default function CustomTestimonials({ heading }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonialsData.length);
  };

  const clientHTML = testimonialsData[currentTestimonial].client;
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); 
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="pt-24 py-4">
      <h2 className="text-center text-4xl font-semibold text-black">
      {heading}
    </h2>
    <div className="lg:bg-black md:bg-black lg:py-24 md:py-24 flex justify-center">

        <div className="custom-testimonial-content">
          <img src={testimonialsData[currentTestimonial].imgSrc} alt="Client" className="custom-testimonial-image" />
          <p className="custom-testimonial-text text-base text-center">{testimonialsData[currentTestimonial].text}</p>
          <p className="custom-testimonial-client" dangerouslySetInnerHTML={{ __html: clientHTML }}></p>
        </div>
       
      </div>
    </div>
  );
}

CustomTestimonials.propTypes = {
  heading: PropTypes.string.isRequired,
};


