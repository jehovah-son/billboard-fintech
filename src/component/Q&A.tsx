import { useState } from "react";
import ChevronUpIcon from "../../public/assets/chevron-up.svg";
import ChevronDownIcon from "../../public/assets/chevron-down.svg";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FaQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" p-4">
        <button
          className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="text-xl text-dark-purple w-9 h-9">
            {isOpen ? (
              <img src={ChevronUpIcon} />
            ) : (
              <img src={ChevronDownIcon} />
            )}
          </span>
        </button>
        {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
      </div>
    </div>
  );
}
