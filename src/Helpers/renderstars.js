import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const renderStars = (starCount) => {
  const stars = Array.from({ length: starCount }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-300' />
  ));
  return stars;
};

export default renderStars;


{/* {Array(5)
                .fill(null)
                .map((_, index) => (
                        <i key={index} className='fa-solid fa-star text-yellow-300'></i>
                ))} */}   