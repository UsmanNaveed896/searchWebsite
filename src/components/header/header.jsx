import React, { useEffect, useRef, useState } from "react";
import Img from "../../assets/Group 143.png";
import Img1 from "../../assets/bot.png";
import { useNavigate } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
const Header = ({ setLocale, locale,setShowPopup }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IntlProvider
        locale={locale}
        messages={
          locale === "en"
            ? messagesEn
            : locale === "fr"
            ? messagesFr
            : messagesAr
        }
      >
        <div className="md:block hidden">
          <div className="fixed bottom-0 right-0  z-[999] cursor-pointer" onClick={()=>setShowPopup(true)}>
          <img className="h-[90px] " src={Img1} alt="bot" />
          </div>
          <div className="px-8 py-4">
            <div className="list flex  items-center justify-between font-semibold text-[#1E1E1E]">
              <div>
                <img
                  className="cursor-pointer"
                  onClick={() => navigate("/")}
                  src={Img}
                  alt="logo"
                />
              </div>
              <ul
                className="flex items-center"
                style={{
                  justifyContent: locale === "fr" ? "space-around" : "",
                  gap: "4rem" ,
                }}
              >
                <li className="cursor-pointer hover:font-bold">
                  <div className="hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-hover-event"
                      type="button"
                      className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm   hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  text-black dark:border-gray-700  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                    >
                      <FormattedMessage id="Real-Estate" />
                      <svg
                        className={`size-4 ${isOpen ? "rotate-180" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      className={`hs-dropdown-menu absolute top-[33px] z-[44] transition-[opacity,margin] duration ${
                        isOpen ? "opacity-100" : "opacity-0 hidden"
                      } min-w-40  shadow-md rounded-lg p-2 mt-2 bg-white dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
                      aria-labelledby="hs-dropdown-hover-event"
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      {/* Your dropdown content here */}
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                        onClick={() => navigate("/buyhome")}
                      >
                        <FormattedMessage id="Buy" />
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                        href="https://search-app-blond.vercel.app/"
                      >
                        <FormattedMessage id="Sell" />
                      </a>
                      {/* Add other dropdown items as needed */}
                    </div>
                  </div>
                </li>

                <li
                  className="cursor-pointer hover:font-bold"
                  onClick={() => navigate("/car-listing")}
                >
                  <FormattedMessage id="Automobile" />
                </li>
                <li
                  className="cursor-pointer hover:font-bold"
                  onClick={() => navigate("/virtualoffice")}
                >
                  {" "}
                  <FormattedMessage id="Virtual-Office" />
                </li>
                <li className="cursor-pointer hover:font-bold"
                onClick={() => navigate("/furniture")}
                >
                  {" "}
                  <FormattedMessage id="Furniture Exhibition" />
                </li>
                <li className="cursor-pointer hover:font-bold">
                  {" "}
                  <FormattedMessage id="Advertise" />{" "}
                </li>
                <li className="cursor-pointer hover:font-bold">
                  {" "}
                  <FormattedMessage id="Help" />{" "}
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <select
                    value={locale}
                    onChange={(e) => setLocale(e.target.value)}
                    className="block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="ar">Arabic</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="overflow-x-hidden block md:hidden w-full ">
          <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
              <div>
                <img className="" src={Img} alt="logo" />
              </div>
              <div>
                <div className="flex items-center justify-between  md:hidden border-gray-400 py-8 ">
                  <section className="MOBILE-MENU flex lg:hidden ">
                    <div
                      className="HAMBURGER-ICON space-y-2 cursor-pointer "
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <span className="block h-0.5 w-8 animate-pulse  bg-[black]"></span>
                      <span className="block h-0.5 w-8 animate-pulse  bg-[black]"></span>
                      <span className="block h-0.5 w-8 animate-pulse  bg-[black]"></span>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                      <div
                        className="absolute top-0 right-0 px-8 py-8 z-[999]"
                        onClick={() => setIsNavOpen(false)}
                      >
                        <svg
                          className="h-8 w-8 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                      <ul className="flex flex-col items-center justify-between min-h-[250px] w-full bg-[#2353a6] z-[99]">
                        <li className=" my-8 uppercase ">
                          <div className="hs-dropdown relative inline-flex">
                            <button
                              id="hs-dropdown-hover-event"
                              type="button"
                              className="hs-dropdown-toggle py-3 px-4 inline-flex text-white items-center gap-x-2 text-sm  disabled:opacity-50 disabled:pointer-events-none  text-black dark:border-gray-700  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              onMouseEnter={toggleDropdown}
                              onMouseLeave={toggleDropdown}
                            >
                              <FormattedMessage id="Real-Estate" />
                              <svg
                                className={`size-4 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>

                            <div
                              className={`hs-dropdown-menu absolute top-[33px] z-[44] transition-[opacity,margin] duration ${
                                isOpen ? "opacity-100" : "opacity-0 hidden"
                              } min-w-40  shadow-md rounded-lg p-2 mt-2 bg-white dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
                              aria-labelledby="hs-dropdown-hover-event"
                              onMouseEnter={() => setIsOpen(true)}
                              onMouseLeave={() => setIsOpen(false)}
                            >
                              {/* Your dropdown content here */}
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                                onClick={() => navigate("/buyhome")}
                              >
                                <FormattedMessage id="Buy" />
                              </a>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                                href="https://search-app-blond.vercel.app/"
                              >
                                <FormattedMessage id="Sell" />
                              </a>
                              {/* Add other dropdown items as needed */}
                            </div>
                          </div>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase text-white">
                          <li
                            className="cursor-pointer hover:font-bold"
                            onClick={() => navigate("/car-di")}
                          >
                            <FormattedMessage id="Automobile" />
                          </li>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                            <FormattedMessage id="Virtual-Office" />
                          </a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                            <FormattedMessage id="Furniture Exhibition" />
                          </a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                            <FormattedMessage id="Advertise" />{" "}
                          </a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                            <FormattedMessage id="Help" />{" "}
                          </a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                            <select
                              value={locale}
                              onChange={(e) => setLocale(e.target.value)}
                              className="block  px-4 py-2 text-black border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="ar">Arabic</option>
                            </select>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </section>

                  <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background:#2353a6;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </IntlProvider>
    </>
  );
};

export default Header;
