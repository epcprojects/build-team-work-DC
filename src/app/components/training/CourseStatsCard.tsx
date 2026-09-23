import React from "react";
import classNames from "classnames";

interface CourseStatsCardProps {
  title: string;
  stats: Record<string, number | string>;
  onAddClick?: () => void;
  addText?: string;
}

export const 
CourseStatsCard: React.FC<CourseStatsCardProps> = ({
  title,
  stats,
  onAddClick,
  addText = "+ Add More Licenses",
}) => {
  const entries = Object.entries(stats);

  return (
    <div className="p-4 md:p-6 pb-0 md:pb-0">
      <h5 className="text-base font-semibold text-secondary mb-4 lh-base">
        {title}
      </h5>

      <div className="flex" >
        {entries.map(([key, value], index) => {
          const isFirst = index === 0;
          const isLast = index === entries.length - 1;

          return (
            <div
              key={key}
              className={classNames(
                "w-full border border-coralBlue bg-oysterBlue hover:bg-coralBlue p-4",
                {
                  "rounded-l-md": isFirst,
                  "rounded-e-md": isLast,
                  "border-l-0": !isFirst,
                }
              )}
            >
              <div className="text-center ps-0 pe-0">
                <h5 className="font-semibold text-lg">{value}</h5>
                <p className="text-base capitalize">{key}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="block p-3 text-center">
        <button
          type="button"
          onClick={onAddClick}
          className="hover:underline hover:underline-offset-4 hover:text-secondary text-base text-primary font-semibold"
        >
          {addText}
        </button>
      </div>
    </div>
  );
};
