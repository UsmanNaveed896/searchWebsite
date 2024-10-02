import React from "react";
import { FaBed, FaCalendarAlt, FaHome } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const FurnitureCard = ({ property }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={property.img}
        alt="Property"
      />

      {/* Content Section */}
      <div className="py-5 px-2">
        {/* Location */}
        <div className="flex items-center  mb-4">
          <p className="font-bold text-sm">{property.title}</p>
        </div>

        {/* Property Info */}
        <div className="flex gap-2 text-gray-600 mb-6">
      {/* Map over the colors array */}
      {property.colors.map((color, index) => (
        <div
          key={index}
          className="mb-4 h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>

        {/* Button and Price */}
        <div className="flex justify-between items-center">
          <button className="bg-[#1f5e7d] text-white text-sm  py-1 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Book now
          </button>
          <p className="text-lg font-semibold">${property.price}</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
