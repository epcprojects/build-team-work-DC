"use client";

import {
  AccountInformation,
} from "@/src/app/components/forms";
import {
  CopyIcon,
  RollOutIcon,
} from "@/public/icons";
import {
  CourseStatsCard,
} from "@/src/app/components/training";
import { FAQsFileIcon } from "@/public/icons";
import { FAQsSingleAccordion } from "@/src/app/components/faq";
import Link from "next/link";
import { faqs } from "../../data/Dashboard";
import { TrainingLog } from "../../components/table";

export interface CertificateData {
  dateGranted: string;
  nameOnCertificate: string;
  course: string;
}

const DashboardPage = () => {
  const certificates = [
    {
      dateGranted: "8/30/2023",
      nameOnCertificate: "Mohsin",
      course: "Cyber Safety Training",
    },
  ];

  const handleDownload = (certificate: {
    dateGranted: string;
    nameOnCertificate: string;
    course: string;
  }) => {
    console.log("Downloading certificate for:", certificate.nameOnCertificate);
  };

  const stats = {
    purchased: 4,
    used: 2,
    remaining: 2,
  };

  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-[40px] text-telegraph mb-2 text-white  font-semibold">
              Administration Dashboard
            </h2>
            <span className="text-base text-white">for Organizations</span>
          </div>
        </div>
      </section>

      <section className=" py-8 md:py-24 bg-gray-100">
        <div className="container max-w-8xl mx-auto grid grid-cols-12 gap-4 px-4 md:px-8">
          <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-12 md:col-span-6  items-stretch grid">
             <AccountInformation/>
            </div>

            <div className="col-span-12 md:col-span-6  items-stretch grid">
              <div className="rounded-xl overflow-hidden bg-white">
                <div className="flex gap-2 border-b items-center  py-3 bg-astronautBlue px-4">
                  <RollOutIcon />
                  <h5 className="text-base font-medium mb-0 text-white">
                    Account Information
                  </h5>
                </div>

                <div className="p-4 md:p-6">
                  <p className="text-base font-bold">
                    Copy a generic set of prewritten instructions to send to
                    your employees
                  </p>

                  <div className="py-3 flex items-center gap-4">
                    <span className="scale-150 text-gray-700">
                      <CopyIcon />
                    </span>
                    <a className="text-base underline-none font-medium text-gray-700 block">
                      Instructions to Provide to Staff for Cyber Safety Training
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* training log */}
            <div className="col-span-12  items-stretch grid">
             <TrainingLog certificates={certificates}
              onDownload={handleDownload}/>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 ">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="rounded-xl overflow-hidden bg-white">
                  <div className="flex gap-2 border-b border-platinum items-center justify-between py-3 bg-astronautBlue px-4">
                    <div className="flex items-center gap-2">
                      <RollOutIcon />
                      <h5 className="text-base font-medium mb-0 text-white">
                        License Count
                      </h5>
                    </div>

                    <h5 className="text-sm font-medium mb-0 text-white">
                      Billing Method:<span> PrePay</span>
                    </h5>
                  </div>

                  <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1">
                    <CourseStatsCard
                      title="Cyber Safety Training"
                      stats={stats}
                      onAddClick={() => {}}
                    ></CourseStatsCard>

                    <CourseStatsCard
                      title="Cyber Safety Training"
                      stats={stats}
                      onAddClick={() => {}}
                    ></CourseStatsCard>
                  </div>
                </div>
              </div>
              <div className="col-span-12 ">
                <div className="rounded-xl overflow-hidden bg-white">
                  <div className="flex gap-2 border-b border-platinum items-center  py-3 bg-astronautBlue px-4">
                    <FAQsFileIcon />
                    <h5 className="text-base font-medium mb-0 text-white">
                      Frequently Asked Questions
                    </h5>
                  </div>

                  <div className="px-4 md:px-6 md:py-2 pb-0">
                    <FAQsSingleAccordion faqs={faqs} />
                    <div className="flex justify-center items-center py-3 ">
                      <Link
                        href={"/faqs"}
                        className=" text-primary hover:text-secondary hover:underline hover:underline-offset-4 font-semibold text-base"
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
