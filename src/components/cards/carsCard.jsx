import React from "react";
import {
  FaBed,
  FaCalendarAlt,
  FaCogs,
  FaGasPump,
  FaHome,
  FaTachometerAlt,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const CarsCard = ({ property }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={property.img}
        alt="Property"
      />
      {/* Car Title and Subtitle */}
      <div className="py-5 px-2">
        <div className="mb-4 ">
          <h2 className="font-bold text-sm">{property.title}</h2>
          <p className="text-gray-600 text-[14px]">{property.subtitle}</p>
        </div>

        {/* Car Specifications */}
        <div className="flex justify-between text-gray-600 text-sm">
          {/* Mileage */}
          <div className="flex items-center">
            <FaTachometerAlt className="text-blue-500 mr-2" />
            <p>{property.mileage}</p>
          </div>

          {/* Fuel Type */}
          <div className="flex items-center">
            <FaGasPump className="text-blue-500 mr-2" />
            <p>{property.fuelType}</p>
          </div>

          {/* Transmission */}
          <div className="flex items-center">
            <FaCogs className="text-blue-500 mr-2" />
            <p>{property.transmission}</p>
          </div>
        </div>
        {/* Button and Price */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-[#1f5e7d] text-white text-sm  py-1 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Book now
          </button>
          <p className="text-lg font-semibold">${property.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
