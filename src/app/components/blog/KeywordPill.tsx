import React from "react";

interface KeywordPillProps {
  text: string;
  className?: string;
}

const KeywordPill: React.FC<KeywordPillProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`bg-gray-m-200 text-gray-900 text-xs md:text-base px-2 md:px-4 py-1 md:py-1.5 rounded-full ${className}`}
    >
      {text}
    </span>
  );
};

export default KeywordPill;
