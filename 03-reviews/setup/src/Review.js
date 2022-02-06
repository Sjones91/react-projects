import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name,job,image,text} = people[index]
  const [readMore, setReadmore] = useState(false)
  const nextButton = ()=> {
    if(index <= 2) {
    setIndex(index + 1)
  } else {
    return
  }
  }

  const prevButton = ()=> {
    if(index >=1) {
    setIndex(index - 1)
  } else {
    return
  }
  }
  const randomButton =()=> {
    let newIndex = Math.floor(Math.random() * people.length)
    setIndex(newIndex)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span>
          <FaQuoteRight className='quote-icon'/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h5 className='job'>{job}</h5>
      <p className='text'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={()=> prevButton()}><FaChevronLeft/></button>
        <button className='next-btn' onClick={()=> nextButton()}><FaChevronRight/></button>
      </div>
      <button className='random-btn' onClick={()=> randomButton()}>Surprise Me</button>
    </article>
  )

};

export default Review;
