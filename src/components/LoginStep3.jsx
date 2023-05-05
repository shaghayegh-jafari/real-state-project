import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useForm } from "react-hook-form";

import { sprite1 } from "../assets";
import { vector1 } from "../assets";
import { vector3 } from "../assets";

const LoginStep3 = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  function handlePasswordChange(event) {
    const inputValue = event.target.value;
    setPassword(inputValue);
  }
  function handleClick() {
    navigate("/dashboard");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //     if (inputValue.length < 8) {
  //       setColor("orange");
  //     } else {
  //       setColor("green");
  //     }
  //   }
  // }

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
            <p className="text-[#1E1E1E] text-[12px] text-center font-[600] mt-2">
              {" "}
              لطفا کد ارسال شده به شماره{" "}
              <span className="text-[#1C4B82] text-[12px] fontnum">
                09015678923
              </span>{" "}
              را وارد نمائید{" "}
            </p>
            <span className="countdown font-mono text-[18px] text-[#1C4B82] mx-auto mt-3 fontnum ">
              <span style={{ "--value": 0 }}></span>:
              <span style={{ "--value": 2 }}></span>
            </span>

            <div className="relative w-full mt-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                    کد دریافتی
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
                <div className="relative">
                  <label className="label absolute  top-[5px]  font3 w-[200px]">
                    <span className="label-text bg-white absolute px-6">
                      رمز عبور
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-[410px] p-1 mt-5"
                    required
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                  />
                </div>

                <div className="relative">
                  <hr className="w-[410px]  bg-[#b2b2b2]  h-2 my-2 border-0 rounded" />

                  <hr
                    className={` transition-all ${
                      password.length < 8
                        ? "w-[30%] bg-[orange]"
                        : password.length >= 8
                        ? "w-[100%] bg-[#76e976] "
                        : ""
                    } h-2 border-1 rounded z-10 absolute top-0`}
                  />
                </div>
                <div className="flex flex-row mt-1">
                  <img src={vector3} />{" "}
                  <span className="text-[10px] text-[#1C4B82] ms-1">
                    {" "}
                    رمز عبور باید حداقل 8 کاراکتر و ترکیبی از حروف و اعداد باشد{" "}
                  </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="relative">
                  <label className="label">
                    <span className=" absolute label-text top-[9px] bg-white px-3 font1">
                      تکرار رمز عبور
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-[410px] p-1"
                  />
                </form>

                <div className="flex flex-row-reverse gap-2 mt-10 font2">
                  <button
                    onClick={handleClick}
                    className="btn bg-[#49C264] border-none text-[14px] font-normal py-0"
                  >
                    <span className="px-3">ثبت تغییرات</span>
                    <img src={vector1} />
                  </button>

                  <button className="btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0">
                    <span className="px-3">بازگشت</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginStep3;
