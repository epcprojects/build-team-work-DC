"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TrainingList } from "@/src/app/components/training";
import Link from "next/link";
import {
  CheckBoxWithLabel,
  CyberButton,
  ButtonType,
  ThemeInput,
  InputType,
  LanguageToggle,
} from "@/src/app/components/forms";
import Image from "next/image";
import { Images } from "@/src/app/ui/images";

const LoginPage = () => {
  const [selectedLang, setSelectedLang] = useState("English");
  const [isChecked, setIsChecked] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Please enter a valid email address.")
        .required("Please enter a valid email address."),
      password: Yup.string().required("Please enter your password."),
    }),
    onSubmit: () => {},
  });

  return (
    <>
      <section className="container max-w-8xl mx-auto py-8 md:py-24 px-4 lg:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="border border-gray-300 bg-alabaster md:p-10 p-4 relative">
              <Link
                href="/adminlogin"
                className="font-bold text-silkBlue text-lg absolute end-3 top-2"
              >
                Admin
              </Link>
              <div className="grid grid-cols-12 gap-4 md:gap-8">
                <div className="col-span-12 md:col-span-5 flex flex-col gap-2 ">
                  <h2 className="text-start font-semibold text-3xl mb-4 font-poppins">
                    Existing Member Login
                  </h2>

                  <form onSubmit={formik.handleSubmit} className="space-y-2">
                    <ThemeInput
                      id="username"
                      label="Username"
                      name="username"
                      type={InputType.TEXT}
                      placeholder="Enter your email"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={Boolean(
                        formik.touched.username && formik.errors.username,
                      )}
                      errorMessage={formik.errors.username}
                      height="40px"
                    />

                    <ThemeInput
                      id="password"
                      label="Password"
                      type={InputType.PASSWORD}
                      name="password"
                      placeholder="Enter Your Password"
                      required
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={Boolean(
                        formik.touched.password && formik.errors.password,
                      )}
                      errorMessage={formik.errors.password}
                      height="40px"
                    />

                    <LanguageToggle
                      value={selectedLang}
                      onSelect={(lang) => setSelectedLang(lang)}
                      options={["English", "Spanish"]}
                    />

                    <CheckBoxWithLabel
                      label="Remember me on this computer"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />

                    <CyberButton
                      type={ButtonType.SECONDARY}
                      htmlType="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Login
                    </CyberButton>
                  </form>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <div className="md:block hidden">
                    <Image
                      src={Images.LoginPageImages.loginWordCloud}
                      className="w-[90%]"
                      alt=""
                    />
                  </div>

                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8  md:col-start-3 mb-4 text-center">
                      <div className="flex flex-col">
                        <p className="text-base  mb-0 text-start font-bold">
                          Don’t have an account?
                        </p>
                        <a
                          href="/pricing"
                          className="text-silkBlue font-bold text-start"
                        >
                          Sign up now!
                        </a>
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-8  md:col-start-3  text-center">
                      <div className="flex flex-col">
                        <p className="text-base  mb-0 text-start font-bold">
                          Did you forget the passsword?
                        </p>
                        <a
                          href="/forgotpassword"
                          className="text-silkBlue font-bold text-start"
                        >
                          Recover it here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default LoginPage;
