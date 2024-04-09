import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import "./styles.css"


const Star = ({noOfStars = 5}) => {

    const [ rating, setRating] = useState(0);
    const [ hover, setHover ] = useState(0);

    const handleClick = (getCurrIndex) => {
      console.log("handleClick", getCurrIndex);
      setRating(getCurrIndex)
    }

    const handleMouseEnter = (getCurrIndex) => {
      console.log("handleMouseEnter", getCurrIndex);
      setHover(getCurrIndex)
    }

    const handleMouseLeave = () => {
      console.log("handleMouseLeave", rating);
      setHover(rating)
    }

    console.log("hover", hover);
    console.log("rating", rating);

  return (
    <div className='star-rating'>
        {[...Array(noOfStars)].map((_,index) => {

          // initaially index is 0 , so now index is set to 1
            index +=1 ;
            {console.log("index", index);}
            return (
              <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" :"inactive" }
              onClick={()=>handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={()=> handleMouseLeave()}
              size={40}
              />
            )
        })}
      
    </div>
  )
}

export default Star
