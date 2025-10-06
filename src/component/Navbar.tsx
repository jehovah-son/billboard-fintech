import BillBoard from "../../public/Billboard.png";

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
    <div className="flex justify-between items-center p-4">
      {/* logo */}
      <div>
        <img src={BillBoard} alt="BillBoard" width={200} height={200} />
      </div>
      {/* menu items */}
      <div className="flex gap-8">
        {Links.map((link) => (
          <a key={link.id} href={link.link}>
            {link.name}
          </a>
        ))}
      </div>
      {/* download button */}
      <div>
        <button>Download</button>
      </div>
    </div>
  );
}
