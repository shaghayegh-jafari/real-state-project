import { circleplus } from "../assets";

const PropertyList = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-3">
        <div className="basis-1/3 border-dashed border-[#1C4B82] border-[2px] rounded-lg p-5 cursor-pointer">
          <div className="flex flex-row gap-2 justify-center items-center text-center align-middle">
            {" "}
            <p className="text-[16px] text-[#1C4B82] ">افزودن ملک جدید</p>
            <img src={circleplus} />
          </div>
        </div>
        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className="font2"> موقعیت </p>
            <span className="font3">
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" font2">مالکیت </p>
            <span className="font3">قولنامه</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className="font2"> متراژ </p>
            <span className="font3"> 249 متر مربع</span>
          </div>
        </div>

        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            ساختمان تجاری بهار
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" font2"> موقعیت </p>
            <span className="font3">
              البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" font2">مالکیت </p>
            <span className="font3">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" font2">متراژ</p>
            <span className="font3"> 675 متر مربع</span>
          </div>
        </div>

        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" font2">موقعیت</p>
            <span className="font3">
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className="font3">مالکیت</p>
            <span className="font3">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className="font2">متراژ</p>
            <span className="font3">675 متر مربع</span>
          </div>
        </div>
        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            ساختمان تجاری بهار
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" font2">موقعیت</p>
            <span className="font3">
              البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" font2">مالکیت</p>
            <span className="font3">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className="font2">متراژ</p>
            <span className="font3">675 متر مربع</span>
          </div>
        </div>

        <div className="basis-1/3 p-5 bg-[#F5F6FA] rounded-lg">
          <h4 className="text-[16px] text-[#1C4B82] collaps-text">
            زمین مسکونی روستایی{" "}
          </h4>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] mt-3">
            <p className=" font2">موقعیت</p>
            <span className="ul-font">
              {" "}
              تهران، پردیس، بومهن، گلخندان، طاهرآباد
            </span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className=" font2">مالکیت</p>
            <span className="ul-font">سند شش دانگ</span>
          </div>
          <div className="flex flex-row gap-5 text-[13px] text-[#000000] ">
            <p className="font2">متراژ</p>
            <span className="ul-font">675 متر مربع</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
