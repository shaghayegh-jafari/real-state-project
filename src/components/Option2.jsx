import { useForm } from "react-hook-form";
import { useState } from "react";
import { eye } from "../assets";
import { vector1 } from "../assets";
const Option2 = (props) => {
  function click() {
    props.handleStep();
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [showDiv, setShowDiv] = useState("");
  const handleFileInputChange = (event) => {
    setShowDiv(true);
  };

  return (
    <div>
      <div className="border-b-2 border-dashed my-6"></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row  gap-5">
            <div className="relative ">
              <label htmlFor="name" className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  شماره قرارداد*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 focus:bg-white"
                  {...register("nameRequired", { required: true })}
                />
                {errors.nameRequired && (
                  <span className="text-red-500"> This field is required</span>
                )}
              </div>
            </div>
            <div className="relative ">
              <label htmlFor="text" className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  واگذارکننده*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  id="text"
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10"
                />
              </div>
            </div>
          </div>
          <div className="border-b-2 border-dashed my-6"></div>
          <div>
            {showDiv && (
              <div className="flex flex-row justify-between bg-[#F5F6FA] px-5  w-[400px] md:w-[915px] py-1 rounded-md">
                <p className="text-[13px] text-[#1C4B82] font2 ">
                  برگه واگذاری پیوست شد
                </p>
                <div className="flex flex-row gap-1">
                  <p className="text-[14px] text-[#1C4B82]">مشاهده</p>
                  <img src={eye} className="w-[12px] h-[10px] mt-1" />
                  <p></p>
                  <p className="text-[#E91919] text-[14px] font2">حذف</p>
                </div>
              </div>
            )}
            <div className="relative ">
              <label htmlFor="file" className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  برگه واگذاری*
                </span>
              </label>

              <div className="flex flex-col">
                <input
                  id="file"
                  type="file"
                  onChange={handleFileInputChange}
                  className="input rounded-md   border-dashed border-2 border-[#000000] w-[400px] md:w-[920px] p-1  px-10"
                  placeholder="برای انتخاب فایل روی این بخش کلیک کنید یا فایل خود را اینجا رها نمائید"
                />

                <p className="text-[13px] font3 mt-4">
                  انواع فایل‌های مجاز: pdf, jpg, jpeg, png, bmp, doc, docx -
                  حداکثر سایز: 500 کیلوبایت
                </p>
                <div className=" border-b-0 border border-[#DDDDDD] my-4 w-[400px] md:w-[915px]"></div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row-reverse gap-2 mt-4 font2">
            <button
              type="submit"
              //   className={`btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0 ${
              //     isFormCompleted ? "bg-green-500" : ""
              //   }`}
            >
              <span className="btn bg-[#49C264] border-none text-[14px] font-normal py-0">
                ذخیره و ادامه{" "}
              </span>
              <img src={vector1} />
            </button>

            <button className="btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0">
              <span className="px-3">بازگشت</span>
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export { Option2 };
