import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  id?: string;
  label?: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  disabled?: boolean;
}

const ThemeSelect: React.FC<SelectBoxProps> = ({
  id = "select-box",
  label = "Select:",
  options,
  value,
  onChange,
  name = "select",
  disabled = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-gray-400">
          {label}
        </label>
      )}
      <div className="relative flex flex-col gap-1 text-slate-700 mb-3 md:mb-0">
        {/* Down Arrow Icon */}
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

        {/* Select Element */}
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full appearance-none rounded-md pe-12 text-[#212529] border border-nebula bg-white px-4 py-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeSelect;
