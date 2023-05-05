import { useForm } from "react-hook-form";
import { useState } from "react";
import { Option1 } from "./Option1";
import { vector1 } from "../assets";
import { Option2 } from "../components";

const FormAddStep2 = (props) => {
  function click() {
    props.handleStep();
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    click();
    console.log(data);
    data.preventDefault();
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="relative ">
            <label className="label">
              <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                نوع مالکیت*
              </span>
            </label>

            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="select w-[400px] md:w-[450px] select-bordered px-5"
            >
              <option value="" disabled selected></option>
              <option value="option1">سند شش دانگ</option>
              <option value="option2">برگه واگذاری</option>
              <option value="option3">قولنامه</option>
              <option value="option4">سند مشاعی</option>
              <option value="option5">سایر</option>
            </select>
          </div>
          {selectedOption === "option1" && (
            <div>
              <Option1 />
            </div>
          )}
          {selectedOption === "option2" && (
            <div>
              <Option2 />
            </div>
          )}
          {/* {selectedOption === "option3" && <div> option 3 was selected!</div>}
          {selectedOption === "option4" && <div> option 4 was selected!</div>}
          {selectedOption === "option5" && <div> option 5 was selected!</div>} */}
        </div>
        <div className="flex flex-row-reverse gap-2 mt-4 font2">
          <button
            type="submit"
            // className={`btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0 ${
            //   isFormCompleted ? "bg-green-500" : ""
            // }`}
          >
            <span className="btn bg-[#49C264] border-none text-[14px] font-normal py-0">
              ذخیره و ادامه{" "}
            </span>
            <img src={vector1} />
          </button>

          <button className="btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0">
            <span className="px-3">بازگشت</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export { FormAddStep2 };
