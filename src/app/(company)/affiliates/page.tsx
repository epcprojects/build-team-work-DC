"use client";

import Image from "next/image";
import { Breadcrumb } from "@/src/app/components/ui";
import { Images } from "@/src/app/ui/images";
import  SupportIcon  from "@/public/icons/SupportIcon";
import { CyberButton, ButtonType } from "@/src/app/components/forms";
import { useRouter } from "next/navigation";
// Main Tabs Component
const Tabs = () => {
  const router = useRouter();
  return (
    <>
      <section>
        <div className="bg-bannerCloud bg-cover py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 lg:px-0">
            <Breadcrumb />
            <h2 className="text-3xl md:text-5xl text-telegraph text-white  font-semibold">
              Affiliate and Reseller Program
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-8xl mx-auto px-4 lg:px-0 py-8 md:py-16">
          <div className="grid grid-cols-12 items-center justify-center">
            <div className="lg:col-span-8 lg:col-start-3 flex flex-col justify-center items-center gap-4 mb-5 text-center">
              <Image
                src={Images.affiliateImages.affiliate}
                className="rounded-3xl w-full mb-4"
                alt="cyber safety affiliate program"
              />
              <p className="text-center text-xl">
                Please contact us for more information
              </p>

              <CyberButton
                icon={<SupportIcon />}
                onClick={() => router.push("tel:+1-512-402-5963")}
                type={ButtonType.PRIMARY_OUTLINE}
                animateIconClasses="w-6"
                className="w-32 px-6 py-2.5"
              >
                +1-512-402-5963
              </CyberButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
