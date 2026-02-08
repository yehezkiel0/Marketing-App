import React from "react";

export default function PageHeader({ title, description }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-primary">
        {title}
      </h1>
      {description && (
        <p className="text-gray-500 dark:text-gray-400 mt-1 font-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
