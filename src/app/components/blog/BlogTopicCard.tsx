import Link from "next/link";
import React from "react";

interface BlogTopicCardProps {
  href: string;
  label: string;
  className?: string;
}

const BlogTopicCard: React.FC<BlogTopicCardProps> = ({
  href,
  label,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`bg-white p-4 flex justify-between items-center group rounded-lg mb-2 gap-3 ${className}`}
    >
      <span className="text-gray-600 text-sm md:text-base">{label}</span>
      <div className="group-hover:text-primary">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71673 0.61273C8.04217 0.287293 8.56981 0.287293 8.89525 0.61273L15.8952 7.61273C16.2207 7.93817 16.2207 8.4658 15.8952 8.79124L8.89525 15.7912C8.56981 16.1167 8.04217 16.1167 7.71673 15.7912C7.3913 15.4658 7.3913 14.9382 7.71673 14.6127L13.2941 9.03532H1.30599C0.845752 9.03532 0.472656 8.66222 0.472656 8.20199C0.472656 7.74175 0.845752 7.36865 1.30599 7.36865H13.2941L7.71673 1.79124C7.3913 1.4658 7.3913 0.938167 7.71673 0.61273Z"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default BlogTopicCard;
