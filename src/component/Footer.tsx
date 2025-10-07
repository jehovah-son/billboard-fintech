import BillBoard from "../../public/Billboard.png";
import TwitterIcon from "../svg/twitter";
import InstagramIcon from "../svg/instagram";
import LinkinIcon from "../svg/linkdin";
import FaceBookIcon from "../svg/facebook";
import AllRightReserved from "./AllRightRESER";

type Link = {
  id: number;
  name: string;
  link: string;
};

type Links = Link[];

const Links: Links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Contact", link: "/#contact" },
  { id: 4, name: "FAQs", link: "/#FAQs" },
];

const Legals: Links = [
  { id: 1, name: "Terms of Use", link: "/#termsOfUse" },
  { id: 2, name: "Help Center", link: "/#helpCenter" },
  { id: 3, name: "Privacy Policy", link: "/#privacyPolicy" },
  { id: 4, name: "Company", link: "/#company" },
];
// container mx-auto w-full
export default function Footer() {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between gap-10 md:gap-20 py-8 px-6">
        {/* Left section */}
        <div className="flex flex-col ">
          <a href="/" className="w-fit">
            <img
              src={BillBoard}
              alt="BillBoard"
              className="w-44 md:w-56"
              width={200}
              height={200}
            />
          </a>
          <p className="pb-10 pt-5 text-lg text-gray-700">
            Smart banking for everyone.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-10">
            <a href="#">
              <FaceBookIcon className="w-6 h-6 hover:text-[#F4450B]" />
            </a>
            <a href="#">
              <InstagramIcon className="w-6 h-6 hover:text-[#F4450B]" />
            </a>
            <a href="#">
              <LinkinIcon className="w-6 h-6 hover:text-[#F4450B]" />
            </a>
            <a href="#">
              <TwitterIcon className="w-6 h-6 hover:text-[#F4450B]" />
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold mb-3">Quick Links</h1>
            {Links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="hover:text-[#F4450B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold mb-3">Legal</h1>
            {Legals.map((legal) => (
              <a
                key={legal.id}
                href={legal.link}
                className="hover:text-[#F4450B] transition-colors"
              >
                {legal.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <AllRightReserved />
    </div>
  );
}
