import React, { useEffect, useState } from "react";
import PageHeader from "../components/SaaS/PageHeader";
import { useAuth } from "../context/AuthContext";
import Button from "../components/UI/Button";
import { api } from "../services/api"; // Import API

// Sub-components
const ProfileTab = ({ user, profile, loading }) => (
  <div className="space-y-6 animate-scale-in">
    <div className="flex items-center gap-6">
      <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-3xl overflow-hidden relative group cursor-pointer">
        {user?.user_metadata?.avatar_url ? (
          <img
            src={user.user_metadata.avatar_url}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 dark:text-gray-400">👤</span>
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs font-bold">Change</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {profile?.full_name || user?.user_metadata?.name || "User Name"}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {user?.email || "user@example.com"}
        </p>
        <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full dark:bg-blue-900/30 dark:text-blue-300 capitalize">
          {profile?.role || "User"}
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          defaultValue={profile?.full_name || ""}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          defaultValue={user?.email || ""}
          disabled
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-transparent text-gray-500 dark:text-gray-400 cursor-not-allowed"
        />
      </div>
    </div>

    <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
      <Button disabled={loading}>Save Changes</Button>
    </div>
  </div>
);

const SecurityTab = () => (
  <div className="space-y-6 animate-scale-in">
    <div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Change Password
      </h3>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Current Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
          />
        </div>
        <Button variant="secondary">Update Password</Button>
      </div>
    </div>
  </div>
);

const BillingTab = ({ profile }) => {
  const isPro = profile?.subscription_tier === "pro";
  const status = profile?.subscription_status || "inactive";

  const handleUpgrade = () => {
    // Redirect to Stripe Payment Link
    const paymentLink = "https://buy.stripe.com/test_123456789";

    if (paymentLink.includes("test_123456789")) {
      alert(
        "Billing Integration Required:\n\nTo enable real payments, please create a Payment Link in your Stripe Dashboard and paste the URL into src/pages/Settings.jsx (line 105).",
      );
      return;
    }

    window.open(paymentLink, "_blank");
  };

  return (
    <div className="space-y-6 animate-scale-in">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold opacity-90 mb-1">Current Plan</h3>
            <h2 className="text-4xl font-extrabold mb-2 capitalize">
              {profile?.subscription_tier || "Free"} Plan
            </h2>
            <p className="opacity-80 text-sm max-w-sm">
              {isPro
                ? "You have full access to all premium features."
                : "Upgrade to Pro to unlock unlimited campaigns and analytics."}
            </p>
          </div>
          <div className="text-right">
            <Badge
              variant={status === "active" ? "success" : "neutral"}
              className="mb-2"
            >
              {status.toUpperCase()}
            </Badge>
            {isPro && <div className="text-2xl font-bold">$49/mo</div>}
          </div>
        </div>

        {!isPro && (
          <div className="mt-8">
            <button
              onClick={handleUpgrade}
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-colors transform hover:-translate-y-1"
            >
              Upgrade Now 🚀
            </button>
          </div>
        )}
      </div>

      {isPro && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Billing Actions
          </h3>
          <div className="flex gap-4">
            <Button variant="secondary">Manage Subscription</Button>
            <Button variant="danger">Cancel Plan</Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple Badge Component for this file if not imported (but we have UI/Badge)
const Badge = ({ children, className = "", variant }) => {
  const bg =
    variant === "success"
      ? "bg-green-400/20 text-green-100"
      : "bg-gray-500/20 text-gray-100";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${bg} ${className}`}
    >
      {children}
    </span>
  );
};

export default function Settings() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "security", label: "Security" },
    { id: "billing", label: "Billing" },
  ];

  useEffect(() => {
    async function loadProfile() {
      if (!user?.id) return;

      try {
        const data = await api.getProfile(user.id);
        setProfile(data);
      } catch (err) {
        console.error("Failed to load profile", err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your account preferences and subscription."
      />

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors min-h-[600px]">
        {/* Tabs Header */}
        <div className="flex border-b border-gray-100 dark:border-gray-700 px-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === "profile" && (
            <ProfileTab user={user} profile={profile} loading={loading} />
          )}
          {activeTab === "security" && <SecurityTab />}
          {activeTab === "billing" && <BillingTab profile={profile} />}
        </div>
      </div>
    </div>
  );
}
