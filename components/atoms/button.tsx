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
    color?: "blue" | "outline" | "red" | "yellow";
    width?: "full" | "auto" | "fit"| "specs";
    
  }
  const Button: React.FC<ButtonProps> = ({
    children,
    size = "md",
    color = "blue",
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
      sm: "px-2 md:px-3 lg:px-4 py-2.5 lg:py-3 text-sm md:text-base font-medium",
      md: "px-2 sm:px-3.5 md:px-5 py-1 lg:py-3 text-lg font-medium",
      lg: "px-3 md:px-4 lg:px-6 py-2.5 lg:py-3 text-lg",
    }[size];
  
    const widthClassName = {
      full: "w-full",
      auto: "w-full max-w-[160px] md:max-w-[180px]",
      fit: "w-fit",
      specs: "w-full max-w-[110px] "
    }[width];
  
    const colorClassName = {
      blue: "bg-primary text-[#fdfdfd]", // bg of dark cyan-blue
      outline: "bg-transparent border border-subtext text-[#1E1E1E]", // bg of transparent
      red: "bg-red-500", // bg of red
      yellow: "bg-yellow-500", // bg of yellow
    }[color];
  
    return (
      <button
        className={`flex items-center justify-center space-x-1  font-poppins  ${widthClassName} text-center ${sizeClassName} ${colorClassName} whitespace-nowrap text-[#000] bg-[#07C589] cursor-pointer rounded-[0.2rem] h-[2.2rem] text-base`}
        {...props}
      >
        {children}
        
      </button>
    );
  };
  
  export default Button;