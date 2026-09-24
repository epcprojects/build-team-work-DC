import React from "react";
import { TrainingLogTable } from "../training";
import Image from "next/image";
import { ButtonType, ThemeButton } from "../forms";
import { ArrowDownIcon, TrainingLogIcon } from "@/public/icons";
import { CertificateData } from "../../(dashboard)/dashboard/page";

interface TrainingLogProps {
  certificates: CertificateData[];
  onDownload: (certificate: CertificateData) => void;
}

const TrainingLog = ({ certificates, onDownload }: TrainingLogProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white">
      <div className="flex gap-2 border-b items-center  py-3 bg-astronautBlue px-4">
        <TrainingLogIcon />
        <h5 className="text-base font-medium mb-0 text-white">Training Log</h5>
      </div>

      <div className="p-4 md:p-6 ">
        <div className="py-3 flex items-center flex-col gap-4 bg-catSkillWhite rounded-lg p-4">
          <div className="flex sm:flex-row flex-col justify-between gap-2 w-full">
            <div className="flex flex-wrap gap-2.5 items-center">
              <h5 className="text-base mb-0 font-medium">
                Certifications Expiring
              </h5>
              <div className="flex items-center gap-2 ">
                <select
                  id="expireInDropdown"
                  className=" w-auto text-sm outline-none p-2 rounded-md bg-white"
                  name="expireIn"
                >
                  <option value="0">This Month</option>
                  <option value="1">Next Month</option>
                  <option value="2">This Quarter</option>
                  <option value="3">Next Quarter</option>
                  <option value="4">This year</option>
                </select>
                <span id="expireInRangeText" className="block font-normal">
                  (Apr 2025)
                </span>
              </div>
            </div>
            <div>
              <ThemeButton
                icon={<ArrowDownIcon />}
                type={ButtonType.PRIMARY}
                paddings="px-4 py-2"
                onClick={() => {}}
              >
                Download
              </ThemeButton>
            </div>
          </div>
          <div className="rounded-md border border-b-0 border-platinum w-full overflow-hidden">
            <TrainingLogTable
              certificates={certificates}
              onDownload={onDownload}
            />
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 ">
        <div className="py-3 flex items-center flex-col gap-4 bg-lavenderBlush rounded-lg p-4">
          <div className="flex sm:flex-row flex-col justify-between items-center gap-2 w-full">
            <h5 className="text-base mb-0 font-medium">
              Real Time Training Log
            </h5>

            <ThemeButton
              icon={<ArrowDownIcon />}
              type={ButtonType.PRIMARY}
              paddings="px-4 py-2"
              onClick={() => {}}
            >
              Download
            </ThemeButton>
          </div>

          <div className="rounded-md border border-b-0 border-platinum w-full overflow-hidden">
            <div className="flex flex-col p-6 border-b border-platinum items-center w-full h-full justify-center">
              <Image
                src="/images/dashboard/Illustration-zero.svg"
                alt=""
                width={200}
                height={200}
              ></Image>

              <span className="block text-sm">No record found</span>
            </div>
            <TrainingLogTable
              certificates={certificates}
              onDownload={onDownload}
            />
            <div className="flex justify-center items-center py-3 border-b border-platinum">
              <a className=" text-primary hover:text-secondary hover:underline hover:underline-offset-4 font-semibold text-base">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingLog;
