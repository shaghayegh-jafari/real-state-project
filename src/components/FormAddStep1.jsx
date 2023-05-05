import { useForm } from "react-hook-form";
import { Selectbox } from "./Selectbox";
import { vector1 } from "../assets";

const FormAddStep1 = (props) => {
  function click() {
    props.handleStep();
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    click();
  };
  console.log(errors);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  عنوان ملک*
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
                  استان*
                </span>
              </label>
              <div className="flex flex-col">
                <Selectbox />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  gap-3 ">
          <div className="relative ">
            <label className="label">
              <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                بخش*
              </span>
            </label>
            <div className="flex justify-center">
              <Selectbox />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative  ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  دهستان | شهر*
                </span>
              </label>

              <div className="flex  justify-center">
                <Selectbox />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-3">
          <div className="relative ">
            <label className="label">
              <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                روستا | شهر*
              </span>
            </label>
            <div className="flex justify-center">
              <Selectbox />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  آدرس ملک *
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="addres"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10"
                  {...register("address", { required: true, maxLength: "10" })}
                />
                {errors.address && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-dashed border-[#DDDDDD] my-6 w-[400px] md:w-[915px]">
          {" "}
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white  px-3 font3 text-[13px]">
                  مساحت زمین(مترمربع)*
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input input-bordered w-[400px] md:w-[450px] p-1  px-10"
                  {...register("area", { required: true, maxLength: 10 })}
                />
                {errors.area && (
                  <span className="text-red-600 text-[12px] font2 mt-1">
                    {" "}
                    پر کردن این فیلد الزامی ست.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative ">
              <label className="label">
                <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                  کد پستی
                </span>
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={"10"}
                  className="input input-bordered w-[400px] md:w-[450px] p-1 px-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-end justify-center md:me-[9px] mt-3">
          <button
            type="submit"
            className="btn bg-[#49C264] border-none text-[14px] font-normal py-0"
          >
            <span className="px-3">ذخیره و ادامه</span>
            <img src={vector1} />
          </button>
        </div>
      </form>
    </div>
  );
};

export { FormAddStep1 };
