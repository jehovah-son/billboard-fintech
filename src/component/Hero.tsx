import HeaderIMG from "../../public/header.png";
import ArrowDown from "../../public/arrow down.png";
import styles from "../page.module.css";
import ArrowRightUp from "../../public/Arrow right up.png";

export default function Hero() {
  return (
    <div className="flex md:flex-row flex-col items-center md:px-0 px-3 w-full gap-5 md:pt-20 pt-10">
      {/* text */}
      <div className="flex-col flex-1 md:ml-6">
        <h1 className="md:text-6xl text-4xl font-bold mb-6 leading-[1.2]">
          Your Digital Bank for Every Moment.
        </h1>
        <p className=" max-w-[500px] text-justify text-base">
          From your morning coffee to your biggest goals, our app is built to
          move with you. Enjoy instant access to payments, savings, and rewards
          in one smooth experience. We make sure your money works as hard as you
          do — smarter, faster, and always secure.
        </p>
        {/* button */}
        <div className="md:flex-row flex-col flex w-fit  mt-8 gap-5">
          <button className="bg-[#F4450B]  text-white px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer">
            Download
            <span>
              <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
            </span>
          </button>
          <button className=" text-[#F4450B] px-8 py-3 rounded-full flex items-center border-2 gap-2 cursor-pointer">
            Explore More
            <span>
              <img src={ArrowRightUp} alt="Arrow Down" width={14} height={14} />
            </span>
          </button>
        </div>
      </div>
      {/* image */}
      <div className="object-contain mr-5 md:pt-0 pt-7 ">
        <img
          src={HeaderIMG}
          alt="Hero Image"
          width={550}
          height={550}
          className={styles.img}
        />
      </div>
    </div>
  );
}
