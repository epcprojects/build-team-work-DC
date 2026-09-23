"use client";
import React from "react";
import { Breadcrumb } from "@/src/app/components/ui";
import { TextEditor } from "@/src/app/components/blog";
import {
  CheckBoxWithLabel,
  CyberButton,
  ButtonType,
  ThemeInput,
  InputType,
} from "@/src/app/components/forms";

const BlogEditPage = () => {
  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 md:px-8">
            <Breadcrumb />
            <h2 className="text-3xl md:text-5xl text-telegraph mb-4 text-white  font-semibold">
              Blog Post
            </h2>

            <p className="text-white text-base md:text-lg">
              Interesting and Relevant Articles on Cyber Safety
            </p>
          </div>
        </div>
      </section>

      <section className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                Title <span className="text-red-700">*</span>
              </label>
              <ThemeInput
                id="title"
                name="title"
                error={false}
                placeholder="Title"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                Author <span className="text-red-700">*</span>
              </label>
              <ThemeInput
                id="author"
                name="Author"
                error={false}
                placeholder="John"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                Keywords
              </label>
              <ThemeInput
                id="keywords"
                name="Keywords"
                error={false}
                placeholder="Keywords"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                SEO URL <span className="text-red-700">*</span>
              </label>
              <ThemeInput
                id="seo_url"
                name="SEO URL"
                error={false}
                placeholder="Enter SEO URL"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                SEO Description
              </label>
              <ThemeInput
                id="seo_description"
                name="SEO Description"
                error={false}
                placeholder="Enter SEO Description"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                SEO Keywords
              </label>
              <ThemeInput
                id="seo_keyword"
                name="SEO Keywords"
                error={false}
                placeholder="Enter SEO Keywords"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                Source Url
              </label>
              <ThemeInput
                id="source_url"
                name="Source Url"
                error={false}
                placeholder="Enter Source Url"
                required
                height="46px"
                // value="test"
                className="border border-gray-300 outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                type={InputType.TEXT}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
              Post Category
            </label>
            <div className="relative flex  md:w-full! flex-col mb-3 md:mb-0 gap-1 text-slate-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute pointer-events-none right-2 top-2 h-6 w-6"
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
                className="w-full appearance-none rounded-md md:rounded-md pe-12 text-[#212529] border border-nebula bg-white  px-4 py-2   focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 "
              >
                <option defaultValue="">In The News</option>
                <option>General Interest</option>
              </select>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
              Post Category
            </label>

            <div className="relative flex w-full  flex-col gap-1">
              <input
                id="fileInput"
                type="file"
                className="w-full overflow-clip cursor-pointer rounded-md border border-nebula  text-sm text-slate-700 file:mr-4 file:cursor-pointer file:border-none file:bg-slate-100 file:px-4 file:py-2.5 file:font-medium file:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 "
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-6">
                <div className="w-full">
                  <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
                    Ranking
                  </label>
                  <input
                    type="number"
                    id="first_name"
                    className="border border-gray-300  outline-none text-gray-900 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/50 block w-full p-2.5 "
                    placeholder="1"
                    required
                    min={1}
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-start items-end">
                <div className="flex items-center mb-1.5">
                  <CheckBoxWithLabel
                    marginBtm="mb-0"
                    checked={false}
                    onChange={() => console.log("f")}
                    label="Featured"
                  ></CheckBoxWithLabel>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
              Blog Post Summary <span className="text-red-700">*</span>
            </label>

            <textarea
              name=""
              className="border border-nebula rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none w-full p-4 resize-none"
              id=""
              rows={8}
            ></textarea>
          </div>

          <div className="col-span-12">
            <label className="block mb-2 text-sm md:text-base font-medium text-gray-800 ">
              Blog Post <span className="text-red-700">*</span>
            </label>

            <TextEditor />
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 mt-4 md:mt-8">
          <CyberButton type={ButtonType.PRIMARY_OUTLINE}>
            <span className="font-semibold">Cancel</span>
          </CyberButton>
          <CyberButton type={ButtonType.PRIMARY}>
            <span className="font-semibold">Submit</span>
          </CyberButton>
        </div>
      </section>
    </>
  );
};

export default BlogEditPage;
