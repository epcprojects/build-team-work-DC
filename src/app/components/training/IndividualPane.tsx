import { BrochureCard, ListOfFeature } from "@/src/app/components/training";
import type { StaticImageData } from "next/image";

import {
  howItWork,
  individualCourseFeatures,
  individualProductOverview,
} from "../../data/productPageData";
import { ButtonType, CyberButton } from "../forms";
import { CartIcon } from "@/public/icons";
import { useCart } from "../cart/useCart";
import Image from "next/image";

interface IndividualPaneProps {
  courseDescription: React.ReactNode;
  certificateImage: StaticImageData;
  cardImage: StaticImageData;
}

export default function IndividualPane({
  courseDescription,
  certificateImage,
  cardImage,
}: IndividualPaneProps) {
  const { addItem, openCart } = useCart();

  return (
    <div className="px-3 md:px-6 py-6">
      <h3 className="font-bold text-primary text-lg md:text-xl mb-4 uppercase">
        For a Single Individual
      </h3>
      <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
        <h4 className="text-mirage text-6xl font-bold text-telegraph mb-4">
          $29.99
        </h4>
        <span className="font-bold text-black rounded-full bg-gray-100 px-4 py-2 text-xs">
          Individual Version
        </span>
      </div>

      <CyberButton
        fullWidth
        type={ButtonType.PRIMARY}
        icon={<CartIcon />}
        onClick={() => {
          addItem({
            id: "cyber-safety-individual",
            name: "Cyber Safety for Individuals",
            unitPrice: 29.99,
          });
          openCart();
        }}
        paddings="px-5 py-2 md:py-3 mb-4"
      >
        Add to Cart
      </CyberButton>

      <div>
        <div className="border-b border-platinum">
          <h3 className="font-semibold text-mirage text-lg md:mb-3">
            Course Description:
          </h3>

          <p className="sm:text-base text-sm mb-6 text-mirage">
            {courseDescription}
          </p>

          <ListOfFeature
            title="Course Features:"
            items={[...individualCourseFeatures]}
            iconColor="#8D1F44"
            iconBgColor="#FFE5EE"
          />
        </div>

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

        <div className="border-b border-platinum">
          <ListOfFeature
            title="How it works:"
            items={[...howItWork]}
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
                src={certificateImage}
                className="border w-full"
                alt=""
              />
            </div>
            <div className="grow">
              <div className="flex flex-col items-start gap-3 w-full ">
                <Image src={cardImage} className="border " alt="" />
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