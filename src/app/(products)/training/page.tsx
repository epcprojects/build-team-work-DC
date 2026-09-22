"use client";

import  { useEffect, useState } from "react";
import { Modal } from "@/src/app/components/overlays";
import { TrainingSkeleton } from "@/src/app/components/skeletons";
import {
  FinalExam,
  LessonCard,
  TrainingSideSection,
} from "@/src/app/components/training";
import { trainingLessons } from "@/src/app/data/trainingData";

const TrainingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover bg-center py-20 bg-no-repeat">
          <div className="container max-w-8xl mx-auto md:px-8 px-4">
            <h2 className="text-3xl md:text-5xl text-telegraph  text-white  font-medium">
              My Training
            </h2>
          </div>
        </div>
      </section>
      {showSkeleton ? (
        <TrainingSkeleton />
      ) : (
        <section className="py-8 md:py-16">
          <div className="container max-w-8xl mx-auto md:px-8 px-4">
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-8 ">
                <h2 className="text-3xl text-primary font-bold text-center">
                  Cyber Safety Training
                </h2>
                <Modal
                  isOpen={isModalOpen}
                  closeOnOutsideClick={false}
                  onClose={() => setIsModalOpen(false)}
                  showCloseButton={false}
                  size="large"
                >
                  <FinalExam />
                </Modal>

                <div className=" bg-mabel p-4 md:pt-8 md:p-6 mt-4">
                  {trainingLessons.map((lesson, index) => (
                    <LessonCard
                      key={index}
                      description={lesson.description}
                      title={lesson.title}
                      licenseNo={`${index + 1}`}
                      onClick={() => {}}
                    />
                  ))}

                  <div className="flex items-start flex-col md:flex-row gap-4 md:gap-8 justify-between mb-6 last:mb-0">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="text-center pt-1.5 font-semibold text-gray-700 bg-[url(/images/products/training/trainingExam.png)] shrink-0 w-12 h-12 bg-no-repeat bg-contain"></div>
                      <div>
                        <h2 className="font-semibold text-base">Final Exam</h2>
                        <p className="font-normal text-sm text-gray-600">
                          There are 15 questions and you need to receive 80% or
                          above to pass and obtain your certificate. You can
                          take the exam as many times as you need to pass and
                          you can take it multiple times if you want to try for
                          a higher score.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={openModal}
                      className="w-fit md:mt-4 bg-secondary  whitespace-nowrap hover:bg-secondaryDark border text-sm md:text-base font-normal border-secondary hover:border-secondaryDark px-2 md:px-4 py-0.5 md:py-1.5 rounded-md md:rounded-lg text-white"
                    >
                      Take Exam
                    </button>
                  </div>

                  <div className="flex items-start flex-col md:flex-row gap-2 md:gap-4">
                    <div className="text-center pt-1.5 font-semibold text-gray-700 bg-[url(/images/products/training/certificate.jpg)] shrink-0 w-40 h-32 bg-no-repeat bg-contain"></div>
                    <div>
                      <h2 className="font-semibold text-base">
                        Certificate of Completion
                      </h2>
                      <p className="font-normal text-sm text-gray-600">
                        Print your Cyber Safety Training Certificate of
                        Completion immediately online upon successful completion
                        of this course. (Requires Adobe PDF Reader)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <TrainingSideSection
                category="Training"
                topic="Cyber Safety"
                about="This course provides an overview of cyber safety which involves precautions and practices to protect against online threats like cyber attacks, identity theft, and online fraud. By practicing cyber safety, individuals can safely and securely navigate the digital world around them."
                avgCompletionTime="1 Hour"
                format="Self-Paced Online Training"
                access="MultiUser - No Time Limit"
                license="MultiUser"
                pdfLink="http://get.adobe.com/reader/"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TrainingPage;
