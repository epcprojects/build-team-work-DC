"use client";

import BrochureCard from "./BrochureCard";
import { Images } from "../../ui/images";
import { useEffect, useState } from "react";
import { SingleAccordionSkeleton } from "../skeletons";
import { ProductAccordion } from "../faq";
import { useCart } from "../cart/useCart";
import {
  howItWorkForOrganization,
  individualProductOverview,
  organizationCourseFeatures,
} from "../../data/productPageData";
import Image from "next/image";
import ListOfFeature from "./ListOfFeature";

export default function OrganizationPane() {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-3 md:px-6 py-6">
      <h3 className="font-bold text-primary text-lg md:text-xl mb-4 uppercase">
        For an organization
      </h3>
      <div className="flex items-center md:flex-row  gap-1 md:gap-2">
        <h4 className="text-4xl md:text-6xl font-bold text-telegraph text-mirage md:mb-4">
          $29.99
        </h4>
        <span className="font-bold text-black rounded-full bg-gray-100 px-4 py-2 text-xs">
          Organization Version
        </span>
      </div>

      <div className="mb-6 mt-4">
        {showSkeleton ? (
          <SingleAccordionSkeleton></SingleAccordionSkeleton>
        ) : (
          <ProductAccordion
            title={"Get a Custom Quote"}
            addToCart={() => {
              addItem({
                id: "cyber-safety-organization",
                name: "Cyber Safety for Organizations",
                unitPrice: 29.99,
              });
              openCart();
            }}
          ></ProductAccordion>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-base text-mirage sm:text-lg mb-1 md:mb-3">
          Course Description:
        </h3>

        <p className="text-sm sm:text-base mb-6 text-mirage ">
          The <strong>Business Essentials Series</strong> equips employees with
          core skills to thrive in the workplace, covering teamwork,
          cybersecurity, customer service, harassment prevention, and more.
          These training films provide actionable strategies to foster
          collaboration, enhance productivity, and create a safe, inclusive
          environment. By applying these skills, employees can contribute to
          organizational success and build a respectful, high-performing
          workplace.
        </p>

        <ListOfFeature
          title="Course Features:"
          items={[...organizationCourseFeatures]}
          iconColor="#8D1F44"
          iconBgColor="#FFE5EE"
        />

        {/* course overview  */}
        <div className="">
          <h3 className="font-semibold text-base sm:text-lg text-mirage mb-3 mt-5">
            Course Overview:
          </h3>

          <table className="table w-full  mb-6">
            <tbody>
              {individualProductOverview.map((item, index) => (
                <tr key={index} className="border-b border-platinum text-start">
                  <th scope="col" className="text-start w-1/2 py-2">
                    <span className="font-normal text-sm md:text-base text-mirage">
                      {item.label}
                    </span>
                  </th>
                  <th scope="col" className="text-start w-1/2 py-2">
                    <span className="font-medium text-sm md:text-base">
                      {item.value}
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-b border-platinum">
          <ListOfFeature
            title="How it works:"
            items={[...howItWorkForOrganization]}
            iconColor="#08BCFF"
            iconBgColor="#C7F0FF"
          />
        </div>

        {/* Certification + Wallet Card */}
        <div className=" my-6 ">
          <h3 className="font-semibold sm:text-lg text-base text-mirage mb-3 md:mb-6">
            Certification + Wallet Card:
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="shrink-0">
              <Image
                src={
                  Images.businessEssentialsImages.businessEssentialsCertificate
                }
                className="border w-full"
                alt=""
              />
            </div>
            <div className="grow">
              <div className="flex flex-col items-start gap-3 w-full ">
                <Image
                  src={Images.businessEssentialsImages.BusinessEssentialsCard}
                  className="border "
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="font-normal text-mirage sm:text-base text-sm">
            Print your certification and wallet card immediately online upon
            successful completion of the course
          </p>
        </div>

        <BrochureCard
          title="Build Team Work Training Brochure"
          filename="CyberSafetyTrainingDocument.pdf"
          buttonType="primary"
        />
      </div>
    </div>
  );
}
