import React from "react";
import TrainingSideSectionSkeleton from "./TrainingSideSectionSkeleton";

const SkeletonRow = () => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between mb-6">
    <div className="flex gap-2 md:gap-4 flex-1">
      <div className="pt-1.5 w-16 h-16 bg-gray-300 rounded-md animate-pulse shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-7 w-32 bg-gray-300 rounded-md animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse" />
          <div className="h-4  w-full bg-gray-300 rounded-md animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
    <div className="w-40 h-9 bg-gray-300 rounded-md animate-pulse md:mt-4" />
  </div>
);
const TrainingSkeleton = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-8 flex flex-col items-center">
            <div className="h-8 w-1/2 bg-gray-300 rounded-md animate-pulse text-3xl font-bold text-primary text-center" />

            <div className="bg-mabel p-4 md:p-6 md:pt-8 mt-4 w-full">
              {[...Array(4)].map((_, index) => (
                <SkeletonRow key={index} />
              ))}

              <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-6">
                <div className="w-40 h-32 bg-gray-300 rounded-md animate-pulse shrink-0" />
                <div className="flex-1">
                  <div className="h-7 w-1/3 bg-gray-300 rounded-md animate-pulse font-semibold" />

                  <div className="space-y-2 mt-2">
                    <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse" />
                    <div className="h-4  w-full bg-gray-300 rounded-md animate-pulse" />
                    <div className="h-4  w-full bg-gray-300 rounded-md animate-pulse" />
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TrainingSideSectionSkeleton />
        </div>
      </div>
    </section>
  );
};

export default TrainingSkeleton;
