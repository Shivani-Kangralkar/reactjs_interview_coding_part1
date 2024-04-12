import React, { useState } from "react";
import StepProgressBarChild from "./StepProgressBarChild";

const StepProgressBarParent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div className="step-progress-bar-container">
      <h1>Step progress bar</h1>
      <StepProgressBarChild
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default StepProgressBarParent;
