// // import React from "react";

// // // Button type definitions
// // export const ButtonType = {
// //   PRIMARY: "primary",
// //   SECONDARY: "secondary",
// //   PRIMARY_OUTLINE: "primary_outline",
// //   SECONDARY_OUTLINE: "secondary_outline",
// //   GRAY: "gray",
// // };

// // interface ButtonProps {
// //   children: React.ReactNode;
// //   type?: string;
// //   htmlType?: "button" | "submit" | "reset";
// //   onClick?: () => void;
// //   className?: string;
// //   disabled?: boolean;
// //   fullWidth?: boolean;
// //   width?: string;
// //   paddings?: string;
// //   icon?: React.ReactNode;
// //   animateIconClasses?: string;
// // }

// // const ThemeButton: React.FC<ButtonProps> = ({
// //   children,
// //   type = ButtonType.PRIMARY,
// //   htmlType = "button",
// //   onClick,
// //   className = "",
// //   disabled = false,
// //   fullWidth = false,
// //   width,
// //   paddings,
// //   icon,
// //   animateIconClasses,
// // }) => {
// //   const baseClasses =
// //     "font-normal rounded-lg group border transition-colors flex justify-center items-center gap-2";

// //   const widthClasses = fullWidth ? "w-full" : width ? width : "w-fit";

// //   const paddingClasses = paddings ? paddings : "px-10 py-2";

// //   const animateClasses = animateIconClasses ? animateIconClasses : "";

// //   let typeClasses = "";

// //   switch (type) {
// //     case ButtonType.PRIMARY:
// //       typeClasses =
// //         "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark text-white";
// //       break;
// //     case ButtonType.SECONDARY:
// //       typeClasses =
// //         "bg-secondary hover:bg-secondaryDark border-secondary hover:border-secondaryDark text-white";
// //       break;
// //     case ButtonType.PRIMARY_OUTLINE:
// //       typeClasses =
// //         "bg-transparent hover:bg-primaryDark hover:text-white border-primary hover:border-primaryDark text-primary";
// //       break;
// //     case ButtonType.SECONDARY_OUTLINE:
// //       typeClasses =
// //         "bg-transparent hover:bg-secondaryDark hover:text-white border-secondary hover:border-secondaryDark text-secondary";
// //       break;
// //     case ButtonType.GRAY:
// //       typeClasses =
// //         "bg-gray-50 hover:bg-gray-200 duration-300 text-sm md:text-base rounded-md border-none";
// //       break;
// //     default:
// //       typeClasses =
// //         "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark gap-2 text-white";
// //   }

// //   const disabledClasses = disabled
// //     ? "opacity-50 cursor-not-allowed"
// //     : "cursor-pointer";

// //   return (
// //     <button
// //       type={htmlType}
// //       className={`${baseClasses} ${widthClasses} ${typeClasses} ${disabledClasses} ${className} ${paddingClasses}`}
// //       onClick={onClick}
// //       disabled={disabled}
// //     >
// //       {icon && <span className={`block ${animateClasses}`}>{icon}</span>}
// //       {children}
// //     </button>
// //   );
// // };

// // export default ThemeButton;


// import React from "react";

// // Button type definitions
// export const ButtonType = {
//   PRIMARY: "primary",
//   SECONDARY: "secondary",
//   PRIMARY_OUTLINE: "primary_outline",
//   SECONDARY_OUTLINE: "secondary_outline",
//   GRAY: "gray",
// };

// interface ButtonProps {
//   children: React.ReactNode;
//   type?: string;
//   htmlType?: "button" | "submit" | "reset";
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
//   fullWidth?: boolean;
//   width?: string;
//   paddings?: string;
//   icon?: React.ReactNode;
//   dropdown?: boolean; 
//   animateIconClasses?: string;
// }

// const ThemeButton: React.FC<ButtonProps> = ({
//   children,
//   type = ButtonType.PRIMARY,
//   htmlType = "button",
//   onClick,
//   className = "",
//   disabled = false,
//   fullWidth = false,
//   width,
//   paddings,
//   icon,
//    dropdown = false, 
//   animateIconClasses,
// }) => {
//   const baseClasses =
//     "font-normal rounded-lg group border transition-colors flex justify-center items-center gap-2";

//   const widthClasses = fullWidth ? "w-full" : width ? width : "w-fit";

//   const paddingClasses = paddings ? paddings : "px-10 py-2";

//   const animateClasses = animateIconClasses ? animateIconClasses : "";

//   const dropdownClasses = dropdown ? "theme-button-dropdown" : "";

//   let typeClasses = "";

//   switch (type) {
//     case ButtonType.PRIMARY:
//       typeClasses =
//         "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark text-white";
//       break;
//     case ButtonType.SECONDARY:
//       typeClasses =
//         "bg-secondary hover:bg-secondaryDark border-secondary hover:border-secondaryDark text-white";
//       break;
//     case ButtonType.PRIMARY_OUTLINE:
//       typeClasses =
//         "bg-transparent hover:bg-primaryDark hover:text-white border-primary hover:border-primaryDark text-primary";
//       break;
//     case ButtonType.SECONDARY_OUTLINE:
//       typeClasses =
//         "bg-transparent hover:bg-secondaryDark hover:text-white border-secondary hover:border-secondaryDark text-secondary";
//       break;
//     case ButtonType.GRAY:
//       typeClasses =
//         "bg-gray-50 hover:bg-gray-200 duration-300 text-sm md:text-base rounded-md border-none";
//       break;
//     default:
//       typeClasses =
//         "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark gap-2 text-white";
//   }

//   const disabledClasses = disabled
//     ? "opacity-50 cursor-not-allowed"
//     : "cursor-pointer";

//   return (
//     <button
//       type={htmlType}
//       className={`${baseClasses} ${widthClasses} ${typeClasses} ${disabledClasses} ${className} ${paddingClasses} ${dropdownClasses}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {icon && <span className={`block ${animateClasses}`}>{icon}</span>}
//       {children}
       
//     </button>
//   );
// };

// export default ThemeButton;

// import React from "react";

// // Button type definitions
// export const ButtonType = {
//   PRIMARY: "primary",
//   SECONDARY: "secondary",
//   PRIMARY_OUTLINE: "primary_outline",
//   SECONDARY_OUTLINE: "secondary_outline",
//   GRAY: "gray",
// };

// interface ButtonProps {
//   children: React.ReactNode;
//   type?: string;
//   htmlType?: "button" | "submit" | "reset";
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
//   fullWidth?: boolean;
//   width?: string;
//   paddings?: string;
//   icon?: React.ReactNode;
//   animateIconClasses?: string;
// }

// const ThemeButton: React.FC<ButtonProps> = ({
//   children,
//   type = ButtonType.PRIMARY,
//   htmlType = "button",
//   onClick,
//   className = "",
//   disabled = false,
//   fullWidth = false,
//   width,
//   paddings,
//   icon,
//   animateIconClasses,
// }) => {
//   const baseClasses =
//     "font-normal rounded-lg group border transition-colors flex justify-center items-center gap-2";

//   const widthClasses = fullWidth ? "w-full" : width ? width : "w-fit";

//   const paddingClasses = paddings ? paddings : "px-10 py-2";

//   const animateClasses = animateIconClasses ? animateIconClasses : "";

//   let typeClasses = "";

//   switch (type) {
//     case ButtonType.PRIMARY:
//       typeClasses =
//         "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark text-white";
//       break;
//     case ButtonType.SECONDARY:
//       typeClasses =
//         "bg-secondary hover:bg-secondaryDark border-secondary hover:border-secondaryDark text-white";
//       break;
//     case ButtonType.PRIMARY_OUTLINE:
//       typeClasses =
//         "bg-transparent hover:bg-primaryDark hover:text-white border-primary hover:border-primaryDark text-primary";
//       break;
//     case ButtonType.SECONDARY_OUTLINE:
//       typeClasses =
//         "bg-transparent hover:bg-secondaryDark hover:text-white border-secondary hover:border-secondaryDark text-secondary";
//       break;
//     case ButtonType.GRAY:
//       typeClasses =
//         "bg-gray-50 hover:bg-gray-200 duration-300 text-sm md:text-base rounded-md border-none";
//       break;
//     default:
//       typeClasses =
//         "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark gap-2 text-white";
//   }

//   const disabledClasses = disabled
//     ? "opacity-50 cursor-not-allowed"
//     : "cursor-pointer";

//   return (
//     <button
//       type={htmlType}
//       className={`${baseClasses} ${widthClasses} ${typeClasses} ${disabledClasses} ${className} ${paddingClasses}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {icon && <span className={`block ${animateClasses}`}>{icon}</span>}
//       {children}
//     </button>
//   );
// };

// export default ThemeButton;
"use client"

import React, { useState } from "react";

// Button type definitions
export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  PRIMARY_OUTLINE: "primary_outline",
  SECONDARY_OUTLINE: "secondary_outline",
  GRAY: "gray",
};

interface DropdownItem {
  label: string;
  href: string;
}

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  paddings?: string;
  icon?: React.ReactNode;
  animateIconClasses?: string;

   // Dropdown
  dropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const ThemeButton: React.FC<ButtonProps> = ({
  children,
  type = ButtonType.PRIMARY,
  htmlType = "button",
  onClick,
  className = "",
  disabled = false,
  fullWidth = false,
  width,
  paddings,
  icon, 
  animateIconClasses,
   dropdown = false,
  dropdownItems = [],
}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const baseClasses =
    "font-normal rounded-lg group border transition-colors flex justify-center items-center gap-2";

  const widthClasses = fullWidth ? "w-full" : width ? width : "w-fit";

  const paddingClasses = paddings ? paddings : "px-10 py-2";

  const animateClasses = animateIconClasses ? animateIconClasses : "";

  const dropdownClasses = dropdown ? "theme-button-dropdown" : "";

  let typeClasses = "";

  switch (type) {
    case ButtonType.PRIMARY:
      typeClasses =
        "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark text-white";
      break;
    case ButtonType.SECONDARY:
      typeClasses =
        "bg-secondary hover:bg-secondaryDark border-secondary hover:border-secondaryDark text-white";
      break;
    case ButtonType.PRIMARY_OUTLINE:
      typeClasses =
        "bg-transparent hover:bg-primaryDark hover:text-white border-primary hover:border-primaryDark text-primary";
      break;
    case ButtonType.SECONDARY_OUTLINE:
      typeClasses =
        "bg-transparent hover:bg-secondaryDark hover:text-white border-secondary hover:border-secondaryDark text-secondary";
      break;
    case ButtonType.GRAY:
      typeClasses =
        "bg-gray-50 hover:bg-gray-200 duration-300 text-sm md:text-base rounded-md border-none";
      break;
    default:
      typeClasses =
        "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark gap-2 text-white";
  }

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={htmlType}
      className={`${baseClasses} ${widthClasses} ${typeClasses} ${disabledClasses} ${className} ${paddingClasses} ${dropdownClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={`block ${animateClasses}`}>{icon}</span>}
      {children}
       
    </button>
  );
};

export default ThemeButton;
