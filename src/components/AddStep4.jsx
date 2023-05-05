import { FormAddStep4, Navbar, Sidebar, Steps } from "../components";
const AddStep4 = (props) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:flex lg:flex-row gap-1 md:flex-col sm:flex-col ">
        <Sidebar />
        <div className="basis-5/6  p-5 bg-color ">
          <div className="w-full mx-auto bg-white rounded-2xl font2 p-5 ">
            <p className="text-[20px]">افزودن ملک جدید</p>
            <Steps step={props.step} />
            <FormAddStep4 handleStep={props.handleStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddStep4 };
