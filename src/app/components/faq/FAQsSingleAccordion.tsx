import React, { useState } from "react";
import { AccordionIcon } from "@/public/icons";

interface Faq {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: Faq[];
}

export const FAQsSingleAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto text-mirage last:border-0 last:border-platinum  divide-y">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-platinum">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left py-3 font-medium focus:outline-none"
          >
            <span>{faq.question}</span>
            <span
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <AccordionIcon />
            </span>
          </button>
          {openIndex === index && (
            <div className="bg-gray-100 text-sm text-gray-700 p-4 rounded">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
