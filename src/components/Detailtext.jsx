const Detailtext = () => {
  return (
    <div>
      <div>
        {" "}
        <p className=" text-[20px] text-[#1C4B82] font2">ساختمان تجاری بهار</p>
        <div className="flex flex-row gap-28 md:gap-36">
          <div className="flex flex-col mt-5">
            <div className="flex flex-row gap-16 md:gap-x-20  ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2">
                استان
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3">
                تهران
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <div className="flex gap-16 md:gap-x-20  ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2">
                شهرستان
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3">
                تهران
              </div>
            </div>
          </div>
        </div>
        <div className="border border-b-0 my-2"></div>
        <div className="flex flex-row gap-28 md:gap-36">
          <div className="flex flex-col ">
            <div className="flex flex-row  gap-16 md:gap-x-20   ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2">
                بخش
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3">
                مرکزی
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-9 md:gap-x-14  ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2 w-[120px]">
                دهستان | شهر
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3">
                تهران
              </div>
            </div>
          </div>
        </div>
        <div className="border border-b-0 my-2"></div>
        <div className="flex flex-row gap-20 md:gap-28">
          <div className="flex flex-col ">
            <div className="flex flex-row gap-8 md:gap-x-12  ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2 w-[100px]">
                روستا | شهر
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3">
                تهران
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row  gap-8 md:gap-x-12  ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2 w-[100px]">
                مساحت زمین
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3">
                250 مترمربع
              </div>
            </div>
          </div>
        </div>
        <div className="border border-b-0 my-2"></div>
        <div className="flex flex-row   gap-12 md:gap-20">
          <div className="flex flex-col ">
            <div className="flex flex-row  md:gap-x-2 ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2 w-[100px] ">
                نوع مالکیت
              </div>
              <div className="basis-1/2 text-[12px] md:text-[14px] font3 w-[100px] ">
                سند شش دانگ
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row gap- md:gap-x-3 ">
              <div className="basis-1/2 text-[12px] md:text-[14px] font2 ">
                {" "}
                آدرس
              </div>
              <div className="basis-1/2 text-[10px] md:text-[13px] font3 md:w-[200px]">
                میدان ولیعصر، بلوار کشاورز، خیابان فلسطین شمالی، خیابان غفاری
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Detailtext };
