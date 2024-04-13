import React from 'react'
import './stepProgress.css'

const StepProgressBarChild = ({steps,activeStep,setActiveStep}) => {

  const handlePrev = () => {
    console.log("prev");
    setActiveStep((prevStep) => Math.max(prevStep -1,0))
  }

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep +1, steps.length -1))
  }

  console.log("activeStep",activeStep);
  // console.log(steps.length);

  function calculateCurrentStepWidth() {
    return `${(100 / (steps.length - 1)) * activeStep}%`;
  }

  return (
    <div>
        <div className='steps'>
          {steps && steps.length > 0 
          ? steps.map((item, idx) => (
            <div 
            className={`step ${idx <= activeStep ? 'active' : ''}`} 
            style={{ width: calculateCurrentStepWidth() }} key={idx}>
              {item}
            </div>
          ))
        : null}
        </div>



        <div className='step-buttons-wrapper'>
          <button
              onClick ={handlePrev}
              disabled={activeStep === 0}>
            Prev
          </button>

          <button 
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}>
            Next
          </button>

        </div>
      
    </div>
  )
}

export default StepProgressBarChild
