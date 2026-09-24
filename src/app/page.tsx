"use client";
import React, { useState } from "react";
import {
  TrainingList,
  ResponsiveTrainingSection,
  WhyChooseUs,
  TeamWorkTraining,
} from "./components/training";
import { FancyBoxVideo } from "./components/overlays";
import { ThemeButton, ButtonType } from "./components/forms";
import { useRouter } from "next/navigation";
import { WorksIcon } from "@/public/icons";
import Image from "next/image";
import { Images } from "./ui/images";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <section className="">
        <div className="slider-wrapper">
          <div className="video-banner relative bg-secondaryDark w-full  pb-[80%] md:pb-[50%] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(0deg,rgba(12,26,61,.4),rgba(12,26,61,.4))] before:z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute left-0 top-0 w-full h-full object-cover"
            >
              <source
                src="https://docdn.nyc3.cdn.digitaloceanspaces.com/HomePageVideos/BuildTeamWork.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="flex items-center justify-center flex-col z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full  ">
              <h1 className="text-3xl md:text-[4rem] mb-2 font-semibold text-telegraph text-white ">
                Build Team Work
              </h1>
              <h4 className="text-lg md:text-3xl font-semibold mb-2">
                Organizational Excellence Made Fast + Easy + Painless
              </h4>

              <a
                onClick={() => setIsVideoOpen(true)}
                className="w-fit mt-3 md:mt-5 no-underline text-white  bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-full flex justify-center gap-2 md:gap-3  cursor-pointer items-center text-sm md:text-xl px-4 md:px-4  py-2 md:py-3  hover:bg-[rgba(0,0,0,0.6)]"
              >
                <Image
                  alt="BannerPlayBtn"
                  className="md:w-14 md:h-14 w-8 h-8"
                  src={Images.IndexPageImages.BannerPlayBtn}
                ></Image>
                Watch Explainer Video
              </a>
            </div>
          </div>
        </div>
        <FancyBoxVideo
          isOpen={isVideoOpen}
          videoUrl="https://www.youtube.com/watch?v=yfjAhhqFNPU"
          onClose={() => setIsVideoOpen(false)}
        />
      </section>

      {/* TeamWorkTraining */}
      <TeamWorkTraining />

      <section className="bg-pearl">
        <div className="container max-w-8xl mx-auto px-4 lg:px-8 py-8 md:py-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2 mb-2 md:mb-8">
              <h2 className="text-3xl md:text-5xl text-black text-telegraph text-center font-semibold mb-3 md:mb-6">
                How It Works
              </h2>

              <a onClick={() => setIsVideoOpen(true)}>
                <Image
                  alt="HowItWorks"
                  className="w-full rounded-3xl shadow-imgShadow hover:shadow-primary/20"
                  src={Images.IndexPageImages.HowItWorks}
                ></Image>
              </a>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-2 ">
              <div className="group flex items-start gap-4 md:gap-8">
                <div className="border group-hover:bg-primary shrink-0 text-primary group-hover:text-white border-primary rounded-full md:w-20 flex items-center justify-center h-12 w-12 md:h-20">
                  <WorksIcon />
                </div>

                <div>
                  <h2 className="text-xl md:text-3xl font-semibold mb-4">
                    Individual
                  </h2>

                  <ul className="custom-list text-base md:text-lg text-gray-700">
                    <li>Register for the individual training</li>
                    <li>Login as your convenience 24x7</li>
                    <li>Take the training and pass the final exam</li>
                    <li>
                      You receive a pdf certificate immediately upon passing the
                      final exam
                    </li>
                  </ul>
                  <ThemeButton
                    onClick={() => router.push("/pricing")}
                    type={ButtonType.PRIMARY_OUTLINE}
                    paddings="py-1.5 md:px-5 md:py-2 px-4"
                  >
                    Learn more
                  </ThemeButton>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7">
              <div className="group flex items-start gap-4 md:gap-8">
                <div className="border group-hover:bg-secondary shrink-0 text-secondary group-hover:text-white border-secondary rounded-full md:w-20 flex items-center justify-center h-12 w-12 md:h-20">
                  <WorksIcon />
                </div>

                <div>
                  <h2 className="text-xl md:text-3xl font-semibold mb-4">
                    Organization
                  </h2>
                  <ul className="custom-list text-base md:text-lg text-gray-700">
                    <li> Register for the Organizational Training</li>
                    <li>
                      Login to your administration account and copy the template
                      instructions provided
                    </li>
                    <li>Email template instructions to your staff</li>
                    <li>
                      Sit back and the certificates for everyone will be emailed
                      to you as they complete their training
                    </li>
                  </ul>
                  <ThemeButton
                    onClick={() => router.push("/pricing")}
                    type={ButtonType.SECONDARY_OUTLINE}
                    paddings="py-1.5 md:px-5 md:py-2 px-4"
                  >
                    Learn more
                  </ThemeButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <ResponsiveTrainingSection />

      <section className="bg-aliceBlue">
        <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl text-black text-telegraph text-center font-semibold mb-3 md:mb-6">
            Other Trainings Available
          </h2>

          <TrainingList></TrainingList>
        </div>
      </section>
    </>
  );
}
