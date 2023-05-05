import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sprite1 } from "../assets";
import { vector1 } from "../assets";
import InputContext from "./InputContext";

const FormStep1 = () => {
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    click();

    data.preventDefault;
  };
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };
  return (
    <div>
      <div className="bg-background w-[100vw] h-[100vh] ">
        <div className="flex justify-center items-center min-h-screen  ">
          <div className="flex ">
            <div className="flex flex-col  bg-white border rounded-lg p-5 w-[457px]">
              <img src={sprite1} className="w-[45px] h-[42.43px] mx-auto" />
              <p className="text-[#1C4B82]  text-[16px] mt-2 text-center font1">
                بنیاد مسکن انقلاب اسلامی
              </p>
              <h2 className="text-black text-[24px] text-center mt-5 font2">
                {" "}
                ورود به سامانه بنیاد مسکن{" "}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col font2 mt-5">
                  <div className="flex flex-row gap-2">
                    <label className="flex ">
                      <input
                        type="radio"
                        className="form-radio"
                        name="myRadioGroup"
                        value="option1"
                        onChange={handleRadioChange}
                      />
                      <span className="ms-2">حقیقی</span>
                    </label>
                    <label className="flex ">
                      <input
                        type="radio"
                        className="form-radio"
                        name="myRadioGroup"
                        value="option2"
                        onChange={handleRadioChange}
                      />
                      <span className="ms-2">حقوقی</span>
                    </label>
                  </div>

                  {selectedRadio === "option1" && (
                    <div className="relative  ">
                      <InputContext.Provider>
                        <label className="label">
                          <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                            کد ملی
                          </span>
                        </label>
                        <input
                          type="text"
                          maxLength="10"
                          value={inputValue}
                          onChange={handleInputChange}
                          className="mt-2 p-2 border-gray-400 border rounded w-[410px] "
                          //   placeholder="Input component 1"
                        />
                      </InputContext.Provider>
                    </div>
                  )}

                  {selectedRadio === "option2" && (
                    <div className="relative  ">
                      <label className="label">
                        <span className=" absolute label-text top-[9px] bg-white px-3 font3">
                          شناسه ملی
                        </span>
                      </label>
                      <input
                        type="text"
                        maxLength="10"
                        className="mt-2 p-2 border-gray-400 border rounded w-[410px] "
                        //   placeholder="Input component 1"
                      />
                    </div>
                  )}
                  <div className="flex flex-row-reverse gap-2 mt-20 font2">
                    <button
                      type="submit"
                      onClick={() => navigate("/LoginStep2")}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormStep1 };
