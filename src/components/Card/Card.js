import React from 'react';
import Rating from '../Rating/Rating';
import './Card.css';

const Card = props => {
  return (
    <div className='container'>
      <img src={props.img} alt='albumCover' className='cover' />
      <div className='album'>
        <h2>
          <b>{props.author}</b>
        </h2>
        <h3>{props.album}</h3>
        <h3>({props.year})</h3>
      </div>

      <footer>
        <Rating rating={props.rating} />
      </footer>
    </div>
  );
};
export default Card;
