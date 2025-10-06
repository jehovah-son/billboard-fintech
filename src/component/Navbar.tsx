import BillBoard from "../../public/Billboard.png";
import ArrowDown from "../../public/arrow down.png";

type Link = {
  id: number;
  name: string;
  link: string;
};

type Links = Link[];

const Links: Links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Feature", link: "/feature" },
  { id: 3, name: "About Us", link: "/about" },
  { id: 4, name: "Support", link: "/support" },
];

export default function Navbar() {
  return (
    <div className="flex flex-1 justify-between items-center py-3 max-w-[1200px] mx-auto p-[20px]">
      {/* logo */}
      <a href="/" className="flex justify-center items-center">
        <img src={BillBoard} alt="BillBoard" width={200} height={200} />
      </a>
      {/* menu items */}
      <div className="flex justify-center items-center gap-8 font-semibold text-xl ]">
        {Links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="hover:text-[#F4450B] hover:cursor-pointer"
          >
            {link.name}
          </a>
        ))}
      </div>
      {/* download button */}
      <div>
        <button className="bg-[#F4450B] text-white px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer">
          Download
          <span>
            <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
          </span>
        </button>
      </div>
    </div>
  );
}
