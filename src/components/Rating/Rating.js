import React from 'react';
import './Rating.css';
import ReactStars from 'react-rating-stars-component';

const Rating = props => {
  return (
    <div className='row'>
      <p className='comment'>Rate this Album</p>
      <div className='stars'>
        <ReactStars count={5} value={props.rating} size={24} activeColor='#ffd700' />
      </div>
    </div>
  );
};
export default Rating;
