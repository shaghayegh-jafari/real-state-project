import { useState } from "react";

import { AddStep1 } from "../components";
import { AddStep2 } from "../components";
import { AddStep3 } from "../components";
import { AddStep4 } from "../components";

const Addproperty = () => {
  const [step, setStep] = useState(1);
  function handleStep() {
    setStep(step + 1);
  }

  return (
    <div>
      {step == 1 ? <AddStep1 step={step} handleStep={handleStep} /> : <></>}
      {step == 2 ? <AddStep2 step={step} handleStep={handleStep} /> : <></>}
      {step == 3 ? <AddStep3 step={step} handleStep={handleStep} /> : <></>}
      {step == 4 ? <AddStep4 step={step} handleStep={handleStep} /> : <></>}
    </div>
  );
};

export default Addproperty;
