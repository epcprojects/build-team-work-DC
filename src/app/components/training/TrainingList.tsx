import trainingData from "@/src/data/trainingsData.json";

const TrainingList = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      {trainingData.map((training) => (
        <div
          key={training.id}
          className="col-span-12 md:col-span-6 lg:col-span-4 grid items-stretch"
        >
          <a
            href={training.link}
            className="rounded-xl  overflow-hidden group flex flex-col h-full"
          >
            <img src={training.image} className="w-full" alt={training.title} />

            <div className="px-6 py-3 bg-white flex-1 border-b border-platinum">
              <h2 className="font-semibold text-lg md:text-xl mb-1">
                {training.title}
              </h2>
              <p className="text-black/90 text-sm md:text-base">
                {training.description}
              </p>
            </div>

            <div className="relative text-center flex items-center justify-center text-primary w-full py-2.5 bg-white  duration-300 group-hover:text-white gap-3 overflow-hidden">
              <span className="relative z-10 text-sm md:text-base font-medium">
                Learn more
              </span>
              <svg
                viewBox="0 0 17 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 w-3.5 md:w-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.71673 0.61273C8.04217 0.287293 8.56981 0.287293 8.89525 0.61273L15.8952 7.61273C16.2207 7.93817 16.2207 8.4658 15.8952 8.79124L8.89525 15.7912C8.56981 16.1167 8.04217 16.1167 7.71673 15.7912C7.3913 15.4658 7.3913 14.9382 7.71673 14.6127L13.2941 9.03532H1.30599C0.845752 9.03532 0.472656 8.66222 0.472656 8.20199C0.472656 7.74175 0.845752 7.36865 1.30599 7.36865H13.2941L7.71673 1.79124C7.3913 1.4658 7.3913 0.938167 7.71673 0.61273Z"
                ></path>
              </svg>

              <div className="absolute inset-0 bg-primary h-full w-full transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TrainingList;
