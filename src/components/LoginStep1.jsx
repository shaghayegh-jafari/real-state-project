import { useForm } from "react-hook-form";
import { useState } from "react";
import { sprite1 } from "../assets";
import { vector1 } from "../assets";
import { FormStep1 } from "./FormStep1";

const LoginStep1 = (props) => {
  // function click() {
  //   props.handleStep();
  // }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   click();

  //   data.preventDefault;
  // };
  // const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <FormStep1 handleStep={props.handleStep} />
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-background w-[100vw] h-[100vh]  ">
          <div className="min-h-screen flex justify-center items-center  ">
            <div className="flex flex-col  bg-white border rounded-lg p-5 w-[457px]">
              <img src={sprite1} className="w-[45px] h-[42.43px] mx-auto" />
              <p className="text-[#1C4B82]  text-[16px] mt-2 text-center font1">
                بنیاد مسکن انقلاب اسلامی
              </p>
              <h2 className="text-black text-[24px] text-center mt-5 font2">
                {" "}
                ورود به سامانه بنیاد مسکن{" "}
              </h2>

              <div className="flex flex-row font2">
                {" "}
                <div className="flex flex-row">
                  <label className="label cursor-pointer">
                    <span className="label-text text-[14px]  me-2">حقیقی</span>
                    <input
                      type="radio"
                      name="options"
                      value="optionRadio1"
                      checked={selectedOption === "optionRadio1 "}
                      className="radio checked:bg-blue-500"
                      onChange={() => setSelectedOption("optionRadio1")}
                    />
                  </label>

                  <div className="flex flex-row">
                    <label className="label cursor-pointer">
                      <span className="label-text text-[14px] me-2">حقوقی</span>
                      <input
                        type="radio"
                        name="options"
                        value="optionRadio2"
                        checked={selectedOption === "optionRadio2"}
                        className="radio checked:bg-blue-500"
                        onChange={() => setSelectedOption("optionRadio2")}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {selectedOption === "optionRadio1" && (
                <div className="relative  ">
                  <label className="label">
                    <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                      کد ملی
                    </span>
                  </label>
                  <input
                    type="text"
                    maxLength="10"
                    className="input input-bordered w-[410px] p-1"
                     {...register("number", { required: true })}
                  />
                   {errors.number && (
                    <span className="text-red-600 text-[12px] font2 mt-1">
                      پر کردن این فیلد الزامی ست.
                    </span>
                  )} 

                  <div className="flex flex-row-reverse gap-2 mt-20 font2">
                    <button
                      type="sumbit"
                      className="btn bg-[#49C264] border-none text-[14px] font-normal py-0"
                    >
                      <span className="px-3">ادامه</span>
                      <img src={vector1} />
                    </button>

                    <button className="btn bg-[#1C4B82] border-none text-[14px] font-normal">
                      ورود از درگاه دولت من{" "}
                    </button>
                  </div>
                </div>
              )}
              {selectedOption === "optionRadio2" && (
                <div>
                  {" "}
                  <div className="relative  ">
                    <label className="label">
                      <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                        شناسه ملی
                      </span>
                    </label>
                    <input
                      type="text"
                      maxLength="10"
                      className="input input-bordered w-[410px] p-1"
                       {...register("number2", { required: true })}
                    />
                     {errors.number2 && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )} 

                    <div className="flex flex-row-reverse gap-2 mt-20 font2">
                      <button
                        type="submit"
                        className="btn bg-[#49C264] border-none text-[14px] font-normal py-0"
                      >
                        <span className="px-3">ادامه</span>
                        <img src={vector1} />
                      </button>

                      <button className="btn bg-[#1C4B82] border-none text-[14px] font-normal">
                        ورود از درگاه دولت من{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export { LoginStep1 };
