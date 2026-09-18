"use client";

import { usePathname } from "next/navigation";
import individualFaqs from "../../../data/individualFaqs.json";
import { useState, useRef } from "react";
import generalFaqs from "@/src/data/generalFaqs.json";
import organizationalFaqs from "@/src/data/organizationalFaqs.json";
import Link from "next/link";

const FaqAccordion = () => {
  const [openGeneral, setOpenGeneral] = useState<number | null>(null);
  const [openIndividual, setOpenIndividual] = useState<number | null>(null);
  const [openOrg, setOpenOrg] = useState<number | null>(null);

  const refs = {
    general: useRef<(HTMLDivElement | null)[]>([]),
    individual: useRef<(HTMLDivElement | null)[]>([]),
    org: useRef<(HTMLDivElement | null)[]>([]),
  };

  const toggleAccordion = (section: string, index: number) => {
    if (section === "general") {
      setOpenGeneral(openGeneral === index ? null : index);
    } else if (section === "individual") {
      setOpenIndividual(openIndividual === index ? null : index);
    } else if (section === "org") {
      setOpenOrg(openOrg === index ? null : index);
    }
  };

  const pathname = usePathname();


  let textColor;

  if (pathname === "/cyber-safety-compliance") {
    textColor = "text-secondary";
  } else {
    textColor = "text-primary";
  }

  const getHeight = (section: string, index: number) => {
    const refArray = refs[section as keyof typeof refs];
    return refArray.current[index]?.scrollHeight || 0;
  };

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* General Column */}
        <div>
          <h2 className={`text-xl md:text-2xl font-medium mb-4 ${textColor}`}>
            General
          </h2>
          <div className="space-y-4 mb-6">
            {generalFaqs.map((faq, index) => (
              <div key={index}>
                <button
                  className={`flex justify-between pb-2.5 w-full text-left text-sm md:text-base font-normal text-black gap-3 ${
                    openGeneral === index || index === generalFaqs.length - 1
                      ? ""
                      : "border-b border-gray-300 "
                  }`}
                  onClick={() => toggleAccordion("general", index)}
                >
                  {faq.question}
                  <span
                    className={`w-5  pt-[2px] flex items-center justify-center  h-5 border  font-normal rounded-full shrink-0 ${
                      openGeneral === index
                        ? "text-catalineBlue border-catalineBlue"
                        : "text-gray-400 border-gray-m-400"
                    }`}
                  >
                    {openGeneral === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  ref={(el) => {
                    refs.general.current[index] = el;
                  }}
                  style={{
                    height:
                      openGeneral === index ? getHeight("general", index) : 0,
                    transition: "height 300ms ease",
                  }}
                  className="overflow-hidden"
                >
                  <div className=" p-4 bg-gray-m-200 border-t border-b border-gray-300 md:text-base text-sm text-gray-700 border-t-catalineBlue">
                      <p>{faq.answer.text}</p>

  {faq.answer.bullets.length > 0 && (
    <ul className="list-disc pl-5 mt-2 space-y-1">
      {faq.answer.bullets.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            className={`w-fit  border font-normal px-4 md:text-base text-sm md:px-6 py-1.5 md:py-2.5  rounded-lg text-white ${
              pathname === "/cyber-safety-compliance"
                ? "border-secondary hover:border-secondaryDark bg-secondary hover:bg-secondaryDark"
                : "border-primary hover:border-primaryDark bg-primary hover:bg-primaryDark"
            }`}
            href={"faqs"}
          >
            More FAQs
          </Link>
        </div>

        {/* Individual Training Column */}
        <div>
          <h2 className={`text-xl md:text-2xl font-medium mb-4 ${textColor}`}>
            Individual Training
          </h2>
          <div className="space-y-4">
            {individualFaqs.map((faq, index) => (
              <div key={index}>
                <button
                  className={`flex justify-between w-full pb-2.5 text-left text-sm md:text-base font-normal text-black gap-3 ${
                    openIndividual === index ||
                    index === individualFaqs.length - 1
                      ? ""
                      : "border-b border-gray-300 "
                  }`}
                  onClick={() => toggleAccordion("individual", index)}
                >
                  {faq.question}

                  <span
                    className={`w-5  pt-[2px] flex items-center justify-center  h-5 border  font-normal rounded-full shrink-0 ${
                      openIndividual === index
                        ? "text-catalineBlue border-catalineBlue"
                        : "text-gray-400 border-gray-m-400"
                    }`}
                  >
                    {openIndividual === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  ref={(el) => {
                    refs.individual.current[index] = el;
                  }}
                  style={{
                    height:
                      openIndividual === index
                        ? getHeight("individual", index)
                        : 0,
                    transition: "height 300ms ease",
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-m-200 border-t border-b md:text-base text-sm border-gray-300 text-gray-700 border-t-catalineBlue">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizational Training Column */}
        <div>
          <h2 className={`text-xl md:text-2xl font-medium mb-4 ${textColor}`}>
            Organizational Training
          </h2>
          <div className="space-y-4">
            {organizationalFaqs.map((faq, index) => (
              <div key={index}>
                <button
                  className={`flex justify-between w-full pb-2.5 text-left md:text-base text-sm font-normal text-black gap-3 ${
                    openOrg === index || index === organizationalFaqs.length - 1
                      ? ""
                      : "border-b border-gray-300 "
                  }`}
                  onClick={() => toggleAccordion("org", index)}
                >
                  {faq.question}

                  <span
                    className={`w-5  pt-[2px] flex items-center justify-center  h-5 border  font-normal rounded-full shrink-0 ${
                      openOrg === index
                        ? "text-catalineBlue border-catalineBlue"
                        : "text-gray-400 border-gray-m-400"
                    }`}
                  >
                    {openOrg === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  ref={(el) => {
                    refs.org.current[index] = el;
                  }}
                  style={{
                    height: openOrg === index ? getHeight("org", index) : 0,
                    transition: "height 300ms ease",
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-m-200 border-t border-b md:text-base text-sm border-gray-300 text-gray-700 border-t-catalineBlue">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
