import React, { useEffect, useState, useCallback } from "react";
import PageHeader from "../components/SaaS/PageHeader";
import StatCard from "../components/SaaS/StatCard";
import TrendChart from "../components/SaaS/TrendChart";
import Badge from "../components/UI/Badge";
import Modal from "../components/UI/Modal"; // Import Modal
import Select from "../components/UI/Select"; // Import Select
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext"; // Need user ID for creation

import { HiTrash, HiPencil } from "react-icons/hi2"; // Import Icons

export default function PaidAds() {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]); // Chart Data State
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null); // Track if editing
  const [formData, setFormData] = useState({
    name: "",
    platform: "Google Ads",
    status: "Active",
    spend: 0,
    clicks: 0,
  });

  const calculateStats = useCallback((data) => {
    const totalSpend = data.reduce(
      (acc, curr) => acc + (parseFloat(curr.spend) || 0),
      0,
    );
    const totalClicks = data.reduce(
      (acc, curr) => acc + (parseInt(curr.clicks) || 0),
      0,
    );
    const cpc =
      totalClicks > 0 ? (totalSpend / totalClicks).toFixed(2) : "0.00";

    setStats([
      {
        title: "Ad Spend",
        value: totalSpend.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        }),
        change: "+12%",
        positive: false,
        prefix: "$",
      },
      {
        title: "ROAS",
        value: "3.2x",
        change: "+0.4",
        positive: true,
        prefix: "",
      },
      {
        title: "Clicks",
        value: totalClicks.toLocaleString(),
        change: "+8%",
        positive: true,
        prefix: "",
      },
      {
        title: "CPC",
        value: cpc,
        change: "-$0.20",
        positive: true,
        prefix: "$",
      },
    ]);
  }, []);

  const prepareChartData = useCallback((data) => {
    const chart = data.map((item) => ({
      name: new Date(item.date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      traffic: item.traffic,
      roi: item.conversions * 10,
    }));
    setChartData(chart);
  }, []);

  const loadData = useCallback(async () => {
    try {
      const [campaignsData, analyticsData] = await Promise.all([
        api.getCampaigns(),
        api.getAnalytics(),
      ]);

      setCampaigns(campaignsData);
      calculateStats(campaignsData);
      prepareChartData(analyticsData);
    } catch (err) {
      console.error("Failed to load data", err);
    } finally {
      setLoading(false);
    }
  }, [calculateStats, prepareChartData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleOpenCreate = () => {
    setEditingId(null);
    setFormData({
      name: "",
      platform: "Google Ads",
      status: "Active",
      spend: 0,
      clicks: 0,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (campaign) => {
    setEditingId(campaign.id);
    setFormData({
      name: campaign.name,
      platform: campaign.platform,
      status: campaign.status,
      spend: campaign.spend,
      clicks: campaign.clicks,
    });
    setIsModalOpen(true);
  };

  const handleSaveCampaign = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...formData,
        user_id: user?.id,
      };

      if (editingId) {
        await api.updateCampaign(editingId, payload);
      } else {
        await api.createCampaign(payload);
      }

      setIsModalOpen(false);
      loadData();
    } catch (err) {
      console.error("Failed to save campaign", err);
      alert("Failed to save campaign");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCampaign = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this campaign?"))
      return;

    setDeletingId(id);
    try {
      await api.deleteCampaign(id);
      const updatedCampaigns = campaigns.filter((c) => c.id !== id);
      setCampaigns(updatedCampaigns);
      calculateStats(updatedCampaigns);
    } catch (err) {
      console.error("Failed to delete campaign", err);
      alert("Failed to delete campaign");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Loading Campaigns...</div>
    );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Paid Advertising"
        description="Monitor ad spend, ROAS, and campaign performance."
      />

      {/* Ads Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversions Chart */}
        <div className="lg:col-span-2">
          <TrendChart
            data={chartData}
            title="Conversion Rate"
            trafficColor="#F59E0B"
            roiColor="#FCD34D"
          />
        </div>

        {/* Active Campaigns List */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 dark:text-white">
              Active Campaigns
            </h3>
            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors"
            >
              + Add Campaign
            </button>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {campaigns.map((campaign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-500/10 transition-all cursor-pointer group"
                onClick={() => handleOpenEdit(campaign)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {campaign.name}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {campaign.platform}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        campaign.status === "Active" ? "success" : "neutral"
                      }
                      size="sm"
                    >
                      {campaign.status}
                    </Badge>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEdit(campaign);
                      }}
                      className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      title="Edit Campaign"
                    >
                      <HiPencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => handleDeleteCampaign(campaign.id, e)}
                      disabled={deletingId === campaign.id}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                      title="Delete Campaign"
                    >
                      <HiTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 dark:text-gray-500 mt-2">
                  <span className="font-medium text-gray-600 dark:text-gray-400">
                    ${campaign.spend?.toLocaleString()}{" "}
                    <span className="font-normal text-gray-400 dark:text-gray-500">
                      spent
                    </span>
                  </span>
                  <span>{campaign.clicks?.toLocaleString()} clicks</span>
                </div>
              </div>
            ))}
            {campaigns.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No active campaigns found. Add one to get started!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Campaign Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingId ? "Edit Campaign" : "Create New Campaign"}
      >
        <form onSubmit={handleSaveCampaign} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Campaign Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., Summer Sale 2026"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Select
                label="Platform"
                value={formData.platform}
                onChange={(val) => setFormData({ ...formData, platform: val })}
                options={[
                  "Google Ads",
                  "Facebook",
                  "Instagram",
                  "LinkedIn",
                  "TikTok",
                ]}
              />
            </div>
            <div>
              <Select
                label="Status"
                value={formData.status}
                onChange={(val) => setFormData({ ...formData, status: val })}
                options={["Active", "Paused"]}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Initial Spend ($)
              </label>
              <input
                type="number"
                min="0"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.spend}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    spend: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Initial Clicks
              </label>
              <input
                type="number"
                min="0"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.clicks}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    clicks: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white font-bold rounded-xl transition-all disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : editingId
                  ? "Update Campaign"
                  : "Create Campaign"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
