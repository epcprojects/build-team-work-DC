"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Breadcrumb } from "@/src/app/components/ui";
import { Modal } from "@/src/app/components/overlays";
import { ThemeButton, ButtonType } from "@/src/app/components/forms";
import { CopyIcon } from "@/public/icons";
import { KeywordPill, BlogTopicCard } from "@/src/app/components/blog";
import { useCart } from "@/src/app/components/cart/useCart";
import { Images } from "@/src/app/ui/images";

const BlogDetailPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openCart } = useCart();

  const tags = [
    "cyber safety",
    "cyber security",
    "cyber safety training",
    "cyber security training",
    "cyber attack",
    "hospitals",
  ];

  const blogTopics = ["In the News", "General Interest"];
  const otherBlogPosts = [
    "What Is Whaling",
    "What Is Vishing?",
    "What Is Tailgating?",
    "What Is Spoofing?",
    "What Is Spear-Phishing?",
  ];

  return (
    <>
      <section>
        <div className="bg-bannerWithCloud bg-cover py-8 md:py-16 bg-no-repeat">
          <div className="container max-w-8xl mx-auto px-4 md:px-8">
            <Breadcrumb />
            <h2 className="text-3xl md:text-5xl text-telegraph mb-4 text-white font-semibold">
              Blog Post
            </h2>
            <p className="text-white text-base md:text-lg">
              Interesting and Relevant Articles on Cyber Safety
            </p>
          </div>
        </div>
      </section>

      <section className="container max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <ol className="list-reset flex flex-wrap mb-6">
          <li className="flex items-center">
            <Link href="/blog">
              <span className="text-primary hover:text-primaryDark font-medium">
                Blog
              </span>
            </Link>
            <span className="mx-2 text-gray-900">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/blog">
              <span className="text-primary hover:text-primaryDark font-medium">
                In The News
              </span>
            </Link>
            <span className="mx-2 text-gray-900">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 font-medium">
              Hospital computer system in Texas hit by cyberattack
            </span>
          </li>
        </ol>

        <h1 className="text-gray-900 font-semibold lg:mb-6 text-xl md:text-4xl mb-3">
          Hospital computer system in Texas hit by cyberattack
        </h1>

        <div className="flex md:flex-row flex-col justify-between mb-4">
          <div className="flex gap-12 lg:mb-0 mb-3">
            <div>
              <span className="text-sm text-gray-600 block">Written by</span>
              <span className="block text-gray-900 font-semibold">
                Tara Suter, The Hill
              </span>
            </div>
            <div>
              <span className="text-sm text-gray-600 block">Posted On</span>
              <span className="block text-gray-900 font-semibold">
                August 08, 2023
              </span>
            </div>
          </div>
          <ThemeButton
            icon={<CopyIcon />}
            paddings="py-1.5 md:py-2 px-3 md:px-4"
            type={ButtonType.PRIMARY_OUTLINE}
          >
            <span className="font-semibold">Copy Link</span>
          </ThemeButton>
        </div>

        <div className="flex items-center gap-6 mb-4 md:mb-12">
          <ThemeButton
            onClick={() => router.push("/blog/blogedit")}
            paddings="px-5 md:px-8 py-1.5 md:py-2.5"
            type={ButtonType.PRIMARY}
          >
            <span className="font-semibold">Add Post</span>
          </ThemeButton>

          <div className="flex items-center gap-1.5">
            <button
              onClick={openCart}
              className="hover:bg-primary/15 p-1.5 rounded-full"
            >
              <Image
                src={Images.blogImages.editIcon}
                className="md:w-5 w-4 h-4 md:h-5"
                alt="edit icon"
              />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:bg-primary/15 p-1.5 rounded-full"
            >
              <Image
                src={Images.blogImages.deleteIcon}
                className="md:w-5 h-4 w-4 md:h-5"
                alt="delete icon"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 lg:col-span-8">
            <img
              src="/images/blogPageImages/1.jpg"
              className="rounded-2xl mb-6"
              alt=""
            />
            <p className="text-sm md:text-base text-gray-700 mb-3">
              Hospitals and clinics in five states faced disruptions after a
              cyberattack that forced some emergency rooms to close.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-3">
              The affected facilities began temporary manual workflows while
              recovery efforts continued.
            </p>

            <div className="mb-4">
              <h3 className="text-gray-900 text-xl font-semibold mb-3">
                Source:
              </h3>
              <a
                href="https://www.kxan.com/news/texas-hospital-computer-system-hit-by-cyberattack/"
                className="text-sm md:text-base text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                https://www.kxan.com/news/texas-hospital-computer-system-hit-by-cyberattack/
              </a>
            </div>

            <div>
              <h3 className="text-gray-900 text-xl font-semibold mb-3">
                Keywords:
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <KeywordPill key={tag} text={tag} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-2xl bg-gray-m-100 p-4 md:p-6 mb-3 md:mb-6">
              <h5 className="text-gray-900 text-lg md:text-2xl font-semibold mb-3">
                Blog Topics
              </h5>
              {blogTopics.map((topic) => (
                <BlogTopicCard
                  key={topic}
                  href="/blog?category=1"
                  label={topic}
                />
              ))}
            </div>

            <div className="rounded-2xl bg-gray-m-100 p-4 md:p-6 mb-3 md:mb-6">
              <h5 className="text-gray-900 text-lg md:text-2xl font-semibold mb-3">
                Other Posts
              </h5>
              {otherBlogPosts.map((post) => (
                <BlogTopicCard
                  key={post}
                  href="/blog?category=1"
                  label={post}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        closeOnOutsideClick={true}
        onClose={() => setIsModalOpen(false)}
        showCloseButton={true}
      >
        <div className="flex flex-col justify-center items-center py-8">
          <Image
            src={Images.blogImages.deleteIcon}
            className="w-16"
            alt="delete icon"
          />
          <h1 className="text-sm md:text-xl font-semibold mt-4">
            Delete this Post!
          </h1>
          <p className="mb-4 md:text-base text-sm">
            Are you sure you want to delete this post?
          </p>
          <div className="flex gap-4 items-center">
            <ThemeButton
              onClick={() => setIsModalOpen(false)}
              type={ButtonType.GRAY}
              paddings="py-2 px-4"
            >
              Yes, Delete
            </ThemeButton>
            <ThemeButton
              onClick={() => setIsModalOpen(false)}
              type={ButtonType.PRIMARY}
              paddings="py-2 px-4"
            >
              Not Now
            </ThemeButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BlogDetailPage;
