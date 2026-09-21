import React from "react";

const SkeletonLine: React.FC<{ width?: string; height?: string }> = ({
  width = "w-full",
  height = "h-4",
}) => (
  <div className={`bg-gray-300 rounded ${width} ${height} animate-pulse`} />
);

const SingleAccordionSkeleton: React.FC = () => {
  return (
    <div className="accordion p-4 bg-gray-100 select-none rounded-xl">
      <div className="accordion-item">
        <div className="flex items-center justify-between mb-4">
          <SkeletonLine width="w-1/3" height="h-7" />
        </div>
        <div className="accordion-content mt-4">
          <SkeletonLine width="w-2/3" height="h-5" />
          <div className="rounded-lg w-full bg-gray-300 h-10 mt-2 mb-6 animate-pulse" />

          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-2 last:mb-6"
            >
              <SkeletonLine width="w-1/3" height="h-5" />
              <SkeletonLine width="w-1/4" height="h-5" />
            </div>
          ))}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-10 w-full bg-gray-300 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAccordionSkeleton;
