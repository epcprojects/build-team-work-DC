import Image from "next/image";
import React from "react";
import { Images } from "../../ui/images";

type CardItem = {
  icon: string;
  text: string;
};

const cardData: CardItem[] = [
  { icon: "images/homepageimages/icon01.svg", text: "Raving support" },
  {
    icon: "images/homepageimages/icon02.svg",
    text: "Training that is user friendly and easy to understand",
  },
  { icon: "images/homepageimages/icon03.svg", text: "Nationally recognized certificate" },
  {
    icon: "images/homepageimages/icon04.svg",
    text: "Individual & organizational training available",
  },
  { icon: "images/homepageimages/icon05.svg", text: "Spanish version included at no charge" },
  { icon: "images/homepageimages/icon06.svg", text: "Cumulative group discounts available" },
  {
    icon: "images/homepageimages/icon07.svg",
    text: "We offer phone support and not just email",
  },
  {
    icon: "images/homepageimages/icon08.svg",
    text: "Unique zero administration system for groups",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <h2 className="text-3xl md:text-5xl text-black text-telegraph text-center font-semibold mb-2 md:mb-6">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-12 grap-4 md:gap-12">
          <div className="col-span-12 md:col-span-6">
            <Image
              src={Images.componentImages.whyChooseUs}
              className="rounded-3xl mb-4 w-full"
              alt="Why Choose Us"
            />
            <p className="text-base md:text-lg text-gray-800 mb-4">
              We are the leader in user friendly cyber safety training and
              compliance and our mission is to make cyber safety compliance
              fast, easy, and painless. We&apos;ve done all the hard work so you
              don&apos;t have to.
            </p>
            <p className="text-base md:text-lg text-gray-800 mb-4">
              We hope you&apos;ll give us a try and in return we promise exceptional
              training and compliance products at an affordable price and to
              treat each of our customers with the utmost care and raving
              support.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 grid items-stretch"
                >
                  <div className="p-4 rounded-xl cursor-pointer hover:scale-105 duration-300 hover:bg-gray-50 shadow-sm border">
                    <img src={item.icon} className="mb-4" alt="" />
                    <h2 className="text-gray-800 font-normal">{item.text}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
