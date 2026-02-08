import React, { useEffect, useState } from "react";
import StatCard from "../components/SaaS/StatCard";
import TrendChart from "../components/SaaS/TrendChart";
// import LeadsTable from "../components/SaaS/LeadsTable"; // Commenting out until we have real leads
// import SocialWidget from "../components/SaaS/SocialWidget"; // Commenting out until we have real social
import { api } from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const rawData = await api.getAnalytics();

        // 1. Transform for Chart
        const chart = rawData.map((item) => ({
          name: new Date(item.date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          }),
          traffic: item.traffic,
          roi: item.sales, // Mapping sales to ROI for now
        }));
        setChartData(chart);

        // 2. Calculate Totals for Stats
        const totalTraffic = rawData.reduce(
          (acc, curr) => acc + curr.traffic,
          0,
        );
        const totalSales = rawData.reduce(
          (acc, curr) => acc + (parseFloat(curr.sales) || 0),
          0,
        );
        const totalConversions = rawData.reduce(
          (acc, curr) => acc + curr.conversions,
          0,
        );

        setStats([
          {
            title: "Traffic",
            value: totalTraffic.toLocaleString(),
            change: "+5%",
            positive: true,
            prefix: "",
          },
          {
            title: "Revenue",
            value: totalSales.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            }),
            change: "+12%",
            positive: true,
            prefix: "$",
          },
          {
            title: "Conversions",
            value: totalConversions.toLocaleString(),
            change: "+3%",
            positive: true,
            prefix: "",
          },
        ]);
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Loading Dashboard...</div>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left/Main Column */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        {/* Top Stats Row */}
        <div className="flex flex-wrap gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Chart */}
        <div className="w-full">
          <TrendChart
            data={chartData}
            title="Traffic vs Revenue"
            trafficColor="#3B82F6"
            roiColor="#10B981"
          />
        </div>

        {/* Leads Table - Placeholder for now */}
        <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center text-gray-500">
          Leads Module: Coming Soon (Integrate CRM API)
        </div>
      </div>

      {/* Right Sidebar Column - Placeholder */}
      <div className="w-full lg:w-[320px] shrink-0 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center text-gray-500">
        Social Widget: Coming Soon (Integrate Social APIs)
      </div>
    </div>
  );
}
