import React from 'react';

function CardArticle(props) {
  // console.log(props.img);
  return (
    <>
      <div className='card card-articles m-2'>
        <div className='card-header'>
          <img src={props.img} className='card-img-top' alt='...' />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Pizza {props.name}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>Prix : {props.price ? props.price : 25}€</p>
        </div>
      </div>
    </>
  );
}

export { CardArticle };
