"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BlogCard } from "@/src/app/components/blog";
import {
  ThemeButton,
  ButtonType,
  ThemeSearchInput,
  ThemeSelect,
} from "@/src/app/components/forms";
import { Breadcrumb } from "@/src/app/components/ui";
import {
  blogCategoryOptions,
  blogOrderOptions,
  blogPosts,
} from "@/src/app/data/blogData";

const BlogPage = () => {
  const router = useRouter();
  const [order, setOrder] = useState("newest");
  const [category, setCategory] = useState("newest");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover py-8 md:py-16  bg-no-repeat">
          <div className="container max-w-8xl mx-auto md:px-8 px-4">
            <Breadcrumb />
            <h2 className="text-3xl md:text-5xl text-telegraph mb-4 text-white  font-semibold">
              Blog
            </h2>

            <p className="text-white text-base md:text-lg">
              Interesting and Relevant Articles on Cyber Safety
            </p>
          </div>
        </div>
      </section>

      <section className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex items-center gap-4 justify-between flex-col md:flex-row mb-8">
          <div className="md:w-auto w-full">
            <ThemeSearchInput
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onSubmit={handleSubmit}
              placeholder="Search for articles, tags..."
            />
          </div>

          <div className="flex items-center md:w-auto w-full flex-col md:flex-row md:gap-4">
            <ThemeSelect
              label=" Category:"
              options={[...blogCategoryOptions]}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=" category"
            />

            <ThemeSelect
              label="Order:"
              options={[...blogOrderOptions]}
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              name="order"
            />

            <div className="flex w-full flex-col">
              <label htmlFor="" className="text-gray-400 invisible">
                New Post
              </label>
              <ThemeButton
                fullWidth
                type={ButtonType.PRIMARY}
                paddings="px-5 py-2"
                onClick={() => router.push("/blog/blogedit")}
              >
                Add New Post
              </ThemeButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-8 md:gap-6">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4  group items-stretch flex bg-white shadow rounded-md"
            >
              <BlogCard
                title={blog.title}
                image={blog.image}
                category={blog.category}
                excerpt={blog.excerpt}
                author={blog.author}
                date={blog.date}
                link={blog.link}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
