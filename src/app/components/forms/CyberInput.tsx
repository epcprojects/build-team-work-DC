"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Images } from "../../ui/images";

export const InputType = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email"
};

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
  showErrorIcon?: boolean;
  errorMessage?: string;
  height?: string; // <-- Added height prop
}

const CyberInput: React.FC<InputProps> = ({
  id,
  label,
  type = InputType.TEXT,
  placeholder,
  required = false,
  name,
  value,
  onChange,
  onBlur,
  className = "",
  error = false,
  showErrorIcon = false,
  errorMessage = "",
  height, // <-- Destructure height
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputType =
    type === InputType.PASSWORD
      ? passwordVisible
        ? InputType.TEXT
        : InputType.PASSWORD
      : type;

  return (
    <label className="block">
      {label && (
        <span className="block text-start mb-1 font-poppins">{label}:</span>
      )}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          className={`w-full focus:ring-2 p-2 md:p-3 border rounded-lg outline-none resize-none bg-white placeholder:text-gray-m-500 
            ${
              error
                ? "border-red-500 focus:ring-red-200"
                : "border-nebula focus:ring-gray-200"
            } 
            ${className}`}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          style={height ? { height } : undefined} // <-- Apply height inline if provided
        />

        {error && showErrorIcon && (
          <Image
            src="/images/errorIcon.svg"
            className="absolute w-5 h-5 top-3 md:top-3.5 end-3"
            alt=""
            width={500}
            height={500}
          />
        )}

        {type === InputType.PASSWORD && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="hover:bg-gray-200 p-2 rounded-md absolute end-2 top-1/2 transform -translate-y-1/2"
          >
            {passwordVisible ? (
              <Image
                src={Images.componentImages.eyeOpened}
                className="w-4 h-4"
                alt="eye opened icon"
              />
            ) : (
              <Image
                src={Images.componentImages.eyeClosed}
                className="w-4 h-4"
                alt="eye closed icon"
              />
            )}
          </button>
        )}
      </div>
      {error && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </label>
  );
};

export default CyberInput;
