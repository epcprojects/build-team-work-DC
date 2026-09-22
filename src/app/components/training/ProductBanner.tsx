import React from "react";
import Breadcrumb from "../ui/Breadcrumb";
import Image from "next/image";
import { Images } from "../../ui/images";

type ProductBannerProps = {
  name: string;
  audience: string;
  description: string;
  backgroundClass: string;
};

const ProductBanner: React.FC<ProductBannerProps> = ({
  name,
  audience,
  description,
  backgroundClass,
}) => {
  return (
    <section className="">
      <div className={`${backgroundClass} bg-cover bg-position-[center_20%] py-16 bg-no-repeat`}>
        <div className="container max-w-8xl mx-auto px-4 md:px-8">
          <Breadcrumb />

          <h2 className="text-3xl md:text-5xl antialiased hover:subpixel-antialiased text-telegraph mb-2 text-white font-semibold">
            {name}
          </h2>
          <p className="mb-6 font-normal sm:text-base text-sm text-white ">
            {description}
          </p>

          <p className="text-base text-white flex lg:flex-row gap-2">
            <span className="text-yellow-600 font-semibold flex items-center gap-1">
              <Image
                src={Images.componentImages.audienceIcon}
                alt="Audience Icon"
              />
              Audience:
            </span>
            {audience}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
