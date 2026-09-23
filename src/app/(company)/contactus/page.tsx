"use client";
import React, { useState } from "react";
import { Breadcrumb } from "@/src/app/components/ui";
import { FaqAccordion } from "@/src/app/components/faq";
import { TrainingList } from "@/src/app/components/training";
import Image from "next/image";
import {
  ThemeInput,
  InputType,
  CyberButton,
  ButtonType,
} from "@/src/app/components/forms";
import { BusinessHours, ContactSection } from "@/src/app/components/contact";
import SupportIcon from "@/public/icons/SupportIcon";
import { useRouter } from "next/navigation";
import { Images } from "@/src/app/ui/images";
const ContactUsPage = () => {
  const router = useRouter();
  const countries = [
    "United States",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
  ];
  const schedule = [
    { day: "Mon", hours: "9:00 AM - 5:00 PM CST" },
    { day: "Tue", hours: "9:00 AM - 5:00 PM CST" },
    { day: "Wed", hours: "9:00 AM - 5:00 PM CST" },
    { day: "Thu", hours: "9:00 AM - 5:00 PM CST" },
    { day: "Fri", hours: "9:00 AM - 5:00 PM CST" },
    { day: "Sat", hours: "Closed" },
    { day: "Sun", hours: "Closed" },
  ];

  const contacts = [
    { label: "General Inquiries", email: "info@buildteamwork.com" },
    { label: "Sales", email: "sales@buildteamwork.com" },
    { label: "Support", email: "support@buildteamwork.com" },
  ];
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <section>
        <div className="bg-bannerContactUs bg-cover py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 md:px-8">
            <Breadcrumb />
            <h2 className="text-3xl md:text-[40px] text-telegraph mb-4 text-white  font-semibold">
              Want to get in touch?
            </h2>

            <p className="text-white text-sm md:text-base">
              We&apos;d love to hear from your. Here&apos;s how you can reach
              us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 ">
        <div className="container max-w-8xl mx-auto px-4 border-b border-platinum md:pb-12 md:px-8">
          <div className="grid grid-cols-12 gap-4 :gap-8">
            <div className="lg:col-span-4 col-span-12">
              <h2 className="font-medium text-xl md:text-2xl text-mirage mb-3 md:mb-6">
                Contact Information
              </h2>

              <div className="border border-platinum mb-8 rounded-xl p-4">
                <h2 className="font-semibold text-primary text-base md:text-xl mb-4">
                  Digital Compliance
                </h2>
                <div className="mb-6">
                  <h2 className="font-medium text-mirage text-sm md:text-lg mb-1">
                    Address
                  </h2>
                  <p className="m-0 text-sm md:text-base text-mirage font-normal">
                    5114 Balcones Woods Dr. <br />
                    Suite 307, #331 <br />
                    Austin, TX 78759
                  </p>
                </div>
                <div>
                  <h2 className="font-medium text-sm md:text-lg text-mirage mb-1">
                    Hours
                  </h2>
                  <table>
                    <BusinessHours data={schedule}></BusinessHours>
                  </table>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="font-semibold text-primary text-lg md:text-xl mb-3">
                  Talk to us
                </h2>

                <a
                  href="tel:+1-512-402-5963"
                  className="mx-2 flex items-center gap-2 underline-0 font-semibold md:text-xl text-mirage"
                >
                  <Image src={Images.contactUsImages.phoneIcon} alt="" />
                  +1 (512) 402-5963
                </a>
              </div>

              <div className="mt-8">
                <h2 className="font-semibold text-primary md:text-xl mb-4">
                  Email Us
                </h2>
                <ContactSection contacts={contacts} />

                <div className="mb-4 mt-8">
                  <CyberButton
                    icon={<SupportIcon />}
                    onClick={() =>
                      router.push(
                        "https://www.msp360.com/file-download.ashx?productAlias=cbraqs",
                      )
                    }
                    type={ButtonType.PRIMARY_OUTLINE}
                    animateIconClasses="w-6"
                  >
                    Remote Support
                  </CyberButton>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <h2 className="font-medium text-xl md:text-2xl text-mirage mb-3 md:mb-6">
                Contact Form
              </h2>

              <div className="border border-platinum mb-8 rounded-xl p-6">
                <form action="">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:mb-2">
                      <ThemeInput
                        id="username"
                        type={InputType.TEXT}
                        name="username"
                        placeholder="Full Name"
                        required
                        onChange={() => console.log("USERNAME")}
                        error={false}
                        showErrorIcon={true}
                        errorMessage="Full Name Required"
                      />
                    </div>

                    <div className="col-span-12 md:mb-2">
                      <label className="block">
                        <div className="relative flex  md:!w-full flex-col mb-3 md:mb-0 gap-1 text-slate-700 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="absolute pointer-events-none right-2 top-2.5 md:top-3 h-6 w-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <select
                            id="os"
                            name="os"
                            required
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="w-full appearance-none rounded-md md:rounded-md  text-[#212529] border border-nebula bg-white  px-4 py-2 md:py-3  focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 "
                          >
                            <option value="">Choose Your Country</option>
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                          {/* <Image
                            alt=""
                            src={Images.contactUsImages.errorIcon}
                            className="w-5 h-5 absolute right-8 top-3 md:top-3.5"
                          /> */}
                        </div>

                        {/* <div className="mt-1 text-sm text-red-500">
                          Required Field
                        </div> */}
                      </label>
                    </div>

                    <div className="col-span-12 md:mb-2">
                      <ThemeInput
                        id="username"
                        type={InputType.EMAIL}
                        name="username"
                        placeholder="Email Address"
                        required
                        onChange={() => console.log("USERNAME")}
                        error={false}
                        showErrorIcon={true}
                        errorMessage="Email Required"
                      />
                    </div>

                    <div className="col-span-12 md:mb-2">
                      <ThemeInput
                        id="telephone"
                        label=""
                        type={InputType.TEXT}
                        name="username"
                        placeholder="Telephone"
                        required
                        onChange={() => console.log("USERNAME")}
                        error={false}
                        showErrorIcon={true}
                        errorMessage="Telephone Required"
                      />
                    </div>

                    <div className="col-span-12 md:mb-2">
                      <ThemeInput
                        id="telephone"
                        label=""
                        type={InputType.TEXT}
                        name="username"
                        placeholder="Subject"
                        required
                        onChange={() => console.log("USERNAME")}
                        error={false}
                        showErrorIcon={true}
                        errorMessage="Subject Required"
                      />
                    </div>

                    <div className="col-span-12 md:mb-2">
                      <label className="block">
                        <div className="relative">
                          <textarea
                            id="name"
                            className={`w-full  p-2 md:p-3 border border-nebula rounded-lg outline-none resize-none border-lg placeholder:text-gray-m-500`}
                            name="name"
                            rows={4}
                            placeholder="Your Question"
                            required
                          ></textarea>

                          {/* <Image
                            src="/images/errorIcon.svg"
                            className="absolute w-5 h-5 top-3 md:top-3.5 end-3"
                            alt=""
                            width={500}
                            height={500}
                          ></Image> */}
                        </div>

                        {/* <div className="mt-1 text-sm text-red-500">
                          Required Field
                        </div> */}
                      </label>
                    </div>

                    <div className="col-span-12 flex justify-end">
                      <CyberButton
                        type={ButtonType.PRIMARY}
                        paddings="py-2 md:py-3.5 px-5 md:px-8"
                      >
                        Send Message
                      </CyberButton>
                    </div>
                  </div>
                </form>
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

export default ContactUsPage;
