"use client";

import { Breadcrumb } from "@/src/app/components/ui";
import React from "react";

// Main Tabs Component
const Tabs = () => {
  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover bg-center py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 md:px-8">
            <Breadcrumb />
            <h2 className="text-3xl md:text-5xl text-telegraph text-white  font-semibold">
              Privacy Policy
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-5">
              <h6 className="font-semibold text-xl mb-3">Our Privacy Policy</h6>
              <p className="mb-8 md:text-base text-sm">
                Thank you for visiting our web site. This privacy policy tells you how we use personal information collected at this site. Please read this privacy policy before using the site or submitting any personal information. By using the site, you are accepting the practices described in this privacy policy. These practices may be changed, but any changes will be posted and changes will only apply to activities and information on a going forward, not retroactive basis. You are encouraged to review the privacy policy whenever you visit the site to make sure that you understand how any personal information you provide will be used.
              </p>

              <div className="border rounded-2xl border-primary bg-primary/10 px-4 py-2 flex items-start mt-2  mb-8">
                <div>
                  <h4 className="text-sm my-1 font-semibold text-primary">
                    Note
                  </h4>
                  <p className="font-normal text-sm text-primaryDark mb-1">
                    The privacy practices set forth in this privacy policy are
                    for this website only. If you link to other web sites,
                    please review the privacy policies posted at those sites.
                  </p>
                </div>
              </div>

              <h6 className="font-semibold text-xl mb-3">
                Collection of Information
              </h6>
              <p className="mb-8 md:text-base text-sm">
               We collect personally identifiable information, like names, postal addresses, email addresses, etc., when voluntarily submitted by our visitors. This information is only used to fulfill your specific request, unless you give us permission to use it in another manner, for example to add you to one of our mailing lists.
              </p>

              <h6 className="font-semibold text-xl mb-3">
                Cookie/Tracking Technology
              </h6>
              <p className="mb-8 md:text-base text-sm">
                The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology, however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.
              </p>

              <h6 className="font-semibold text-xl mb-3">
                Distribution of Information
              </h6>
              <p className="mb-8 md:text-base text-sm">
                We may share information with governmental agencies or other companies assisting us in fraud prevention or investigation. We may do so when: (1) permitted or required by law; or, (2) trying to protect against or prevent actual or potential fraud or unauthorized transactions; or, (3) investigating fraud which has already taken place. The information is not provided to these companies for marketing purposes.
              </p>

              <h6 className="font-semibold text-xl mb-3">
                Commitment to Data Security
              </h6>
              <p className="mb-8 md:text-base text-sm">
                Your personally identifiable information is kept secure. Only authorized employees, agents and contractors (who have agreed to keep information secure and confidential) have access to this information. All emails and newsletters from this site allow you to opt out of further mailings.
              </p>

              <h6 className="font-semibold text-xl mb-3">
                Privacy Contact Information
              </h6>
              <p className="mb-8 md:text-base text-sm">
               If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below:
              </p>

              <p>
                <strong>By Email:</strong>
                <a
                  className="text-primary font-semibold"
                  href="mailto:webmaster@cybersafetytraining.com"
                >
                   webmaster@buildteamwork.com
                </a>
              </p>

              <p>
                <strong>By Phone:</strong>
                <a
                  href="tel:+1-512-402-5963"
                  className="mx-1 text-primary font-semibold text-decoration-none"
                >
                  +1-512-402-5963
                </a>
              </p>

              <p className="mb-4">
                We reserve the right to make changes to this policy. Any changes to this policy will be posted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
