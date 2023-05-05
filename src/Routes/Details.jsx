import { Navbar, Sidebar, History, Requests, Detailtext } from "../components";

import { map } from "../assets";
const Details = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:flex lg:flex-row gap-1 md:flex-col sm:flex-col ">
        <Sidebar />
        <div className="basis-5/6  p-5 bg-color ">
          <div className="flex flex-col md:flex-row gap-5 bg-white rounded-xl p-5 ">
            <div className="basis-3/5 ">
              <Detailtext />
            </div>

            <div className="basis-2/5">
              <img src={map} />
            </div>
          </div>
          <div className="mt-5">
            <History />
          </div>
          <Requests />
        </div>
      </div>
    </div>
  );
};

export default Details;
