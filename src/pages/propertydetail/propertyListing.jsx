import React, { useEffect } from "react";
import { useGetAdHook } from "../../hooks/useGetAdHook";
import Img from "../../assets/Rectangle 10.png";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const PropertyListing = () => {
  const navigate = useNavigate();
  const useGetAdDetails = useGetAdHook();
  useEffect(() => {
    useGetAdDetails.getPropertyAds();
  }, []);
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const handleDetails = (item) => {
    navigate(`/property-details/${item._id}`, { state: item });
  };

  console.log(useGetAdDetails.propertAds, "clg");
  return (
    <div className="flex justify-center   ">
      <div className="container max-w-[1000px] mt-2 md:px-0 px-4   ">
        <div className=" text-start mt-16  mb-3">
          <p className="font-bold text-[38px] text-[#1B8693]">
            Property for You
          </p>
          <p className=" font-semibold text-[28px]">Get Your Dream Property</p>
        </div>
        {useGetAdDetails.loading ? (
          <div className="flex items-center justify-center mt-16">
            <BallTriangle
              height={100}
              width={100}
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
            {useGetAdDetails?.propertAds?.postAdvertisements.map((item) => (
              <div
                class="max-w-sm mt-4 rounded-xl hover:border cursor-pointer"
                onClick={() => handleDetails(item)}
                style={{ boxShadow: shadow }}
              >
                <div className="">
                  <div className="flex justify-center">
                    <img className="w-full" src={Img} />
                  </div>
                </div>
                <div class="p-5">
                  <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                    $ {item.price}
                  </h5>
                  <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight uppercase">
                    {item.title}
                  </h5>
                  <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight uppercase">
                    {item.description}
                  </h5>
                  <div class="star-rating flex gap-1 mt-2 items-center">
                    {item.area} Sqft
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

export default PropertyListing;
