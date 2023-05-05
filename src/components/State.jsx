import { badge, exit, headset, inbox, money } from "../assets";
import { setting } from "../assets";
import { sprite1 } from "../assets";
import { search } from "../assets";
import { alarm } from "../assets";
import { grid } from "../assets";
import { housechimneyuser } from "../assets";
import { user } from "../assets";
import { Link } from "react-router-dom";
import { circle } from "../assets";
import { down } from "../assets";
import { exclamation } from "../assets";
import { check } from "../assets";
import { xmark } from "../assets";
import { left } from "../assets";
import { circleplus } from "../assets";

const State = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 justify-center mt-5 sm:w-full font2">
        <div className="basis-1/2 bg-white rounded-lg p-3 ">
          <p className="text-[20px] text-[#000000] grid-text">
            {" "}
            وضعیت حساب کاربری{" "}
          </p>
          <div className="relative">
            <div className="w-full bg-[#1C4B82] h-2 rounded-lg mt-4  "></div>
            <div className="rounded-full w-6 h-6 bg-[#1C4B82] text-white text-center items-center justify-center text-[10px] absolute left-0 -top-2 ">
              100
            </div>
          </div>

          <div className="flex flex-row gap-2 mt-3">
            <img src={check} />
            <p className="text-[14px] view-text">
              {" "}
              اطلاعات حساب کاربری شما تکمیل و تائید شده است{" "}
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-white rounded-lg p-3">
          <p className="text-[20px] text-[#000000] grid-text"> درخواست ها</p>
          <div>
            <ul className="flex flex-row justify-around ">
              <li>
                <div className="flex flex-col justify-center items-center text-center ">
                  <div className="rounded-full bg-[#49C264] w-6 h-6 text-white text-center items-center justify-center text-[13px] mt-3">
                    15
                  </div>
                  <p className="text-[14px] view-text mt-1">تکمیل </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col justify-center items-center text-center ">
                  <div className="rounded-full bg-[#AAB7C6] w-6 h-6 text-white text-center items-center justify-center text-[13px] mt-3">
                    22
                  </div>
                  <p className="text-[14px] view-text mt-1"> در دست بررسی </p>
                </div>
              </li>

              <li>
                <div className="flex flex-col justify-center items-center text-center ">
                  <div className="rounded-full bg-[#FF8A00] w-6 h-6 text-white text-center items-center justify-center text-[13px] mt-3">
                    7
                  </div>
                  <p className="text-[14px] view-text mt-1">
                    {" "}
                    نیاز به بازبینی{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col justify-center items-center text-center ">
                  <div className="rounded-full bg-[#E91919] w-6 h-6 text-white text-center items-center justify-center text-[13px] mt-3">
                    2
                  </div>
                  <p className="text-[14px] view-text mt-1">رد شده </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
