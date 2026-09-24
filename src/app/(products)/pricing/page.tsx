"use client";

import { useRouter } from "next/navigation";
import { CartIcon } from "@/public/icons";
import { FaqAccordion, SingleAccordion } from "@/src/app/components/faq";
import { ThemeButton, ButtonType } from "@/src/app/components/forms";
import { useCart } from "@/src/app/components/cart/useCart";
import {
  FeatureList,
  PricingTable,
  TrainingList,
} from "@/src/app/components/training";
import {
  individualPricingFeatures,
  organizationalPricingFeatures,
  pricingTableData,
} from "@/src/app/data/pricingData";

const PricingPage = () => {
  const router = useRouter();
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: "cyber-safety-individual",
      name: "Cyber Safety for Individuals",
      unitPrice: 29.99,
    });
    openCart();
  };

  return (
    <>
      <section>
        <div className="bg-bannerPricing bg-cover bg-center py-20 md:py-36 px-4 lg:px-0 bg-no-repeat">
          <div>
            <h2 className="text-4xl md:text-7xl text-telegraph mb-3 md:mb-6 text-white text-center font-semibold">
              Pricing plans
            </h2>
            <p className="text-xl md:text-3xl text-white text-opacity-75 text-center">
              Choose the plan that fits your needs.
            </p>
          </div>
        </div>

        <div className="container max-w-8xl mx-auto px-4 pb-8 md:pb-16 md:px-8 mt-4 md:-mt-20">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
            <div className="col-span-12 md:col-span-6">
              <div className="bg-white rounded-2xl border border-[#eaecf0] shadow-lg overflow-hidden ">
                <div className=" pb-4 md:pb-2 border-b border-platinum md:px-6 px-5 md:pt-6 pt-5">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg md:text-xl font-medium">
                      Build Team Work Training for
                      <span className="text-primary font-semibold">
                        {" "}
                        Individuals
                      </span>
                    </h2>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-4xl md:text-6xl font-semibold text-telegraph">
                      $29.99
                    </h2>
                    <p className="text-base font-semibold text-mirage">
                      For a Single Individual
                    </p>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-4 py-2">
                    <ThemeButton
                      fullWidth
                      icon={<CartIcon />}
                      onClick={handleAddToCart}
                      paddings="px-5 py-2 md:py-3"
                    >
                      Add to Cart
                    </ThemeButton>
                    <ThemeButton
                      fullWidth
                      type={ButtonType.PRIMARY_OUTLINE}
                      onClick={() => router.push("/cyber-safety-training")}
                      paddings="px-5 py-2 md:py-3"
                    >
                      Learn more
                    </ThemeButton>
                  </div>
                </div>

                <div className="">
                  <FeatureList
                    title="FEATURES"
                    features={[...individualPricingFeatures]}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="bg-white rounded-2xl border border-[#eaecf0] shadow-lg overflow-hidden">
                <div className="border-b border-platinum p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-base sm:text-lg md:text-xl font-medium">
                      Build Team Work Training for
                      <span className="text-secondary font-bold">
                        {" "}
                        Organizations
                      </span>
                    </h2>

                    <span className="px-3 py-1 text-white md:text-base text-sm font-medium rounded-full bg-prussianBlue">
                      Popular
                    </span>
                  </div>

                  <div className="flex sm:flex-row flex-col sm:items-end md:gap-3 gap-1.5 md:mb-6 mb-3">
                    <h2 className="text-5xl md:text-6xl font-semibold text-telegraph">
                      $29.99
                    </h2>
                    <span className="md:text-base font-medium whitespace-nowrap  text-sm  mb-2 text-gray-400">
                      /person with discounts
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <div className="mb-6">
                    <SingleAccordion
                      addToCart={() => {
                        addItem({
                          id: "cyber-safety-organization",
                          name: "Cyber Safety for Organizations",
                          unitPrice: 29.99,
                        });
                        openCart();
                      }}
                      title={"Get a Custom Quote"}
                    />
                  </div>
                </div>
                <div className="md:mb-6 mb-4">
                  <table className="table w-full shadow">
                    <thead className="bg-gray-50 border-b border-platinum">
                      <tr>
                        <th scope="col" className="w-1/2 text-start p-2">
                          <span className=" text-[#00000080] md:text-base text-xs uppercase ps-2 font-bold">
                            Qty of Training Seats
                          </span>
                        </th>
                        <th scope="col" className="w-1/2 text-start p-2">
                          <span className="text-[#00000080] md:text-base text-xs uppercase font-bold">
                            Pricing Per Seat
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <PricingTable pricingData={[...pricingTableData]} />
                  </table>
                </div>

                <FeatureList
                  title="FEATURES"
                  features={[...organizationalPricingFeatures]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div className="container max-w-8xl mx-auto px-4 md:px-8">
          <h2 className="text-xl md:text-3xl text-black   font-semibold mb-4 md:mb-10">
            Frequently Asked Questions
          </h2>

          <FaqAccordion></FaqAccordion>
        </div>
      </section>

      <section className="bg-aliceBlue">
        <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl text-black text-telegraph text-center font-semibold mb-6">
            Other Trainings Available
          </h2>
          <TrainingList></TrainingList>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
