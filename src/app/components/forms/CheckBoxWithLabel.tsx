import React from "react";

interface CheckboxProps {
  id?: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  marginBtm?: string;
}

const CheckBoxWithLabel: React.FC<CheckboxProps> = ({
  id = "default-checkbox",
  label,
  checked,
  onChange,
  marginBtm,
}) => {
  return (
    <div className={`flex items-center ${marginBtm ? marginBtm : "mb-4"}`}>
      {/* <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      /> */}
      <label className="mt-1.5 custom-checkbox">
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
      <label
        htmlFor={id}
        className="ms-2 text-base font-normal select-none text-gray-800"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxWithLabel;
