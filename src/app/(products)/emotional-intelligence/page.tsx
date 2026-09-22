"use client";

import { useState } from "react";
import { FaqAccordion } from "@/src/app/components/faq";
import { FancyBoxVideo } from "@/src/app/components/overlays";
import {
  IndividualPane,
  OrganizationPane,
  ProductBanner,
  TrainingDetailCard,
  TrainingList,
} from "@/src/app/components/training";
import { ClockIcon, PlayIcon } from "@/public/icons";
import { trainingDetails } from "../../data/trainingDetails";
import { Images } from "../../ui/images";

type Tab = "individual" | "organization";

const TABS: { id: Tab; label: string }[] = [
  { id: "individual", label: "Individual" },
  { id: "organization", label: "Organization" },
];

const emotionalIntelligenceDescription = (
  <>
    The <strong>Emotional Intelligence Series</strong> is a collection of HR training films that enhance teamwork, communication, and leadership. Emotional intelligence (EI) boosts productivity, resolves conflicts, and fosters strong relationships, outperforming high IQ in 70% of cases. This course covers self-awareness, empathy, conflict resolution, and decision-making, helping individuals tackle challenges and create a supportive, successful workplace.
  </>
);

const certificateImage =
  Images.emotionalIntelligenceImages.EmotionalIntelligenceCertificate
const cardImage =  Images.emotionalIntelligenceImages.EmotionalIntelligenceCard

const EmotionalIntelligencePage = () => {


  const [tab, setTab] = useState<Tab>("individual");

  return (
    <>
     

      <ProductBanner
        audience="Everyone"
        name="Emotional Intelligence"
        description="The Emotional Intelligence Series is a set of HR training films that help organizations improve internal interactions and build strong teams."
        backgroundClass="bg-ProductBannerEmotionalIntelligence"
      ></ProductBanner>

      <section className="container max-w-8xl mx-auto py-8 md:py-16">
        <div className="grid grid-cols-12 px-4 lg:px-0 gap-4 md:gap-8">
          {/* left side */}
          <div className="col-span-12 lg:col-span-7">
            <div className="border-b border-platinum pb-6 mb-6">
              <h3 className="font-semibold uppercase sm:text-xl text-lg mb-1 md:mb-6 text-mirage">
                Overview
              </h3>

              <p className="text-base mb-4 text-mirage ">
                The <strong>Emotional Intelligence Series</strong> is a collection of impactful HR training films designed to improve teamwork and communication. Emotional intelligence (EI) is key to workplace success, boosting productivity, resolving conflicts, and inspiring leadership. By fostering employee engagement and strong relationships, EI helps create happier teams and better business outcomes, outperforming high IQ in 70% of cases.
              </p>

              <div className="flex sm:flex-row flex-col gap-x-6 gap-y-1">
                <div className="flex gap-1 items-center">
                  <PlayIcon />
                  <span className="font-semibold sm:text-base text-sm text-mirage">
                    Number of Videos: <span className="font-normal ">21</span>
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <ClockIcon />
                  <span className="font-semibold sm:text-base text-sm text-mirage">
                    Total Duration:{" "}
                    <span className="font-normal ">2 hr 47 min</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6 pb-6">
              <h3 className="font-semibold text-black text-lg mb-3 md:mb-6">
                Trainings Included
              </h3>
              {/* video card */}
              <div className="flex flex-col">
                {trainingDetails.map((training) => (
                  <TrainingDetailCard key={training.id} training={training} />
                ))}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-12 lg:col-span-5">
            <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card">
              {/* Tabs */}
              <div
                role="tablist"
                className="flex gap-3 px-4 pt-4 bg-[#F8F8F8] text-base font-semibold"
              >
                {TABS.map(({ id, label }) => {
                  const active = tab === id;
                  return (
                    <button
                      key={id}
                      role="tab"
                      type="button"
                      aria-selected={active}
                      aria-controls={`${id}-pane`}
                      onClick={() => setTab(id)}
                      className={`rounded-t-lg px-4 py-2 font-semibold transition-colors cursor-pointer ${
                        active
                          ? "bg-white text-primary border-t border-l border-r border-platinum"
                          : " text-[#333] hover:bg-gray-200 tab-glow"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Panes */}
              <div className="">
                <div
                  id="individual-pane"
                  role="tabpanel"
                  hidden={tab !== "individual"}
                >
                  <IndividualPane
                    courseDescription={
                    emotionalIntelligenceDescription
                    }
                    certificateImage={
                     certificateImage
                    }
                    cardImage={
                      cardImage
                    }
                  />
                </div>
                <div
                  id="organization-pane"
                  role="tabpanel"
                  hidden={tab !== "organization"}
                >
                  <OrganizationPane  courseDescription={
                    emotionalIntelligenceDescription
                    }
                    certificateImage={
                     certificateImage
                    }
                    cardImage={
                      cardImage
                    } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div className="container max-w-8xl mx-auto px-4 md:px-0">
          <h2 className="text-xl md:text-3xl text-black   font-semibold mb-4 md:mb-10">
            Frequently Asked Questions
          </h2>

          <FaqAccordion></FaqAccordion>
        </div>
      </section>

      <section className="bg-aliceBlue">
        <div className="container max-w-8xl mx-auto px-4 lg:px-0 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl text-black text-telegraph text-center font-semibold mb-6">
            Other Trainings Available
          </h2>

          <TrainingList></TrainingList>
        </div>
      </section>
    </>
  );
};

export default EmotionalIntelligencePage;
