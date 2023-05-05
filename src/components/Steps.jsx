import { Line1 } from "../assets";
import { Tik } from "../assets";

const Steps = ({ step }) => {
  return (
    <div className="px-5">
      <div className="flex flex-row justify-center py-2">
        <div className="flex flex-col">
          <div
            className={`w-[40px] rounded-full py-2 ${
              step > 1
                ? "bg-green-400"
                : step === 1
                ? "bg-[#1C4B82] text-white"
                : "bg-[#F5F6FA]"
            }  items-center text-center`}
          >
            {step > 1 ? (
              <img src={Tik} className="mx-auto py-1" />
            ) : step === 1 ? (
              "1"
            ) : (
              "1"
            )}
          </div>
          <div className="text-[12px] text-center md:text-[16px] collaps-text mt-2 flex flex-row">
            <p>مشخصات ملک</p>
            <img src={Line1} className="ms-3 me-3" />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`w-[40px] rounded-full py-2 ${
              step > 2
                ? "bg-green-400"
                : step === 2
                ? "bg-[#1C4B82] text-white"
                : "bg-[#F5F6FA]"
            }  items-center text-center`}
          >
            {step > 2 ? (
              <img src={Tik} className="mx-auto  py-1" />
            ) : step === 2 ? (
              "2"
            ) : (
              "2"
            )}
          </div>
          <div className="text-[12px] text-center md:text-[16px]  collaps-text mt-2 flex flex-row">
            <p>اطلاعات مالکیتی </p>
            <img src={Line1} className="ms-3 me-3" />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`w-[40px] rounded-full py-2 ${
              step > 3
                ? "bg-green-400"
                : step === 3
                ? "bg-[#1C4B82] text-white"
                : "bg-[#F5F6FA]"
            }  items-center text-center`}
          >
            {step > 3 ? (
              <img src={Tik} className="mx-auto  py-1" />
            ) : step === 3 ? (
              "3"
            ) : (
              "3"
            )}
          </div>
          <div className="text-[12px] text-center md:text-[16px]  collaps-text mt-2 flex flex-row">
            <p> موقعیت مکانی</p>
            <img src={Line1} className="ms-3 me-3" />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`w-[40px] rounded-full py-2 ${
              step > 4
                ? "bg-green-400"
                : step === 4
                ? "bg-[#1C4B82] text-white"
                : "bg-[#F5F6FA]"
            }  items-center text-center`}
          >
            {step > 4 ? (
              <img src={Tik} className="mx-auto  py-1" />
            ) : step === 4 ? (
              "4"
            ) : (
              "4"
            )}
          </div>
          <div className="text-[12px] text-center md:text-[16px]  collaps-text mt-2 flex flex-row">
            <p> شرکا و وکلا</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Steps };
