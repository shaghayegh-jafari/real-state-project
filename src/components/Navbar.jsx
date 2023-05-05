import { badge } from "../assets";
import { setting } from "../assets";
import { sprite1 } from "../assets";
import { search } from "../assets";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white px-5">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={sprite1} />
            <p className="text-[#1C4B82] font-[900] text-[14px] ps-3 font1">
              بنیاد مسکن انقلاب اسلامی
            </p>
          </a>
        </div>

        <div className="navbar-end gap-5">
          <div className="form-control ">
            <input
              type="text"
              placeholder=" جستجو... "
              className="input-text border lg:flex justify-end hidden sm:flex rounded-3xl p-2 w-72 text-[14px] bg-[#f5f6fa] relative 
              focus:outline-[#e7e8ec] "
            />
            <button>
              <img
                src={search}
                className=" absolute w-[16px] h-[16px] left-28 top-[25px] lg:flex hidden sm:flex  "
              />
            </button>
          </div>
          <div className="indicator">
            <img src={badge} />
            <span className="badge badge-sm indicator-item bg-[#49C264] border-none ">
              8
            </span>
          </div>

          <a>
            <img src={setting} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
