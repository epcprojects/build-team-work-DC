import React from "react";

interface SearchInputProps {
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CyberSearchInput: React.FC<SearchInputProps> = ({
  id = "default-search",
  placeholder = "Search",
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form className="max-w-xl mx-auto" onSubmit={onSubmit}>
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium invisible text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id={id}
          value={value}
          onChange={onChange}
          className="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-0"
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};

export default CyberSearchInput;
