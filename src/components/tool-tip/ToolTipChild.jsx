import React, { useState } from 'react'

const ToolTipChild = ({delay,children,content}) => { 
  const [ isVisible, setIsVisible] = useState(false)
  let timeout

  const handleShowTooltip = () => {
    console.log("hover");
    timeout = setTimeout(()=>{
      setIsVisible(true)
    }, delay || 500)
  }
  
  const handleHideTooltip = () => {
    clearTimeout(timeout);
    setIsVisible(false)
    console.log("hide");
  }
  
  return (
    <div className='tooltip-container'
    onMouseEnter={handleShowTooltip}
    onMouseLeave={handleHideTooltip}>
        
        {children}
      
      {
        isVisible ? <div className='tooltip'>{content}</div> : null
      }
    </div>
  )
}

export default ToolTipChild
