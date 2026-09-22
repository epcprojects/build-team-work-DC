"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Images } from "../../ui/images";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const labelMap: { [key: string]: string } = {
    "business-essentials": "Products",
    "employee-excellence": "Products",
    "emotional-intelligence": "Products",
    "healthy-body-and-mind": "Products",
    faqs: "FAQs",
    contactus: "Contact Us",
    blogdetail: "Blog Detail",
    blogedit: "Blog Edit",
    privacy: "Privacy policy",
    affiliates: "Affiliate Program",
  };

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label =
      labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

    return { label, href };
  });

  return (
    <nav className="text-gray-700 mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        <li className="flex items-center">
          <Link href="/">
            <span className="text-white hover:text-white flex items-center gap-2">
              <Image alt="home icon" src={Images.componentImages.homeIcon} />
              Home
            </span>
          </Link>
          {pathSegments.length > 0 && (
            <span className="mx-2 text-white">/</span>
          )}
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={item.href}>
              <span
                className={`${
                  index === breadcrumbItems.length - 1
                    ? "text-gray-400" // Last breadcrumb
                    : "text-white hover:text-gray-300" // Non-active breadcrumbs
                }`}
              >
                {item.label}
              </span>
            </Link>
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-white">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
