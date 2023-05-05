import { useForm } from "react-hook-form";
import { useState } from "react";
import { eye, vector1 } from "../assets";
const Option1 = (props) => {
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

  // const [name, setName] = useState("");
  // const [text, setText] = useState("");
  // const [number, setNumber] = useState("");
  // const [text2, setText2] = useState("");
  // const [text3, setText3] = useState("");
  // const [file, setFile] = useState("");
  const isFormCompleted = name && text && number && text2 && text3;

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
                  بخش ثبتی*
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
                  مفروز*
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
          <div className="flex flex-col md:flex-row  gap-5">
            <div className="relative ">
              <label htmlFor="number" className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  قطعه*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  id="number"
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10"
                />
              </div>
            </div>
            <div className="relative ">
              <label htmlFor="text2" className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  اصلی*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  id="text2"
                  type="text"
                  onChange={(e) => setText2(e.target.value)}
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10"
                />
              </div>
            </div>
          </div>
          <div className="relative ">
            <label htmlFor="text3" className="label">
              <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                فرعی*
              </span>
            </label>
            <div className="flex flex-col">
              <input
                id="text3"
                type="text"
                onChange={(e) => setText3(e.target.value)}
                className="input input-bordered w-[400px] md:w-[450px] p-1  px-10"
              />
            </div>
          </div>
          <div className=" border-b-2 border-dashed border-[#DDDDDD] my-6 w-[400px] md:w-[915px]"></div>

          <div>
            {showDiv && (
              <div className="flex flex-row justify-between bg-[#F5F6FA] px-5  w-[400px] md:w-[915px] py-1 rounded-md">
                <p className="text-[13px] text-[#1C4B82] font2 ">
                  سند ملکی شش دانگ پیوست شد
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
                  سند ملکی شش دانگ*
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
        </form>
      </div>
    </div>
  );
};

export { Option1 };
