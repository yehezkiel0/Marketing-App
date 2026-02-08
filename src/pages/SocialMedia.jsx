import React from "react";
import PageHeader from "../components/SaaS/PageHeader";

export default function SocialMedia() {
  return (
    <div>
      <PageHeader
        title="Social Media"
        description="Engagement stats from your social profiles."
      />
      <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl border border-gray-100 dark:border-gray-700 text-center shadow-sm">
        <div className="text-6xl mb-4">📱</div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Social Hub Coming Soon
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Connect your Instagram, Twitter, and LinkedIn accounts.
        </p>
      </div>
    </div>
  );
}
