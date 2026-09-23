import Image from "next/image";
import React from "react";
import { Images } from "../../ui/images";

const ResponsiveTrainingSection: React.FC = () => {
  return (
    <section className="py-8 md:pt-16 md:pb-20 px-4 md:px-8">
      <div className="container max-w-8xl mx-auto p-6 md:p-12 bg-design bg-no-repeat bg-cover bg-haiti rounded-3xl relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-white text-lg md:text-3xl font-semibold">
              Works on PCs, Macs, iPads, iPhones, Android Tablets, Android
              Phones, and more
            </h2>
            <p className="text-white opacity-50 mt-2 md:mt-4 text-sm md:text-xl">
              Complete your training online on any device,
              <br />
              anywhere, anytime 24 x 7.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:absolute md:end-4 md:-bottom-16">
            <Image
              src={Images.componentImages.CyberMockupScreens}
              className="w-56 md:w-96"
              alt="Device mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveTrainingSection;
