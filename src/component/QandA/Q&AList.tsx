import FaQItem from "./Q&A";

type FAQList = {
  id: number;
  question: string;
  answer: string;
};

type FAQLists = FAQList[];

const FAQS: FAQLists = [
  {
    id: 1,
    question: "Is it safe to use this app?",
    answer: "Yes. Your data and transactions are fully encrypted and secured.",
  },
  {
    id: 2,
    question: "Can I use it without a bank account?",
    answer: "Absolutely — create a wallet and start sending money instantly. ",
  },
  {
    id: 3,
    question: "Are there hidden charges?",
    answer:
      "No. All fees are shown clearly before you confirm any transaction. ",
  },
  {
    id: 4,
    question: "What can I do on the app?",
    answer: "Send money, pay bills, buy airtime, and save securely.",
  },
];

export default function FAQLists() {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-20">
        {/* Left Section */}
        <div className="flex flex-col max-w-[500px]">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 pb-5">
            Questions and Answers
          </h1>
          <p className="text-gray-600 leading-relaxed text-justify max-w-[300px] pb-5">
            Didn’t find the answers to your questions? Ask us we’ll respond as
            soon as possible.
          </p>
          <button className="bg-[#F4450B]  hover:cursor-pointer transition-colors text-white px-8 py-3 rounded-full flex items-center gap-2 w-fit">
            More Questions?
          </button>
        </div>

        {/* Right Section (FAQs) */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="text-base sm:text-lg ring-1 ring-[#F4450B] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-2 bg-white"
            >
              <FaQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
