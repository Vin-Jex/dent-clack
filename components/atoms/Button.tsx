"use client"
import React, {
    ButtonHTMLAttributes,
    ReactNode,
    useEffect,
    useState,
  } from "react";
  
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    color?: "green" | "outline" | "red" | "yellow";
    width?: "full" | "auto" | "fit";
    // height?: "specs"
    
  }
  const Button: React.FC<ButtonProps> = ({
    children,
    size = "md",
    color = "green",
    width = "auto",
    ...props
  }) => {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null;
    }
    
    const sizeClassName = {
      sm: "px-2 md:px-3 lg:px-3 py-1 lg:py-1.5 text-xs md:text-sm",
      md: "px-2 sm:px-3.5 md:px-5 py-1.5 lg:py-2 text-sm sm:text-base",
      lg: "px-3 md:px-4 lg:px-6 py-2 lg:py-2.5 text-lg",
    }[size];
  
    const widthClassName = {
      full: "w-full",
      auto: "w-full max-w-[160px] md:max-w-[200px]",
      fit: "w-fit"
    }[width];
  
    const colorClassName = {
      green: "bg-secondary text-white",
      outline: "bg-transparent border border-subtext text-[#1E1E1E]", // bg of transparent
      red: "bg-red-500", // bg of red
      yellow: "bg-yellow-500", // bg of yellow
    }[color];
  
    return (
      <button
        className={`flex items-center justify-center space-x-1 font-poppins ${widthClassName} text-center ${sizeClassName} ${colorClassName} whitespace-nowrap cursor-pointer rounded-[0.2rem] text-base`}
        {...props}
      >
        {children}
        
      </button>
    );
  };
  
  export default Button;