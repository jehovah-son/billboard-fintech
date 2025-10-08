import CTAIMG from "../../public/billboard half.png";
import ArrowDown from "../../public/arrow down orange.png";

export default function Cta() {
  return (
    // <section className="bg-primary relative overflow-visible">
    //   <div className="container mx-auto w-full flex flex-col md:flex-row justify-between gap-10 md:gap-20  px-6">
    //     {/* text */}
    //     <div className="flex-1 flex justify-center gap-8 flex-col">
    //       <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
    //         Ready to experience stress-free banking?
    //       </h1>
    //       <p className="text-white text-base text-justify ">
    //         Jobhunt. Within just two weeks of applying through the <br />
    //         platform, got multiple calls and secure a role you enjoy.
    //       </p>
    //       <button className="text-[#F4450B] w-fit bg-white px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer">
    //         Download
    //         <span>
    //           <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
    //         </span>
    //       </button>
    //     </div>
    //     {/* images */}
    //     <div className="flex-1 flex justify-center md:justify-end">
    //       <img
    //         src={CTAIMG}
    //         alt="ctaimg"
    //         width={550}
    //         height={550}
    //         className="object-contain"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="bg-primary relative overflow-visible md:mt-40 mt-20 ">
      <div className=" w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 px-6 pt-15 relative">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center gap-5">
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-[1.1]">
            Ready to experience stress-free banking?
          </h1>
          <p className="text-white text-base md:text-lg text-justify">
            Jobhunt. Within just two weeks of applying through the platform, got
            multiple calls and secured a role you enjoy.
          </p>
          <button className="text-[#F4450B] w-fit bg-white px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer transition-all mb-5">
            Download
            <span>
              <img src={ArrowDown} alt="Arrow Down" width={15} height={15} />
            </span>
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <img
            src={CTAIMG}
            alt="ctaimg"
            width={550}
            height={550}
            className="object-contain md:-mt-25 "
          />
        </div>
      </div>
    </section>
  );
}
