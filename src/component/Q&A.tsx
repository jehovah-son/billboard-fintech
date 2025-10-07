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
                    className="w-full justify-between  flex  items-center text-left text-lg font-semibold text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {question}
                    <span className=" w-5 h-5">
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
