import React from "react";
import Img from "../../assets/Rectangle 27.png";
import Img1 from "../../assets/Rectangle 28.png";
import Img2 from "../../assets/Rectangle 29.png";
import Img3 from "../../assets/Rectangle 30.png";

const BlogSection = () => {
  // Image URLs (You can replace these with your actual image sources)
  const blogImages = [Img, Img1, Img2, Img3];

  return (
    <section className="bg-gray-100 py-12 px-6">
      {/* Section Title and Link */}

      <div className="flex justify-between items-center mb-6 mt-[4rem]">
        <h2 className="text-4xl font-bold">See our latest news & read blog</h2>
        <a href="#" className="text-blue-600 flex items-center">
          Explore All →
        </a>
      </div>
      {/* Blog Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
        <div className="">
          <img
            src={Img}
            alt={`Blog post`}
            className=" object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="">
          <img
            src={Img1}
            alt={`Blog post`}
            className=" object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src={Img3}
            alt={`Blog post`}
            className=" object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="">
          <img
            src={Img2}
            alt={`Blog post`}
            className=" object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
