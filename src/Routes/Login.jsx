import { useState } from "react";

import { LoginStep1, LoginStep2, LoginStep3 } from "../components";

const Login = () => {
  const [step, setStep] = useState(1);
  function handleStep() {
    setStep(step + 1);
  }

  return (
    <div>
      {step == 1 ? <LoginStep1 step={step} handleStep={handleStep} /> : <></>}
      {step == 2 ? <LoginStep2 step={step} handleStep={handleStep} /> : <></>}
      {step == 3 ? <LoginStep3 step={step} handleStep={handleStep} /> : <></>}
    </div>
  );
};

export default Login;
