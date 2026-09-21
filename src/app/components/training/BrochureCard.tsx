import React from "react";
import { useRouter } from "next/navigation";
import CyberButton, { ButtonType } from "../forms/CyberButton";
import  ArrowDownIcon  from "@/public/icons/ArrowDownIcon";
import Image from "next/image";
import { Images } from "../../ui/images";

type ButtonType = "primary" | "secondary";

type BrochureCardProps = {
  title: string;
  filename: string;
  buttonType: ButtonType;
};

const BrochureCard: React.FC<BrochureCardProps> = ({
  title,
  filename,
  buttonType,
}) => {
  const router = useRouter();

  return (
    <div className="flex gap-3 mt-4 items-center">
      <div className="border border-platinum rounded-lg">
        <Image
          src={Images.businessEssentialsImages.book}
          className="w-16 md:w-20 rounded-3 border"
          alt="cyber guide book banner"
        />
      </div>
      <div>
        <h3 className="font-semibold text-sm md:text-lg mb-3">{title}</h3>
        <CyberButton
          onClick={() => router.push(`/assets/${filename}`)}
          type={
            buttonType === "secondary"
              ? ButtonType.SECONDARY_OUTLINE
              : ButtonType.PRIMARY_OUTLINE
          }
          icon={<ArrowDownIcon />}
          paddings="px-4 md:px-5 py-1.5 md:py-2.5"
        >
          <span className="font-medium">Download Brochure</span>
        </CyberButton>
      </div>
    </div>
  );
};

export default BrochureCard;
