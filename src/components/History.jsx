import Collapse from "./Collapse";
import { eye } from "../assets";
const History = () => {
  return (
    <div>
      <div>
        <div className="w-full mx-auto bg-white rounded-2xl   ">
          <Collapse title=" تاریخچه درخواست‌ها">
            <div className="px-5">
              <div className="flex flex-row gap-5 font2">
                <div className=" basis-2/6  text-[12px] md:text-[14px]">
                  نوع درخواست
                </div>
                <div className=" basis-1/6  text-[12px] md:text-[14px]">
                  تاریخ ثبت
                </div>
                <div className=" basis-1/6  text-[12px] md:text-[14px]">
                  وضعیت
                </div>
                <div className=" basis-1/6  text-[12px] md:text-[14px]">
                  کدرهگیری
                </div>
                <div className=" basis-1/6  text-[12px] md:text-[14px]">
                  عملیات
                </div>
              </div>
              <div className="border border-b-0 my-2"></div>
              <div className="flex flex-row gap-5 font3">
                <div className=" basis-2/6  text-[11px] md:text-[13px]">
                  درخواست تعیین حدود وضعیت
                </div>
                <div className=" basis-1/6  text-[11px] md:text-[13px]">
                  12 آبان 1401
                </div>
                <div className=" basis-1/6  text-[11px] md:text-[13px]">
                  تکمیل
                </div>
                <div className="basis-1/6  text-[11px] md:text-[13px]">
                  2135790264
                </div>
                <div className=" flex flex-row basis-1/6  text-[11px] md:text-[13px] text-[#1C4B82] font2 gap-1">
                  <p>مشاهده</p>
                  <img src={eye} className="w-[12px] h-[10px] mt-1" />
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-2 font3 pb-2">
                <div className=" basis-2/6  text-[11px] md:text-[13px]">
                  درخواست تسهیلات قرض الحسنه
                </div>
                <div className="basis-1/6  text-[11px] md:text-[13px]">
                  12 آبان 1401
                </div>
                <div className=" basis-1/6  text-[11px] md:text-[13px]">
                  نیاز به بازبینی
                </div>
                <div className="basis-1/6  text-[11px] md:text-[13px]">
                  2135790264
                </div>
                <div className="flex flex-row basis-1/6  text-[11px] md:text-[13px] text-[#1C4B82] font2 gap-1">
                  <p className="items-center">مشاهده</p>
                  <img src={eye} className="w-[12px] h-[10px] mt-1" />
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default History;
