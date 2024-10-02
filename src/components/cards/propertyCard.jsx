import React from 'react';
import { FaBed, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const PropertyCard = ({property}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={property.imageUrl}
        alt="Property"
      />

      {/* Content Section */}
      <div className="py-5 px-2">
        {/* Location */}
        <div className="flex items-center  mb-4">
          <GoLocation className="text-blue-500 mr-2" />
          <p className="font-bold text-sm">{property.location}</p>
        </div>

        {/* Property Info */}
        <div className="flex justify-between text-gray-600 mb-6">
          <div className="flex items-center text-[14px]">
            <FaBed className="text-blue-500 mr-1" />
            <p>{property.beds} Beds</p>
          </div>
          <div className="flex items-center text-[14px]">
            <FaCalendarAlt className="text-blue-500 mr-1" />
            <p>{property.size}</p>
          </div>
          <div className="flex items-center text-[14px]">
            <FaHome className="text-blue-500 mr-1" />
            <p>{property.rooms} Rooms</p>
          </div>
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

export default PropertyCard;
