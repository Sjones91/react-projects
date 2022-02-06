import React, { useState } from 'react';

const Tour = ({id, info, price, image, name, removeTour}) => {
  const [readMore, setReadmore] = useState(false);
  
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div>
          <h2 className='tour-name'>{name}</h2>
          <h2 className="tour-price">${price}</h2>
        </div>
        <div>
          <p>{readMore ? info : `${info.substring(0,200)}...`}
            <button onClick={()=> setReadmore(!readMore)}>{readMore? "Show Less" : "Show More"}</button>
          </p>
          <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
        </div>

      </footer>
    </article>
  )
};

export default Tour;
