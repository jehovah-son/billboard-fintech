import AppPreviewImg1 from "../../public/iPhone 16 Pro.png";
import AppPreviewImg2 from "../../public/iPhone 16 Pro-1.png";
import AppPreviewImg3 from "../../public/iPhone 16 Pro-2.png";

export default function AppPreview() {
  return (
    <div className="bg-[#878787] w-screen mt-20 py-5 ">
      {/* Header */}
      <div className="pt-5 pb-10">
        <h1 className="text-center text-white text-5xl font-bold ">
          App Preview
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-10 ">
        {/* first image */}
        <div className="flex flex-col items-center">
          <img
            src={AppPreviewImg1}
            alt="previewImg"
            width={300}
            height={300}
            className="object-contain"
          />
          <div className="md:text-left text-center">
            <h1 className="text-white text-xl font-semibold pb-2 pt-5">
              Send Money Instantly
            </h1>
            <p className="text-white md:text-left ">
              Experience freedom with instant, secure transfers move money to
              anyone, anytime, with total ease.
            </p>
          </div>
        </div>
        {/* second image */}
        <div className="flex md:flex-col flex-col-reverse items-center">
          <div className="text-center">
            <h1 className="text-white text-xl font-semibold md:pt-0 md:pb-0 pb-2 pt-5">
              Track Every Transaction
            </h1>
            <p className=" text-white text-center md:pb-5 md:pt-2">
              Stay in control with clear insights and real-time updates know
              exactly where your money goes, every step of the way.
            </p>
          </div>
          <img
            src={AppPreviewImg2}
            alt="previewImg"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        {/* third image */}
        <div className="flex flex-col items-center ">
          {" "}
          <img
            src={AppPreviewImg3}
            alt="previewImg"
            width={300}
            height={300}
            className="object-contain"
          />
          <div className="md:text-right text-center">
            <h1 className="text-white text-xl font-semibold pb-2 pt-5">
              Secure Your Savings
            </h1>
            <p className="text-white ">
              Save smarter and watch your balance grow your funds stay protected
              while you build towards your goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
