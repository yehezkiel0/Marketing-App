import React from "react";

export default function StatCard({ title, value, change, positive, prefix }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-start justify-between min-w-[120px] flex-1 transition-colors">
      <h3 className="text-gray-500 dark:text-gray-400 font-medium text-xs font-primary mb-1">
        {title}
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-gray-900 dark:text-white font-bold text-xl font-primary">
          {prefix}
          {value}
        </span>
        <span
          className={`text-xs font-bold ${positive ? "text-green-500" : "text-red-500"}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
