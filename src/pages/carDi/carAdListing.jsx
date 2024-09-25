import React, { useEffect } from "react";
import { useGetAdHook } from "../../hooks/useGetAdHook";
import Img6 from "../../assets/Notifications_Outline 1.png";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
const CarAdListing = () => {
  const useGetCarDetails = useGetAdHook();
  const navigate = useNavigate();
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  useEffect(() => {
    useGetCarDetails.getCarAds();
  }, []);

  const handleDetails = (item) => {
    navigate(`/car-di/${item._id}`, { state: item });
  };
  return (
    <div className="flex justify-center h-[80vh] overflow-auto ">
      <div className="container max-w-[1000px] mt-2 md:px-0 px-4   ">
        <div className=" text-start mt-16  mb-3">
          <p className="font-bold text-[38px] text-[#1B8693]">Cars for You</p>
          <p className=" font-semibold text-[28px]">Get Your Dream Car</p>
        </div>
        {useGetCarDetails.loading ? (
         <div className="flex justify-center">
         <BallTriangle
           height={50}
           width={50}
           radius={5}
           color="blue"
           ariaLabel="ball-triangle-loading"
           wrapperStyle={{}}
           wrapperClass=""
           visible={true}
         />
       </div>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-16 pb-8">
            {useGetCarDetails?.carAd?.carAdvertisements.map((item) => (
              <div
                class="max-w-sm mt-4 rounded-xl hover:border cursor-pointer"
                onClick={() => handleDetails(item)}
                style={{ boxShadow: shadow }}
              >
                <div className="">
                  <div className="flex justify-center">
                    <img className="w-full" src={Img6} />
                  </div>
                </div>
                <div class="p-5">
                  <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                    $ {item.price}
                  </h5>
                  <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight uppercase">
                    {item.make} {item.model} {item.year}
                  </h5>
                  <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight uppercase">
                    {item.transmission}
                  </h5>
                  <div class="star-rating flex gap-1 mt-2 items-center">
                    <svg
                      class="star-icon w-5 h-5"
                      fill="#f7c300"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                    </svg>
                    <span class="rating-text text-[12px]">
                      4.5 (415 reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarAdListing;
