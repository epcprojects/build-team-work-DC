import teamWorkTrainingData from "@/src/data/teamWorkTrainingData.json";
import Image from "next/image";
const TeamWorkTraining = () => {
  return (
    <section className="bg-aliceBlue">
      <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-5 xl:gap-8 ">
          {teamWorkTrainingData.map((training) => (
            <div
              key={training.id}
              className=" grid items-stretch bg-white p-2 rounded-xl"
            >
              <a
                href={training.link}
                className="rounded-xl  overflow-hidden group flex flex-col h-full"
              > 

                <Image src={training.image} alt={training.title} width={288} height={158}
                  className="w-full rounded-xl"
                  />

                <div className="px-1 pt-4 pb-2  flex-1">
                  <h2 className="font-semibold text-base md:text-lg mb-1">
                    {training.title}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {training.description}
                  </p>
                </div>

                <div className="relative text-left flex items-center justify-start text-primary w-full py-1 bg-white duration-300  gap-3 overflow-hidden">
                  <span className="relative z-10 text-sm md:text-base font-medium">
                    Learn more
                  </span>
                  <svg
                    className="ms-1"
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWorkTraining;
