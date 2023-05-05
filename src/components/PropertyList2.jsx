import { circleplus } from "../assets";
import { Link } from "react-router-dom";

const PropertyList2 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-3">
        <div className="basis-1/3 border-dashed border-[#1C4B82] border-[2px] rounded-lg p-5 cursor-pointer">
          <Link to={"/Addproperty"}>
            {" "}
            <div className="flex flex-row gap-2 justify-center items-center text-center collaps-text align-middle">
              <p className="text-[16px] text-[#1C4B82] ">افزودن ملک جدید</p>

              <img src={circleplus} />
            </div>
          </Link>
        </div>

        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text"> موقعیت </p>
            <span className="ul-font">
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت </p>
            <span className="ul-font">قولنامه</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text"> متراژ </p>
            <span className="ul-font"> 249 متر مربع</span>
          </div>
        </div>

        <Link to={"/Details"}>
          <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
            <h4 className="text-[16px] text-[#1C4B82] collaps-text">
              ساختمان تجاری بهار
            </h4>
            <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
              <p className=" collaps-text"> موقعیت </p>
              <span className="ul-font">
                البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه
              </span>
            </div>
            <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
              <p className=" collaps-text">مالکیت </p>
              <span className="ul-font">سند شش دانگ</span>
            </div>
            <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
              <p className=" collaps-text">متراژ</p>
              <span className="ul-font"> 675 متر مربع</span>
            </div>
          </div>
        </Link>

        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text">موقعیت</p>
            <span className="ul-font">
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>
        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            ساختمان تجاری بهار
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text">موقعیت</p>
            <span className="ul-font">
              البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>

        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text">موقعیت</p>
            <span className="ul-font">
              {" "}
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>
        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            ساختمان تجاری بهار
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text">موقعیت</p>
            <span className="ul-font">
              البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>
        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text">موقعیت</p>
            <span className="ul-font">
              {" "}
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>
        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg cursor-pointer">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            ساختمان تجاری بهار
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" collaps-text">موقعیت</p>
            <span className="ul-font">
              البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" collaps-text">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList2;
