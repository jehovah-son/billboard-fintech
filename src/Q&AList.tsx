import FaQItem from "./component/Q&A";

type FAQList = {
  id: number;
  question: string;
  answer: string;
};

type FAQLists = FAQList[];

const FAQS: FAQLists = [
  {
    id: 1,
    question: "What is Sancus?",
    answer:
      "Sancus is a zero-hold, instant cryptocurrency exchange platform offering additional " +
      "services such as purchase & sales of gift cards, bill payments, airtime to cash, utility ",
  },
  {
    id: 2,
    question: "What services does Sancus provide?",
    answer:
      "Sancus offers a range of services including cryptocurrency exchange, the purchase and " +
      "sale of various gift cards, bill payments, airtime to cash conversion, and utility payments.",
  },
  {
    id: 3,
    question: "Is Sancus a registered company?",
    answer:
      "Sancus Africa, a product of Sancus Digital Limited (Registration Number: RC8103392), " +
      "partners with licensed banks that hold valid banking licenses to manage and store fiat " +
      "currencies, as well as provide payment services. We offer financial infrastructure and " +
      "technology through service agreements with licensed financial institutions and banking partners.",
  },
  {
    id: 4,
    question: "How can I get started with Sancus?",
    answer:
      "Simply download the Sancus mobile app, sign up in a few easy steps, and start trading.!",
  },
];

export default function FAQLists() {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Questions & Answers
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Didn’t find the answers to your questions? Ask us — we’ll respond as
            soon as possible.
          </p>
          <button className="bg-[#F4450B] hover:bg-[#d93c09] transition-colors text-white px-8 py-3 rounded-full flex items-center gap-2 w-fit">
            More Questions?
          </button>
        </div>

        {/* Right Section (FAQs) */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="text-base sm:text-lg ring-1 ring-[#F4450B] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 bg-white"
            >
              <FaQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
