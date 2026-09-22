import { BigThumb } from "@/public/icons";
import { CyberButton, ButtonType } from "@/src/app/components/forms";
import { ArrowWithTailIcon, ScrollDownIcon } from "@/public/icons";
import Image from "next/image";
import { Images } from "@/src/app/ui/images";
import { SalesReceiptTable } from "../../components/table";

const PaymentApprovedPage = () => {
  return (
    <>
      <section className="container max-w-8xl mx-auto py-12 md:py-24 px-4 md:px-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="border border-platinum rounded-xl bg-white flex flex-col items-center p-6 md:p-12">
              <BigThumb />
              <h2 className="text-center font-bold text-3xl md:text-[40px] mb-3">
                Congratulations!
              </h2>
              <h6 className="text-center mb-4 font-bold text-lg md:text-xl">
                Your payment has been approved.
              </h6>
              <p className="text-center mb-0 text-sm md:text-base">
                Please note that the charge will show on your credit card from
              </p>
              <p className="text-center text-sm md:text-base">
                <strong className="text-primary"> &quot;Digital Compliance&quot;.</strong>
              </p>
              <p className="text-center mb-0 mt-4 text-sm md:text-base">
                You can download a copy of the sales receipt and instructions
                below.
              </p>
              <p className="text-center mb-4 text-sm md:text-base">
                A copy of the sales receipt and instructions have also been sent
                to your email address.
              </p>

              <CyberButton
                icon={<ArrowWithTailIcon />}
                paddings="px-6 py-3 flex-row-reverse gap-3"
                type={ButtonType.PRIMARY}
                animateIconClasses="duration-700 group-hover:translate-x-2"
              >
                <span className="font-semibold text-sm md:text-base">
                  Continue to Training
                </span>
              </CyberButton>

              <div className="md:m-6 mt-4 flex flex-col md:flex-row items-center gap-4">
                <CyberButton
                  icon={<ScrollDownIcon />}
                  paddings="px-6 py-2 md:py-3 !gap-1 w-full md:w-fit"
                  type={ButtonType.PRIMARY_OUTLINE}
                  animateIconClasses="scrolldown-btn"
                >
                  <span className="text-base font-semibold">
                    Download Receipt
                  </span>
                </CyberButton>
                <CyberButton
                  icon={<ScrollDownIcon />}
                  paddings="px-6 py-2 md:py-3 !gap-1 w-full md:w-fit"
                  type={ButtonType.PRIMARY_OUTLINE}
                  animateIconClasses="scrolldown-btn"
                >
                  <span className="text-base font-semibold">
                    Download Instructions
                  </span>
                </CyberButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-8xl mx-auto mb-24 px-4 md:px-8">
        <div className="grid grid-cols-12 mb-5 justify-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="border border-platinum rounded-xl overflow-hidden bg-white">
              <h5 className=" text-sm md:text-xl font-medium bg-mirage/5 text-gray-900 border-b border-platinum py-2 md:py-3 px-4 md:px-6">
                Sales Receipt
              </h5>

              <div className="px-4 pt-4 md:pt-6 md:px-6">
                <div className="grid grid-cols-12 mb-5 text-sm">
                  <div className="col-span-12">
                    <Image
                      src={Images.paymentImages.DigitalCompliance}
                      className="mb-4 md:w-auto w-40"
                      alt="digital complience logo"
                    />
                  </div>

                  <div className="col-span-8 text-xs md:text-base">
                    Digital Compliance <br />
                    5114 Balcones Woods Dr.
                    <br />
                    Suite 307, #331
                    <br />
                    Austin, TX 78759
                    <br />
                    <strong>Tel</strong>: (+1) 512-402-5963
                    <br />
                    <strong>Email</strong>: sales@digitalcompliance.com
                  </div>
                  <div className="col-span-4 text-xs md:text-base">
                    <p>
                      <strong>Receipt:</strong> 120062150296
                      <br />
                      <strong>Date:</strong>
                      April 28, 2025
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 mb-5 gap-2 md:gap-4">
                  <div className="col-span-8 text-xs md:text-sm">
                    <h5 className="">
                      <strong>To:</strong>
                    </h5>
                    <p>
                      test 100 Isb Islamabad, islamabad 44400 Pakistan
                      <br />
                      <strong>Tel</strong>: 03123443213
                      <br />
                      <strong>Email</strong>: admin@example.com
                    </p>
                  </div>
                  <div className="text-xs md:text-base col-span-4">
                    <h5 className="">
                      <strong>For:</strong>
                    </h5>
                    <p>Cyber Safety</p>
                    <br />
                    <h5 className="">
                      <strong>Paid By:</strong>
                    </h5>
                    <p>VISA xxxx1111</p>
                  </div>
                </div>

                <div className="grid grid-cols-12 text-sm">
                  <div className="col-span-12">
                    <h5 className="font-semibold mb-1 md:mb-2 md:text-sm">
                      Products & Services
                    </h5>
                  </div>
                </div>
              </div>

             <SalesReceiptTable/>
              <div className="bg-mirage/5 text-sm md:text-base border-t border-platinum text-gray-700 py-3 px-6">
                Thank you for your business!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentApprovedPage;
