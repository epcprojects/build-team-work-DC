"use client";

import { useState } from "react";
import type { TrainingDetail } from "@/src/app/data/trainingDetails";

import dynamic from "next/dynamic";
import "plyr-react/plyr.css";

const Plyr = dynamic(
  () => import("plyr-react").then((mod) => mod.Plyr),
  {
    ssr: false,
  }
);

const MAX_CHARS_BEFORE_TRUNCATE = 220;

interface TrainingDetailCardProps {
  training: TrainingDetail;
}

export default function TrainingDetailCard({
  training,
}: TrainingDetailCardProps) {
  const [expanded, setExpanded] = useState(false);

  const isLong = training.description.length > MAX_CHARS_BEFORE_TRUNCATE;
  const displayText =
    isLong && !expanded
      ? training.description.slice(0, MAX_CHARS_BEFORE_TRUNCATE).trim() + "…"
      : training.description;

  return (
    <div className="rounded-2xl hover:bg-gray-m-100 border border-gray-m-200 shadow-[0px_32px_64px_-12px_rgba(16,24,40,0.11)] mb-3 transition-transform duration-500 ease-in">
      <div className="flex items-center p-2 md:p-2">
        <div className="grid lg:grid-cols-12 gap-6 w-full">
          {/* Video column */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-2xl overflow-hidden cursor-pointer">
              <Plyr
                source={{
                  type: "video",
                  poster: training.poster,
                  sources: [
                    {
                      src: training.videoSrc,
                      type: "video/mp4",
                    },
                  ],
                }}
                options={{
                  controls: [
                    "play-large",
                    "play",
                    "progress",
                    "volume",
                    "captions",
                    "fullscreen",
                  ],
                }}
              />
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-base sm:text-lg text-mirage mb-1">
                {training.title}
              </h2>
              <p  className={`text-sm sm:text-base leading-relaxed text-mirage font-normal ${
    !expanded ? "line-clamp-2" : ""
  }`}>
                {displayText}
              </p>
              {isLong && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="text-sm sm:text-base font-normal text-primary hover:underline mt-0"
                >
                  {expanded ? "See less" : "See more"}
                </button>
              )}
            </div>

            <div>
              <hr className="border-platinum my-4" />

              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6875 7.75C12.6875 5.72656 11.5938 3.86719 9.84375 2.82812C8.06641 1.81641 5.90625 1.81641 4.15625 2.82812C2.37891 3.86719 1.3125 5.72656 1.3125 7.75C1.3125 9.80078 2.37891 11.6602 4.15625 12.6992C5.90625 13.7109 8.06641 13.7109 9.84375 12.6992C11.5938 11.6602 12.6875 9.80078 12.6875 7.75ZM0 7.75C0 5.26172 1.3125 2.96484 3.5 1.70703C5.66016 0.449219 8.3125 0.449219 10.5 1.70703C12.6602 2.96484 14 5.26172 14 7.75C14 10.2656 12.6602 12.5625 10.5 13.8203C8.3125 15.0781 5.66016 15.0781 3.5 13.8203C1.3125 12.5625 0 10.2656 0 7.75ZM6.34375 4.03125C6.34375 3.67578 6.61719 3.375 7 3.375C7.35547 3.375 7.65625 3.67578 7.65625 4.03125V7.42188L9.98047 8.95312C10.2812 9.17188 10.3633 9.58203 10.1719 9.88281C9.95312 10.1836 9.54297 10.2656 9.24219 10.0469L6.61719 8.29688C6.45312 8.1875 6.34375 7.96875 6.34375 7.75V4.03125Z"
                    fill="#33488A"
                  />
                </svg>
                <span className="block text-sm sm:text-base font-normal text-mirage">
                  <strong className="font-bold text-mirage sm:text-base text-sm">Duration</strong>{" "}
                  {training.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}