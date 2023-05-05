import { useState } from "react";

const Selectbox = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleSelectCgange = (event) => {
    setSelectedValue(event.target.value !== "");
    setIsValid(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleSelectCgange}
        className="select w-[400px] md:w-[450px] select-bordered"
      >
        <option value="" disabled selected></option>
        <option value="option1">مازندران</option>
        <option value="option2">a</option>
        <option value="option3">b</option>
        <option value="option4">c</option>
        <option value="option5">d</option>
        <option value="option6">e</option>
      </select>
      {isValid ? (
        ""
      ) : (
        <div className="text-red-600 text-[12px]">
          لطفا یک مورد را انتخاب کنید.{" "}
        </div>
      )}
    </div>
  );
};

export { Selectbox };
