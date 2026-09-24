"use client";

import { useRouter } from "next/navigation";
import {
  ThemeButton,
  ButtonType,
  AdministrativeInformationForm,
  PaymentInformationForm,
} from "@/src/app/components/forms";
import { ArrowWithTailIcon } from "@/public/icons";
import { OrderDetailsTable } from "../../components/table";

const PaymentPage = () => {
  const router = useRouter();

  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl text-telegraph mb-3 text-white  font-semibold">
              Payment
            </h2>
            <span className="text-base text-white">
              Payment and Registration
            </span>
          </div>
        </div>
      </section>

      <section className="container max-w-8xl mx-auto pb-12 px-4 md:px-8">
        <OrderDetailsTable />

        <AdministrativeInformationForm />

        <PaymentInformationForm />

        <div className="">
          <ThemeButton
            onClick={() => router.push("/login")}
            icon={<ArrowWithTailIcon />}
            paddings="md:px-6 py-2 px-4 md:py-3 flex-row-reverse gap-3 w-full md:w-fit"
            type={ButtonType.PRIMARY}
            animateIconClasses="duration-700 group-hover:translate-x-2"
          >
            <span className="text-sm md:text-base font-semibold">
              Authorize Payment
            </span>
          </ThemeButton>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
