import { exclamation } from "../assets";
import { check } from "../assets";
import { xmark } from "../assets";

const Notifications = () => {
  return (
    <div className="px-5  font2">
      <div className="flex flex-row p-1 px-3 bg-[#FFF1E1] text-[#FF8A00] text-[14px] rounded-md my-2 ">
        <img src={exclamation} />
        <p className="ps-2">
          {" "}
          درخواست تسهیلات طرح ویژه بهسازی و مسکن روستایی با کد رهگیری 6531279513
          نیاز به بازبینی و تکمیل مدارک دارد.{" "}
        </p>
      </div>
      <div className="flex flex-row p-1 px-3 bg-[#E9FFEE] text-[#49C264] text-[14px] rounded-md my-2  ">
        <img src={check} />
        <p className="ps-2">
          {" "}
          درخواست خدمات فنی صدور پروانه برای تخریب و نوسازی ملک مورد تائید قرار
          گرفت.
        </p>
      </div>
      <div className="flex flex-row p-1 px-3 bg-[#FFE5E5] text-[#E91919] text-[14px] rounded-md  my-2">
        <img src={xmark} />
        <p className="ps-2">
          {" "}
          مدارک مالکیتی ثبت شده برای ملک با شناسه 5312 مورد تائید واقع نشد و
          نیاز به بررسی دارد.{" "}
        </p>
      </div>
    </div>
  );
};

export default Notifications;
