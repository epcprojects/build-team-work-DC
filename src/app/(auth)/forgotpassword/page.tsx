"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TrainingList } from "@/src/app/components/training";
import {
  CyberButton,
  ButtonType,
  ThemeInput,
  InputType,
} from "@/src/app/components/forms";

const ForgotPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Please enter a valid email address.")
        .required("Please enter a valid email address."),
    }),
    onSubmit: () => {},
  });

  return (
    <>
      <section className="container max-w-8xl mx-auto py-8 md:py-24 px-4 lg:px-0">
        <div className="grid   justify-items-center">
          <div className="col-span-12">
            <div className="border border-gray-300 bg-alabaster md:p-14 p-4 ">
              <h2 className="text-start font-semibold text-xl md:text-2xl md:mb-2">
                Forgot Your Password?
              </h2>
              <p className="text-gray-800 text-sm md:text-base mb-6">
                Enter your email address to receive your username{" "}
                <br className="hidden md:block" /> and password.
              </p>

              <form onSubmit={formik.handleSubmit} className="space-y-3">
                <ThemeInput
                  id="username"
                  label="Username"
                  type={InputType.TEXT}
                  name="username"
                  placeholder="Enter Your Username"
                  required
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.username && formik.errors.username,
                  )}
                  errorMessage={formik.errors.username}
                />

                <CyberButton
                  type={ButtonType.SECONDARY}
                  htmlType="submit"
                  width="w-full"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </CyberButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-aliceBlue">
        <div className="container max-w-8xl mx-auto px-4 lg:px-0 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl text-black text-telegraph text-center font-semibold mb-6">
            Other Trainings Available
          </h2>

          <TrainingList></TrainingList>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordPage;
