import Collapse from "./Collapse";
import { circleinfo } from "../assets";
import { Link } from "react-router-dom";
import { filecircleplus } from "../assets";
import { filecertificate } from "../assets";
import { houseflag } from "../assets";
import { housebuilding } from "../assets";
import { money2 } from "../assets";
import { roadcircle } from "../assets";
import { housemedical } from "../assets";
import { memocircle } from "../assets";
import { buildingcirclearrow } from "../assets";
import { filesignature } from "../assets";
import { fileexport } from "../assets";
import { housecircle } from "../assets";

const Requests = () => {
  return (
    <div>
      <div>
        <div className="w-full mx-auto bg-white rounded-2xl font2 mt-5 text-center lg:text-right">
          <Collapse title=" ثبت درخواست جدید">
            <div className="flex flex-row gap-2 px-5">
              <img src={circleinfo} />
              <p>
                اگر برای ثبت درخواست جدید اطلاعات کافی ندارید، می‌توانید از
                <Link className="text-[#FF8A00] px-1">
                  راهنمای ثبت درخواست
                </Link>{" "}
                کمک بگیرید.
              </p>
            </div>
            <div className="p-5 text-[16px] flex flex-col text-center lg:text-right ">
              <p>خدمات فنی صدور پروانه ساختمانی</p>
              <div className="flex flex-col lg:flex-row  gap-3 pt-5  items-center text-center">
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center">
                  <img src={filecircleplus} className="w-[45px] h-[45px]" />
                  <p className="text-[14px] font3 mt-1">
                    درخواست خدمات فنی صدور پروانه
                  </p>
                </div>

                <div className="border-2 w-[300px] lg:w-[171px]  rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={houseflag} className="w-[45px] h-[45px]" />
                  <p className="text-[14px] font3 pt-2">تعیین حدود و وضعیت</p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px]  rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={filecertificate} className="w-[45px] h-[45px]" />
                  <p className="text-[14px] font3 pt-2">
                    {" "}
                    درخواست امکان صدور پایانکار/عدم خلافی
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 text-[16px] flex flex-col text-center lg:text-right ">
              <p> تسهیلات</p>
              <div className="flex flex-col lg:flex-row  gap-3 pt-5  items-center text-center ">
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={housebuilding} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-1">
                    تسهیلات طرح ویژه بهسازی و مسکن روستایی
                  </p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={money2} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-1">تسهیلات قرض الحسنه</p>
                </div>
              </div>
            </div>
            <div className="p-5 text-[16px] flex flex-col text-center lg:text-right ">
              <p>فنی و مهندسی</p>
              <div className="flex flex-col lg:flex-row gap-3 pt-5  items-center text-center">
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={roadcircle} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-2">درخواست اصلاح معابر</p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={housemedical} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-2">
                    {" "}
                    درخواست تغییر کاربری{" "}
                  </p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px]  rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={memocircle} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-2">درخواست اصلاح ضوابط</p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img
                    src={buildingcirclearrow}
                    className="w-[45px] h-[45px]"
                  />
                  <p className="text-[13px] font3 pt-2">
                    {" "}
                    درخواست اصلاح محدوده{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 text-[16px] flex flex-col text-center lg:text-right  ">
              <p> خدمات مالکیتی</p>

              <div className="flex flex-col lg:flex-row gap-3 pt-5  items-center text-center">
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={filesignature} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-3">صدور سند</p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={fileexport} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-3">قرارداد واگذاری </p>
                </div>
                <div className="border-2 w-[300px] lg:w-[171px] rounded-xl p-5 flex flex-col items-center text-center lg:h-[135px]">
                  <img src={housecircle} className="w-[45px] h-[45px]" />
                  <p className="text-[13px] font3 pt-3">قرارداد اجاره </p>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Requests;
