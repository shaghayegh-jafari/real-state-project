import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { image } from "../assets";
import { eye } from "../assets";
import { vector1 } from "../assets";
import { back } from "../assets";

const FormAddStep4 = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    click();
    console.log(data);
  };
  // const handleClick = () => {
  //   alert("button clicked!");
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  نام*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  نام خانوادگی*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  نام پدر*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  صادره*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  شماره شناسنامه*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  کد ملی*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  شماره همراه
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  کد ملی مدیرعامل
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  نوع*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  مدارک
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="برای انتخاب فایل روی این بخش کلیک کنید یا فایل خود را اینجا رها نمائید"
                  className=" input border-2 border-[#000000] border-dashed w-[400px] md:w-[450px] p-1  px-5 rounded-md file "
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center md:justify-start mt-5 ml-7">
          <button className="border border-[#1C4B82] rounded-md px-5 py-3 text-[#1C4B82] text-[14px] flex flex-row gap-2">
            {" "}
            <span>افزودن</span>
            <img src={image} className="w-[13px] h-[13px] mt-1" />
          </button>
        </div>
      </form>
      <div className="w-full mx-auto bg-white rounded-2xl mt-5  ">
        <div className="px-5">
          <div className="flex flex-row gap-5 font2">
            <div className=" basis-3/6  text-[12px] md:text-[14px]">
              لیست شرکا و وکلای ملک
            </div>

            <div className=" basis-1/6  text-[12px] md:text-[14px]">کد ملی</div>
            <div className=" basis-1/6  text-[12px] md:text-[14px]">نوع</div>
            <div className=" basis-1/6  text-[12px] md:text-[14px]">عملیات</div>
          </div>
          <div className="border border-b-0 my-2"></div>
          <div className="flex flex-row gap-5 font3">
            <div className=" basis-3/6  text-[11px] md:text-[13px]">
              محمدحسین رضاپور
            </div>

            <div className=" basis-1/6  text-[11px] md:text-[13px]">
              2090641234
            </div>
            <div className="basis-1/6  text-[11px] md:text-[13px]">وکیل</div>
            <div className=" flex flex-row basis-1/6  text-[11px] md:text-[13px] text-[#1C4B82] font2 gap-1">
              <p className="cursor-pointer">ویرایش</p>
              <p className="text-[#E91919] cursor-pointer">حذف</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-2 font3 pb-2">
            <div className=" basis-3/6  text-[11px] md:text-[13px]">
              علیرضا محمدی
            </div>

            <div className=" basis-1/6  text-[11px] md:text-[13px]">
              2085438109
            </div>
            <div className="basis-1/6  text-[11px] md:text-[13px]">شریک</div>
            <div className="flex flex-row basis-1/6  text-[11px] md:text-[13px] text-[#1C4B82] font2 gap-1">
              <Link>
                <p className="cursor-pointer">ویرایش</p>
              </Link>
              <Link>
                <p className="text-[#E91919] cursor-pointer">حذف</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end justify-center md:me-[9px] mt-4 gap-2">
          <button className="btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0">
            <img src={back} />
            <span className="px-3">بازگشت</span>
          </button>
          <button
            type="submit"
            // onClick={handleClick}
            className="btn bg-[#49C264] border-none text-[14px] font-normal py-0"
          >
            <span className="px-3">ثبت ملک </span>
            <img src={vector1} />
          </button>
        </div>
      </div>
    </div>
  );
};

export { FormAddStep4 };
