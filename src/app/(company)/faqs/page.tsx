"use client";

import { useState } from "react";
import { Breadcrumb } from "@/src/app/components/ui";
import { SingleAccordion } from "@/src/app/components/faq";
import Image from "next/image";
import { Images } from "@/src/app/ui/images";

// Individual Tab Content Components
const GeneralTab = () => (
  <div className="tabs-content-inner">
    <h2 className="font-semibold text-primary text-xl md:text-3xl mb-3 md:mb-5">
      General
    </h2>

    <div className="border-b border-platinum mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl  mb-2">
        What is Build Team Work?
      </h2>
      <p className="m-0 text-black md:text-base text-sm opacity-75">
        The Build Team Work series offers a collection of 4 video series that
        help organizations achieve excellence simply and effectively:
      </p>
      <ul className="list-disc pl-8 space-y-2 mt-4">
        <li>
          The <strong>Business Essentials Series</strong> is a collection of
          short HR training films that address the core and essential training
          required by all employees.
        </li>
        <li>
          The <strong>Employee Excellence Series</strong> is a collection of
          powerful HR training films designed to help organizations achieve
          excellence in their interactions with external-facing customers.
        </li>
        <li>
          The <strong>Emotional Intelligence Series</strong> is a collection of
          thought provoking HR training films designed to help organizations
          achieve excellence in their internal interactions and build cohesive
          teams.
        </li>
        <li>
          The <strong>Healthy Body and Mind Series</strong> is a collection of
          powerful HR training films focused on employee wellness and ensuring
          no one is left behind
        </li>
      </ul>
    </div>
    <div className="border-b border-platinum mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl  mb-2">
        Who is Build Team Work training made for?
      </h2>
      <p className="m-0 text-black opacity-75 md:text-base text-sm">
        Everyone.
      </p>
    </div>
    <div className="border-b border-platinum mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl ">
        What do I need to take the training?
      </h2>
      <p className="m-0 text-black opacity-75 md:text-base text-sm">
        All you need is a computer with an internet connection and web browser.
      </p>
    </div>
    <div className="border-b border-platinum mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl  mb-2">
        Do I have to do the training in one sitting?
      </h2>
      <p className="m-0 text-black opacity-75 md:text-base text-sm">
        No you can take the training at your own pace and in multiple sessions.
        You do want to set aside 15 minutes when it is time to take the final
        exam however so that you can have maximum concentration.
      </p>
    </div>
    <div className="border-b border-platinum mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl  mb-2">
        If I don&apos;t pass the final exam, can I take the test again? And is
        there a charge for taking the final exam again?
      </h2>
      <p className="m-0 text-black opacity-75 md:text-base text-sm">
        You can take the final exam as many times as you need to pass. This
        course is mainly about comprehension. There is no charge for taking the
        final exam multiple times. You can also take the exam again to try and
        get a higher score if you so desire.
      </p>
    </div>
    <div className="border-b border-platinum mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl mb-2">
        Can I have multiple people view the training?
      </h2>
      <p className="m-0 text-black opacity-75 md:text-base text-sm">
        No. Only if you have purchased organizational training. Our individual
        training is licensed to a single individual only.
      </p>
    </div>
    <div className=" mb-6 pb-6">
      <h2 className="font-semibold text-base md:text-xl  mb-2">
        Can I take the training immediately after signing up?
      </h2>
      <p className="m-0 text-black opacity-75 md:text-base text-sm">
        Yes. You create a username and password as part of the sign up process,
        so you can use that username/password immediately after payment to login
        and start your training.
      </p>
    </div>
  </div>
);

const CertificateTab = () => (
  <>
    <div className="tabs-content-inner">
      <h2 className="font-semibold text-primary text-xl md:text-3xl mb-5">
        Certificate
      </h2>

      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          How and when will I receive my certificate of completion?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          After successfully completing the final exam, you will be asked to
          enter your name on the certificate and it will generate an adobe
          acrobat PDF certificate and wallet card for you along with transcript
          scores immediately online.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          What format is the certificate and how can I view and print it?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Your certificate of completion is an adobe acrobat PDF file. All you
          need to view and print the certificate is the free adobe acrobat
          reader. If you don&apos;t have the adobe reader software installed on
          your computer, you can download it free from adobe&apos;s website at:
        </p>

        <a
          target="_blank"
          className="text-primary font-semibold my-4 underline underline-offset-3 block"
          href="https://get.adobe.com/reader"
        >
          Click Here to Download Adobe Reader
        </a>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl">
          How long is the certificate good for?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          3 years.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          What does your certificate look like?
        </h2>
        <Image
          src={Images.faqsImages.BusinessEssentialsCertificate}
          className="mt-4 img-fluid"
          alt="logo"
        />
      </div>
      <div className=" mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          Can I put my company name on the certificate?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Yes you can enter your desired company name on the registration page
          and it will put your company on every certificate generated. It is an
          optional setting so if you don’t want a company name on the
          certificate then just leave that blank.
        </p>
      </div>
    </div>
  </>
);

const PricingTab = () => (
  <>
    <div className="tabs-content-inner">
      <h2 className="font-semibold text-primary text-xl md:text-3xl mb-5">
        Pricing
      </h2>

      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          What is the cost of individual training?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          $29.99 per course.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          Do you offer organizational training and group discounts?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          We offer an organizational training option for training multiple
          individuals (see next section) and also group discounts starting at 10
          seats and above. To signup for an organizational account, simply add
          the desired number of seats to your shopping cart and then checkout.
          The account will then be enabled for that number of licenses. If you
          need to add licenses in the future, you can do so using the{" "}
          <strong>Add More Licenses</strong> link when you login to your admin
          dashboard.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl">
          Do you offer volume discounts?
        </h2>
        <p className="my-4 text-black opacity-75">
          Yes we do. Your pricing is based on the initial number of seats you
          purchase:
        </p>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <SingleAccordion title={"Get a Custom Quote"} btnRequired={false} />
          </div>

          <div className="col-span-12 md:col-start-1 md:col-span-6">
            <table className="table w-full shadow">
              <thead className="bg-blueChalk">
                <tr>
                  <th scope="col" className="w-1/2 text-start py-2">
                    <span className=" text-black uppercase text-xs ps-2 font-semibold">
                      Qty of Training Seats
                    </span>
                  </th>
                  <th scope="col" className="w-1/2 text-start py-2">
                    <span className="font-semibold text-xs text-black uppercase">
                      Pricing Per Seat
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  text-start">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">1 - 9</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$29.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">10-24</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$24.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">25 - 49</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$23.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">50 - 99</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$22.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">100 - 200</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$19.99</span>
                  </th>
                </tr>

                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">200+</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <button
                      type="button"
                      className=" font-semibold text-sm text-primary"
                    >
                      See Custom Quote above
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          If I purchase seats after my intial purchase do I still get a volume
          discount?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Your future pricing is based on your intial purchase. So if you bought
          25 seats, your pricing would be $23.99 for those 25 seats and also for
          any future seats you purchased.
        </p>
      </div>
    </div>
  </>
);

const OrganizationalTrainingTab = () => (
  <>
    <div className="tabs-content-inner">
      <h2 className="font-semibold text-primary text-xl md:text-3xl mb-5">
        Group Training
      </h2>

      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          Do you offer training that an organization can use to train its
          employees?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Yes we do.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          Who is the organizational training for?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Organizational training is for employers/groups that need to train
          their employees. It provides a single shared login that all employees
          can login to as well as potential group pricing discounts.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          How does organizational training work?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Our organizational training option includes a shared multi-user
          account setup. It involves zero administration as it does not require
          you to setup user names and passwords. Once your account is setup,
          everyone logs in using the same username/password. They take the
          training and once they are complete, each individual takes the final
          exam. On successfully passing the final exam, each individual enters
          their name on their certificate and gets a generated pdf certificate
          immediately for them to save or print off. A copy of that certificate
          with transcript scores are automatically emailed to the
          administrator&apos;s email address on the account. So all you have to
          do is give everyone the username/password, let them take the training,
          and sit back and get an email copy as everyone finishes the training.
          It couldn&apos;t be easier.
        </p>
      </div>
      <div className=" mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl">
          Do you offer volume discounts?
        </h2>
        <p className="my-4 text-black opacity-75">
          Yes we do. Your pricing is based on the initial number of seats you
          purchase:
        </p>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-8">
            <SingleAccordion title={"Get a Custom Quote"} btnRequired={false} />
          </div>

          <div className="col-span-12 md:col-start-1 md:col-span-6">
            <table className="table w-full shadow">
              <thead className="bg-blueChalk">
                <tr>
                  <th scope="col" className="w-1/2 text-start py-2">
                    <span className=" text-black uppercase text-xs ps-2 font-semibold">
                      Qty of Training Seats
                    </span>
                  </th>
                  <th scope="col" className="w-1/2 text-start py-2">
                    <span className="font-semibold text-xs text-black uppercase">
                      Pricing Per Seat
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  text-start">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">1 - 9</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$29.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">10-24</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$24.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">25 - 49</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$23.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">50 - 99</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$22.99</span>
                  </th>
                </tr>
                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">100 - 200</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold text-secondary">$19.99</span>
                  </th>
                </tr>

                <tr className="border-b">
                  <th scope="col" className="text-start py-2">
                    <span className="font-semibold p-3">200+</span>
                  </th>
                  <th scope="col" className="text-start py-2">
                    <button
                      type="button"
                      className=" font-semibold text-sm text-primary"
                    >
                      See Custom Quote above
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          If I purchase seats after my intial purchase do I still get a volume
          discount?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          Your future pricing is based on your intial purchase. So if you bought 25 seats, your pricing would be $23.99 for those 25 seats and also for any future seats you purchased.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          How do I sign up for the organizational training option? I don&apos;t
          see a signup on your site.
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          To signup for an organizational account, simply add the desired number
          of seats to your shopping cart and then checkout. The account will
          then be enabled for that number of licenses. If you need to add
          licenses in the future, you can do so using the{" "}
          <strong>Add More Licenses</strong> link when you login to your admin
          dashboard.
        </p>
      </div>
      <div className="border-b border-platinum mb-6 pb-6">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          Is there any charge for keeping the training account active?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          No we only charge on a pay per use basis. If you do not use it, you do
          not pay anything.
        </p>
      </div>

      <div className="">
        <h2 className="font-semibold text-base md:text-xl  mb-2">
          How do you handle billing beyond the initial seats purchased?
        </h2>
        <p className="m-0 text-black md:text-base text-sm opacity-75">
          If you need to add licenses in the future, you can do so using the <strong>Add More Licenses</strong> link when you login to your admin dashboard.
        </p>
      </div>
    </div>
  </>
);

// Main Tabs Component
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("General");

  // Tab names
  const tabs = ["General", "Certificate", "Pricing", "Organizational Training"];

  // Render active tab content based on state
  const renderTabContent = () => {
    switch (activeTab) {
      case "General":
        return <GeneralTab />;
      case "Certificate":
        return <CertificateTab />;
      case "Pricing":
        return <PricingTab />;
      case "Organizational Training":
        return <OrganizationalTrainingTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <section>
        <div className="bg-bannerCloud bg-cover bg-center py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 lg:px-0">
            <Breadcrumb />
            <h2 className="text-3xl md:text-5xl text-telegraph text-white  font-semibold">
              FAQs
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-8xl mx-auto px-4 lg:px-0 py-8 md:py-16">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
              <div className=" p-4 border border-platinum rounded-lg bg-[#f9fafb]">
                <h3 className="font-semibold text-base mb-4 uppercase">
                  Topics
                </h3>

                <ul className="">
                  {tabs.map((tab) => (
                    <li key={tab}>
                      <button
                        className={`block w-full text-left py-1.5  rounded-md test-base cursor-pointer ${
                          activeTab === tab
                            ? "text-primary font-semibold"
                            : "text-mistBlue hover:text-black"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                  <li className="mt-4">
                    <button className=" bg-primary text-start hover:bg-primaryDark text-white px-4 py-2 rounded-md">
                      Got a question? <br></br>Contact us.
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
