import React from "react";
import Img from "../../assets/11.png";
import Img1 from "../../assets/11.png";
import Img2 from "../../assets/11.png";
import { useLocation } from "react-router-dom";
const PropertyDetails = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div className="flex justify-center">
        <div className="container max-w-[1100px]">
          <div className="grid grid-cols-3 gap-2">
            <div className="column1 col-span-2">
              <img src={Img} alt="home" />
            </div>
            <div className="column2">
              <img src={Img1} alt="detail" />
              <img src={Img2} alt="detail" />
            </div>
          </div>
          <div className="btn flex justify-center">
            <button className="rounded-full px-8 py-1 border mt-5 font-bold  text-[#1F5E7C] border-[#1F5E7C]">
              {" "}
              <i class="fa fa-camera mr-1" aria-hidden="true"></i> Watch 360
            </button>
          </div>
          <div className="grid grid-cols-3">
            <div className="column1 col-span-2">
              <h1 className="font-bold text-[19px]">{data.title}</h1>
              <div className="flex gap-12 mt-6 items-center">
                <p className="text-[20px] text-[#1F5E7C]">$ {data.price}</p>
                <div className="flex gap-4">
                  <p>
                    <i class="fa fa-bed mr-2" aria-hidden="true"></i>
                    {data.bedrooms} Room
                  </p>
                  <p>
                    <i class="fa fa-bath mr-2" aria-hidden="true"></i>
                    {data.bathrooms} bath
                  </p>
                  <p>
                    <i class="fa fa-area-chart mr-2" aria-hidden="true"></i>
                    {data.area} msquare{" "}
                  </p>
                </div>
              </div>
              <h1 className="my-3 font-bold text-[18px]">Description</h1>
              <p>
                <i class="fa fa-area-chart mr-2" aria-hidden="true"></i>
                {data.description}{" "}
              </p>
              <div className="flex gap-12 mt-6 items-center">
                <button className="border w-[180px] py-2 text-[14px] border-[#7D7F88] text-[#7D7F88]">
                  {" "}
                  <i class="fa fa-building mr-2" aria-hidden="true"></i>
                  {data.propertyType}
                </button>
                {data.tags.map((item) => (
                  <button className="border w-[180px] py-2 text-[14px] border-[#7D7F88] text-[#7D7F88]">
                    {" "}
                    <i class="fa fa-ravelry mr-2" aria-hidden="true"></i>
                    {item}
                  </button>
                ))}
              </div>
              {/* <div className="flex gap-12 mt-3 items-center">
                <button className="border w-[180px] py-2 text-[14px] border-[#7D7F88] text-[#7D7F88]">
                  {" "}
                  <i class="fa fa-search mr-2" aria-hidden="true"></i>
                  $215,200 Sreach®
                </button>
                <button className="border w-[180px] py-2 text-[14px] border-[#7D7F88] text-[#7D7F88]">
                  {" "}
                  <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                  $88/sqft
                </button>
                <button className="border w-[180px] py-2 text-[14px] border-[#7D7F88] text-[#7D7F88]">
                  {" "}
                  <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                  Sqft Iot
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
