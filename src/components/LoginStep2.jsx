import { useForm } from "react-hook-form";
import { useState } from "react";
import { sprite1 } from "../assets";
import { vector1 } from "../assets";
import { Link } from "react-router-dom";
import { vector2 } from "../assets";

export const LoginStep2 = (props) => {
  function click() {
    props.handleStep;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="bg-background lg:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[100vh] ">
        <div className="min-h-screen flex justify-center items-center  ">
          <div className="flex flex-col  bg-white border rounded-lg p-5 w-[457px]">
            <img src={sprite1} className="w-[45px] h-[42.43px] mx-auto" />
            <p className="text-[#1C4B82] font-[900] text-[16px] mt-2 text-center font1">
              بنیاد مسکن انقلاب اسلامی
            </p>
            <h2 className="text-black font-[700] text-[24px] text-center mt-5 font2">
              {" "}
              ورود به سامانه بنیاد مسکن{" "}
            </h2>

            <div className="relative w-full mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                    کد ملی
                  </span>
                </label>
                <input
                  readOnly
                  type="text"
                  maxLength="10"
                  className="input input-bordered w-[410px] p-1"
                />
              </form>
              <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <label className="label ">
                  <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                    شماره همراه
                  </span>
                </label>
                <input
                  type="text"
                  maxLength="11"
                  className="input input-bordered w-[410px] p-1"
                  {...register("number", { required: true, maxLength: "11" })}
                />
                <img
                  src={vector2}
                  className="absolute left-[-5px]  right-96 top-[32px]"
                />
                {errors.number && (
                  <span className="text-red-600">This field is required</span>
                )}

                <div className="flex flex-row-reverse gap-2 mt-10 font2">
                  <Link to={"/LoginStep3"}>
                    <button
                      type="submit"
                      className="btn bg-[#49C264] border-none text-[14px] font-normal py-0"
                    >
                      <span className="px-3">ادامه</span>
                      <img src={vector1} />
                    </button>
                  </Link>

                  <Link to={"/LoginStep1"}>
                    {" "}
                    <button className="btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0">
                      <span className="px-3">بازگشت</span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* LoginStep2
      <button onClick={click} className="btn">
        click
      </button> */}
    </div>
  );
};
