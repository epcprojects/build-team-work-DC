import React from "react";

const SkeletonBlock: React.FC<{ height?: string; width?: string }> = ({
  height = "h-4",
  width = "w-full",
}) => (
  <div
    className={`bg-gray-300 rounded ${height} ${width} animate-pulse mb-2`}
  />
);

const TrainingSideSectionSkeleton: React.FC = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <h2 className="text-3xl md:block hidden text-primary font-bold text-center invisible">
        %nbsp;
      </h2>
      <div className="p-4 md:p-6 pt-8 md:pt-8 md:mt-4 bg-gray-200">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="mb-4">
            <SkeletonBlock height="h-4" width="w-1/3" />
            <SkeletonBlock height="h-8" width="w-full" />
          </div>
        ))}

        <div className="mb-4">
          <SkeletonBlock height="h-4" width="w-1/3" />
          <SkeletonBlock height="h-20" width="w-full" />
        </div>

        <div className="mb-4">
          <SkeletonBlock height="h-4" width="w-1/2" />
          <div className="bg-gray-300 h-12 w-60 animate-pulse bg-contain bg-no-repeat rounded" />
        </div>
      </div>
    </div>
  );
};

export default TrainingSideSectionSkeleton;
