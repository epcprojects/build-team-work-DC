import React from "react";

type LessonCardProps = {
  title: string;
  description: string;
  onClick: () => void;
  licenseNo: string;
};

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  onClick,
  licenseNo,
}) => {
  return (
    <div className="flex items-start flex-col md:flex-row gap-4 md:gap-8 justify-between mb-6 last:mb-0">
      <div className="flex items-start gap-2 md:gap-4">
        <div className="text-center pt-1.5 font-semibold text-gray-700 shrink-0 bg-[url(/images/products/training/lessionCount.png)] w-12 h-12 bg-no-repeat bg-contain">
          {licenseNo}
        </div>
        <div>
          <h2 className="font-semibold text-base">{title}</h2>
          <p className="font-normal text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <button
        onClick={onClick}
        className="w-fit md:mt-4 bg-secondary whitespace-nowrap hover:bg-secondaryDark border text-sm md:text-base font-normal border-secondary hover:border-secondaryDark px-2 md:px-4 py-0.5 md:py-1.5 rounded-md md:rounded-lg text-white"
      >
        View Lesson
      </button>
    </div>
  );
};

export default LessonCard;
