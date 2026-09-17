import React from "react";

type LanguageToggleProps = {
  value: string;
  onSelect: (value: string) => void;
  options: string[];
};

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  value,
  onSelect,
  options,
}) => {
  return (
    <div className="mb-4">
      <span className="block mb-0.5">Language:</span>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {options.map((option, index) => {
          const isFirst = index === 0;
          const isLast = index === options.length - 1;
          const isActive = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`px-6 py-1.5 text-base font-normal text-gray-800 bg-white border 
                ${isFirst ? "rounded-s-lg" : ""}
                ${isLast ? "rounded-e-lg" : ""}
                ${isActive ? "border-primary text-primary" : "border-gray-300"}
                hover:border-primary hover:text-primary focus:z-10 focus:ring-1 focus:ring-primary focus:text-primary
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageToggle;
