import React from "react";

export default function Badge({
  children,
  variant = "neutral",
  className = "",
}) {
  const variants = {
    success:
      "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-900/10",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-900/10",
    danger:
      "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/10",
    neutral:
      "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700",
    primary:
      "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/10",
  };

  return (
    <span
      className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
