import { useState } from "react";
import BillBoard from "../../public/Billboard.png";
import ArrowDown from "../../public/arrow down.png";
import MenuIcon from "../svg/menuIcon";

type Link = {
  id: number;
  name: string;
  link: string;
};

type Links = Link[];

const Links: Links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Feature", link: "/#feature" },
  // { id: 3, name: "About Us", link: "/#about" },
  { id: 4, name: "Support", link: "/#support" },
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="px-6 py-2">
      <div className="container mx-auto w-full flex justify-between items-center  ">
        {/* logo */}
        <a href="/" className="flex justify-center items-center">
          <img
            src={BillBoard}
            alt="BillBoard"
            className="w-36 md:w-44"
            width={200}
            height={200}
          />
        </a>

        {/* menu items */}
        <div className="hidden md:flex justify-center items-center gap-8 font-semibold text-base">
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-[#F4450B]   hover:cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* menu icon */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="block md:hidden cursor-pointer p-0.5 text-primary"
        >
          <MenuIcon className="size-7" />
        </button>

        {/* download button */}
        <button className="bg-primary text-white px-8 py-3 rounded-full items-center gap-2 cursor-pointer  hidden md:flex">
          Download
          <span>
            <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
          </span>
        </button>

        <div
          className={`shadow transition-all duration-300 inset-0 py-6 bg-black/75 backdrop-blur-xs px-2 block fixed z-10 md:hidden ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`shadow rounded-tr-none transition-all duration-300 w-11/12 right-0 rounded-2xl top-0 pb-3 pt-3 bg-white px-2 block absolute md:hidden ${
              isNavOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* menu icon */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="block md:hidden cursor-pointer p-0.5 text-primary mb-5 ml-auto"
            >
              <MenuIcon className="size-7" />
            </button>

            <div className="flex flex-col mb-10 gap-4 px-6">
              {Links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  className="hover:text-[#F4450B] hover:cursor-pointer text-lg font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button className="bg-primary w-full justify-center text-white px-8 py-3 rounded-full items-center gap-4 cursor-pointer flex">
              Download
              <span>
                <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
