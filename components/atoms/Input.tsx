import {
  InfoOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import React, { InputHTMLAttributes, useState } from "react";

export type InputType =
  | "button"
  | "text"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "time"
  | "week"
  | "url"
  | "range"
  | "radiogroup"
  | "checkboxgroup"
  | "select"
  | "datalist"
  | "keygen"
  | "label"
  | "legend"
  | "meter";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationError?: string;
  isValid?: boolean | undefined;
  handleInputChange?: React.ChangeEvent<HTMLInputElement>;
  inputWidth?: number | string;
  status?: "success" | "warning" | "danger" | "default";
  type?: InputType;
  showPword?: boolean;
}

const Input: React.FC<InputProps> = ({
  validationError, // Error message
  isValid, // Boolean
  handleInputChange, // Function
  inputWidth, // Input size
  status = "default", // Accepts warning, error, success strings only
  type: Type, // Input Type
  showPword = false, // Whether to show the password characters in the password field
  ...inputProps // Other properties
}) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const showInputField = () => setShowInput(!showInput);

  const statusColor = {
    success: "#06C270",
    warning: "#FFCC00",
    danger: "#FF3B3B",
    default: "#1E1E1E60",
  }[status];

  return (
    <div
      className='space-y-1 w-full'
      style={{
        width:
          typeof inputWidth === "string"
            ? inputWidth
            : typeof inputWidth === "number"
            ? `${inputWidth}px`
            : "",
      }}
    >
      <div className='flex relative items-center w-full'>
        <input
          type={Type === "password" && showInput ? "text" : Type}
          {...inputProps}
          style={{
            width: "100%",
            border: `1.1px solid ${statusColor}`,
            outline: "none",
            appearance: "none",
          }}
        />
        {showPword && showInput ? (
          <VisibilityOutlined
            className='absolute right-2 top-1/2 -translate-y-1/2 !text-dark/60 !text-[1.2rem] !z-50 bg-transparent'
            onClick={showInputField}
          />
        ) : showPword && !showInput ? (
          <VisibilityOffOutlined
            className='absolute right-2 top-1/2 -translate-y-1/2 !text-dark/60 !text-[1.2rem] !z-50 bg-transparent'
            onClick={showInputField}
          />
        ) : (
          ""
        )}
      </div>
      {validationError && isValid && (
        <div className='flex items-center space-x-1'>
          <span className='flex items-center'>
            <InfoOutlined
              sx={{ fontSize: "1.2rem", color: `${statusColor}` }}
            />
          </span>
          <p style={{ color: `${statusColor}` }}>{validationError}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
