import {
  Navbar,
  Sidebar,
  Collapse,
  Notifications,
  State,
  PropertyList,
} from "../components";
import { left } from "../assets";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div className="lg:flex lg:flex-row gap-1 md:flex-col sm:flex-col ">
          <Sidebar />
          <div className="basis-5/6  p-5 bg-color ">
            <div className="w-full mx-auto bg-white rounded-2xl font2">
              <Collapse title="اعلانات">
                <ul>
                  <Notifications />
                </ul>
                <div className="flex flex-row justify-center items-center gap-2 mt-5 pb-5">
                  <p className="text-[#1C4B82] text-[14px] view-text ">
                    مشاهده همه موارد
                  </p>
                  <img src={left} />
                </div>
              </Collapse>
            </div>
            <div>
              {" "}
              <State />
            </div>
            <div className="w-full mx-auto bg-white rounded-2xl font2 mt-5">
              <Collapse title="لیست املاک">
                <ul>
                  <PropertyList />
                </ul>
                <div className="flex flex-row justify-center items-center gap-2 mt-5 pb-5">
                  <p className="text-[#1C4B82] text-[14px] view-text ">
                    مشاهده همه موارد
                  </p>
                  <img src={left} />
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
