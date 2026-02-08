import React from "react";
import PageHeader from "../components/SaaS/PageHeader";

export default function DataSources() {
  return (
    <div>
      <PageHeader
        title="Data Sources"
        description="Manage your connected data integrations."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Google Analytics",
          "Google Ads",
          "Meta Ads",
          "LinkedIn",
          "Twitter/X",
          "CRM",
        ].map((source) => (
          <div
            key={source}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center justify-between shadow-sm"
          >
            <span className="font-bold text-gray-700 dark:text-gray-200">
              {source}
            </span>
            <button className="px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
