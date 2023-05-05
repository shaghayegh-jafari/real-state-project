import { useState } from "react";
import { useForm } from "react-hook-form";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
import {
  useMapEvents,
  Marker,
  Popup,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { vector1 } from "../assets";

const FormAddStep3 = (props) => {
  function click() {
    props.handleStep();
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    click();
    console.log(data);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const position = [51.505, -0.09];

  function LocationMarker({ changeMarker }) {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(event) {
        map.locate();
        setPosition(event.latlng);
        console.log(event.latlng);
        changeMarker(event.latlng);
      },
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  // function handleSubmit(event) {
  //   setLat(parseFloat(event.target.elements.lat.value));
  //   setLng(parseFloat(event.target.elements.lng.value));
  // }

  return (
    <div>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex justify-center">
              <div className="relative ">
                <label className="label">
                  <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                    طول جغرافیایی
                  </span>
                </label>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name="lat"
                    step="0.0001"
                    className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative ">
                <label className="label">
                  <span className=" absolute label-text top-[9px] bg-white px-3 font3 text-[13px]">
                    عرض جغرافیایی
                  </span>
                </label>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name="lng"
                    step="0.0001"
                    className="input input-bordered w-[400px] md:w-[450px] p-1  px-10 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-1 my-4">
            <div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <p className="text-[13px] font3 text-[#1E1E1E]">
              انتخاب مختصات از روی نقشه
            </p>
          </div>
          {isChecked && (
            <div className="map">
              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
              </MapContainer>
            </div>
          )}

          <div className="flex flex-row-reverse gap-2 mt-4 font2">
            <button
              type="submit"
              // className={`btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0 ${
              //   isFormCompleted ? "bg-green-500" : ""
              // }`}
            >
              <span className="btn bg-[#49C264] border-none text-[14px] font-normal py-0">
                ذخیره و ادامه{" "}
              </span>
              <img src={vector1} />
            </button>

            <button className="btn bg-[#AAB7C6] border-none text-[14px] font-normal py-0">
              <span className="px-3">بازگشت</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { FormAddStep3 };
