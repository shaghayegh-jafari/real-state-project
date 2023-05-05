import { Navbar, Sidebar, Collapse, PropertyList2 } from "../components";

const Managment = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex lg:flex-row gap-1 md:flex-col sm:flex-col ">
        <Sidebar />

        <div className="basis-5/6  p-5 bg-color ">
          <div className="w-full mx-auto bg-white rounded-2xl font2 ">
            <Collapse title="لیست املاک">
              <ul className="pb-5">
                <PropertyList2 />
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managment;
