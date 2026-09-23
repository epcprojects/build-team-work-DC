import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../../ui/images";

type BlogCardProps = {
  title: string;
  image: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  link: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  category,
  excerpt,
  author,
  date,
  link,
  onEdit,
  onDelete,
}) => {
  return (
    <Link href={link}>
      <div className="p-3 md:p-6 group">
        <div
          className="mb-4 bg-cover bg-no-repeat rounded-lg h-60"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <span className="text-gray-400 gap-1 mb-4 flex line-clamp-1 font-normal text-xs">
          Posted on:
          <span className="font-semibold text-gray-800 text-xs">
            {category}
          </span>
        </span>

        <div className="flex items-center gap-2 mb-4">
          <h3 className="font-semibold text-xl line-clamp-2 text-black">{title}</h3>
          <svg
            width="24"
            height="24"
            className="shrink-0 group-hover:rotate-45 duration-500 group-hover:text-primary"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33334 17L17.3333 7M17.3333 7H7.33334M17.3333 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="md:h-28 overflow-hidden">
          <p className="text-[#4b5563] line-clamp-4 mb-6 text-base overflow-hidden">
            {excerpt}
          </p>
        </div>

        <div className="gap-2 flex items-center justify-around w-full">
          <div>
            <Image
              src={Images.blogImages.blogAuthorDefault}
              className="rounded-full border w-10"
              alt="Author Avatar"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="block text-sm text-gray-900 font-semibold">
                {author}
              </span>
              <span className="block text-sm text-gray-600">{date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {onEdit && (
                <button
                  className="hover:bg-primary/15 p-1.5 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    onEdit();
                  }}
                >
                  <Image
                    src={Images.blogImages.editIcon}
                    className="w-5 h-5"
                    alt="edit icon"
                  />
                </button>
              )}
              {onDelete && (
                <button
                  className="hover:bg-primary/15 p-1.5 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete();
                  }}
                >
                  <Image
                    src={Images.blogImages.deleteIcon}
                    className="w-5 h-5"
                    alt="edit icon"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
