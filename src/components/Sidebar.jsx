import { useState } from "react";

import { exit, grid2, headset, inbox, money } from "../assets";

import { alarm } from "../assets";
import { grid } from "../assets";
import { housechimneyuser } from "../assets";
import { housechimneyuser2 } from "../assets";
import { user } from "../assets";
import { Link } from "react-router-dom";
import { circle } from "../assets";
import { down } from "../assets";

const Sidebar = () => {
  const [divButton, setDivButton] = useState();

  return (
    <div>
      <div className="basis-1/6 bg-white border-none  lg:flex-col gap-1 md:flex-col sm:flex-row px-5 font2 ">
        <div className=" lg:flex lg:flex-col md:flex-row sm:flex-row p-5 ">
          <div className="border rounded-lg border-[#F5F6FA] p-4  flex flex-col">
            <p className="text-type text-center text-[14px] font-[700]">
              {" "}
              محمدرضا فراهانی اصل{" "}
            </p>

            <span className="text-[13px] text-[#A4A4A4] text-center text-type">
              09015678135
            </span>
            <div className="flex flex-row gap-2 bg-[#D4FFDE] p-2 justify-center  items-center mx-auto rounded-md w-48 mt-2">
              <img src={alarm} />
              <p className="text-[#49C264] text-[12px] text-center text-type font-[700] ">
                شما 8 اعلان جدید دارید
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center  ">
            <ul className="ul-font text-[16px] cursor-pointer">
              <Link to={"/Dashboard"}>
                {/* <li className="flex flex-row  bg-[#1C4B82] hover:bg-[#F5F6FA]    text-white "> */}
                <li
                  className={`flex flex-row font-light justify-start border-0 mt-5 rounded-md px-2  py-4  ${
                    divButton === "1"
                      ? "bg-[#1C4B82] text-white"
                      : "bg-white text-[#1C4B82]"
                  } hover:text-[white]`}
                  value={1}
                  onClick={() => setDivButton("1")}
                >
                  <img
                    src={divButton === "1" ? grid : grid}
                    className="flex flex-row"
                  />{" "}
                  <img src={grid2} className="pe-3" />
                  <a href="#">داشبورد</a>
                </li>
              </Link>
              <Link to={"/Managment"}>
                {" "}
                <li
                  // className="flex flex-row"
                  className={`flex flex-row font-light justify-start border-0 mt-5 rounded-md px-2  py-4  ${
                    divButton === "2"
                      ? "bg-[#1C4B82] text-white"
                      : "bg-white text-[#1C4B82]"
                  } hover:text-[white]`}
                  value={2}
                  onClick={() => setDivButton("2")}
                  // onClick={changeLiColor}
                  // className={`${liColor} ${textColor} flex flex-row  py-4 hover:bg-[#F5F6FA] rounded-md hover:text-black mt-5 px-2 `}
                >
                  <img
                    src={
                      divButton === "2" ? housechimneyuser2 : housechimneyuser2
                    }
                  />{" "}
                  <img src={housechimneyuser} className="pe-2 " />
                  مدیریت املاک
                </li>
              </Link>

              <li className="flex flex-row  py-4 mx-3">
                <img src={money} className="pe-2" />
                امور مالی
              </li>

              <div
                tabIndex={0}
                className="collapse rounded-box  focus:bg-[#F5F6FA] p-0 m-0"
              >
                <div className="collapse-title flex flex-row justify-between ps-0  py-0">
                  <li className="flex flex-row mx-3 ">
                    <img src={inbox} className="pe-2  " />
                    <p className="py-5">کارتابل</p>
                  </li>
                  <label className="swap swap-rotate">
                    <input type="checkbox" checked />
                    <img src={circle} className="swap-off fill-current" />
                    <img src={down} className="swap-on fill-current" />
                  </label>
                </div>

                <div className="collapse-content collaps-text ">
                  <ul className="list-item list-disc mt-0 mx-3">
                    <li className="flex flex-row ">
                      {" "}
                      <Link className="pe-4 ">خدمات فنی</Link>
                      <span className="rounded-full bg-[#FF8A00] text-white w-[20px] h-[20px] text-center">
                        5
                      </span>
                    </li>
                    <li className="my-2">
                      {" "}
                      <Link>تسهیلات</Link>{" "}
                    </li>
                    <li className="my-2">
                      {" "}
                      <Link>فنی و مهندسی </Link>{" "}
                    </li>
                    <li className="my-2">
                      {" "}
                      <Link>خدمات مالکیتی</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <li className="flex flex-row  py-4 mx-3">
                <img src={user} className="pe-2" />
                اطلاعات هویتی
              </li>

              <li className="flex flex-row  py-4 mx-3">
                <img src={headset} className="pe-2" />
                پشتیبانی
              </li>
              <Link to={"/Login"}>
                <li className="flex flex-row  py-4 text-[#E91919] mx-3">
                  <img src={exit} className="pe-2" />
                  خروج
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
