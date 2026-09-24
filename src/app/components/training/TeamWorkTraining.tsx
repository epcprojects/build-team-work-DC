// import teamWorkTrainingData from "@/src/data/teamWorkTrainingData.json";
// import Image from "next/image";
// const TeamWorkTraining = () => {
//   return (
//     <section className="bg-aliceBlue">
//       <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
//         <h1 className="text-center font-medium text-[#2f2f2f] md:text-[45px] text-[38px] font-telegraf mb-6">Featured Team Work Training</h1>
//         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-5 xl:gap-6 ">
//           {teamWorkTrainingData.map((training) => (
//             <div
//               key={training.id}
//               className=" grid items-stretch bg-white p-2 rounded-xl"
//             >
//               <Image
//                 src={training.image}
//                 alt={training.title}
//                 width={288}
//                 height={158}
//                 className="w-full rounded-xl"
//               />

//               <div className="px-1 pt-4 pb-2  flex-1">
//                 <h2 className="font-semibold text-base md:text-lg mb-1">
//                   {training.title}
//                 </h2>
//                 <p className="text-gray-m-500 text-sm md:text-base">
//                   {training.description}
//                 </p>
//               </div>

//               <div className="relative text-left flex items-center justify-start text-primary w-full py-1 bg-white duration-300  gap-3 overflow-hidden px-1 ">
//                 <span className="relative z-10 text-sm md:text-base font-medium cursor-pointer">
//                   Learn more
//                 </span>
//                 <svg
//                   className="ms-1 cursor-pointer"
//                   width="12"
//                   height="8"
//                   viewBox="0 0 12 8"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M0.410826 0.642759C0.736263 0.317322 1.2639 0.317322 1.58934 0.642759L6.00008 5.0535L10.4108 0.642759C10.7363 0.317322 11.2639 0.317322 11.5893 0.642759C11.9148 0.968196 11.9148 1.49583 11.5893 1.82127L6.58934 6.82127C6.2639 7.14671 5.73626 7.14671 5.41083 6.82127L0.410826 1.82127C0.0853888 1.49583 0.0853888 0.968196 0.410826 0.642759Z"
//                     fill="#9C2068"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamWorkTraining;

"use client";

import { useState, useRef, useEffect } from "react";
import teamWorkTrainingData from "@/src/data/teamWorkTrainingData.json";
import Image from "next/image";

const TeamWorkTraining = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown === null) return;

      const activeWrapper = wrapperRefs.current[openDropdown];
      if (activeWrapper && !activeWrapper.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-aliceBlue">
      <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <h1 className="text-center font-medium text-[#2f2f2f] md:text-[45px] text-[38px] font-telegraf mb-6">Featured Team Work Training</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-5 xl:gap-6 ">
          {teamWorkTrainingData.map((training) => (
            <div
              key={training.id}
              ref={(el) => {
                wrapperRefs.current[training.id] = el;
              }}
              className=" grid items-stretch bg-white p-2 rounded-xl relative"
            >
              <Image
                src={training.image}
                alt={training.title}
                width={288}
                height={158}
                className="w-full rounded-xl"
              />

              <div className="px-1 pt-4 pb-2  flex-1">
                <h2 className="font-semibold text-base md:text-lg mb-1">
                  {training.title}
                </h2>
                <p className="text-gray-m-500 text-sm md:text-base">
                  {training.description}
                </p>
              </div>

              <div className="relative text-left flex items-center justify-start text-primary w-full py-1 bg-white duration-300  gap-3 overflow-hidden px-1 ">
                <span
                  onClick={() => toggleDropdown(training.id)}
                  className="relative z-10 text-sm md:text-base font-medium cursor-pointer"
                >
                  Learn more
                </span>
                <svg
                  onClick={() => toggleDropdown(training.id)}
                  className={`ms-1 cursor-pointer transition-transform duration-300 ${
                    openDropdown === training.id ? "rotate-180" : ""
                  }`}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.410826 0.642759C0.736263 0.317322 1.2639 0.317322 1.58934 0.642759L6.00008 5.0535L10.4108 0.642759C10.7363 0.317322 11.2639 0.317322 11.5893 0.642759C11.9148 0.968196 11.9148 1.49583 11.5893 1.82127L6.58934 6.82127C6.2639 7.14671 5.73626 7.14671 5.41083 6.82127L0.410826 1.82127C0.0853888 1.49583 0.0853888 0.968196 0.410826 0.642759Z"
                    fill="#9C2068"
                  ></path>
                </svg>
              </div>

              {openDropdown === training.id && (
                <div className="absolute left-2 bottom-2 translate-y-full w-max min-w-[240px] bg-white rounded-lg shadow-lg border border-gray-100 z-20 overflow-hidden">
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-sm sm:text-base text-mirage font-normal hover:bg-gray-50"
                  >
                    Business Essentials For Individuals
                  </a>
                  <a
                    href="##"
                    className="block px-4 py-2.5 text-sm sm:text-base text-mirage font-normal hover:bg-gray-50"
                  >
                    Business Essentials For Organizations
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWorkTraining;