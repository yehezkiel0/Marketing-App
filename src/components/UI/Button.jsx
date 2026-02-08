import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
    secondary:
      "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-200",
    ghost:
      "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-200",
    danger:
      "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 focus:ring-red-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && (
        <Icon className={`mr-2 ${size === "sm" ? "w-3 h-3" : "w-4 h-4"}`} />
      )}
      {children}
    </button>
  );
}
