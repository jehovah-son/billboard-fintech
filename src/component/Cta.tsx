import CTAIMG from "../../public/billboard half.png";
import ArrowDown from "../../public/arrow down.png";

export default function Cta() {
  return (
    <section className="bg-primary ">
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between gap-10 md:gap-20  px-6">
        {/* text */}
        <div className="flex-1 flex justify-center  flex-col">
          <h1 className="text-white text-6xl font-semibold">
            Ready to experience stress-free banking?
          </h1>
          <p className="text-white text-base  text-justify ">
            Jobhunt. Within just two weeks of applying through the <br />
            platform, got multiple calls and secure a role you enjoy.
          </p>
          <button className="bg-[#F4450B]  text-white px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer">
            Download
            <span>
              <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
            </span>
          </button>
        </div>
        {/* images */}
        <div className="flex-1">
          <img
            src={CTAIMG}
            alt="Arrow Down"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
