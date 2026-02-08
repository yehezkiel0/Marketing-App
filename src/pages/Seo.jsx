import React, { useEffect, useState } from "react";
import PageHeader from "../components/SaaS/PageHeader";
import StatCard from "../components/SaaS/StatCard";
import TrendChart from "../components/SaaS/TrendChart";
import { keywordData } from "../data/dummyData"; // Keeping keywords mock for now
import Badge from "../components/UI/Badge";
import { api } from "../services/api";

export default function Seo() {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const rawData = await api.getAnalytics();

        // 1. Chart Data
        const chart = rawData.map((item) => ({
          name: new Date(item.date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          }),
          traffic: item.traffic,
          roi: item.traffic * 0.15, // Estimating 'Organic Value'
        }));
        setChartData(chart);

        // 2. Stats
        const totalTraffic = rawData.reduce(
          (acc, curr) => acc + curr.traffic,
          0,
        );
        // Mocking other SEO specific metrics based on traffic
        const avgPosition = 12.5;
        const organicCtr = "4.2%";

        setStats([
          {
            title: "Total Organic Traffic",
            value: totalTraffic.toLocaleString(),
            change: "+8.5%",
            positive: true,
            prefix: "",
          },
          {
            title: "Avg. Position",
            value: avgPosition.toString(),
            change: "-1.2", // Lower is better in rank, but for green/red coloring logic
            positive: true,
            prefix: "#",
          },
          {
            title: "Organic CTR",
            value: organicCtr,
            change: "+0.3%",
            positive: true,
            prefix: "",
          },
          {
            title: "Indexed Pages",
            value: "1,240",
            change: "+12",
            positive: true,
            prefix: "",
          },
        ]);
      } catch (err) {
        console.error("Failed to load SEO data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Loading SEO Data...</div>
    );

  return (
    <div className="space-y-6">
      <PageHeader
        title="SEO Performance"
        description="Track your search engine ranking and organic traffic growth."
      />

      {/* SEO Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* main chart reused */}
        <div className="lg:col-span-2">
          <TrendChart
            data={chartData}
            title="Organic Traffic Growth"
            trafficColor="#10B981"
            roiColor="#34D399"
          />
        </div>

        {/* Keyword Ranking Table */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white mb-4">
            Top Keywords
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-700">
                  <th className="pb-3 font-medium">Keyword</th>
                  <th className="pb-3 font-medium text-right">Vol</th>
                  <th className="pb-3 font-medium text-right">Pos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                {keywordData.map((kw, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="py-3 font-medium text-gray-800 dark:text-gray-200">
                      {kw.keyword}
                      <span className="block text-[10px] text-gray-400 dark:text-gray-500 font-normal">
                        {kw.type}
                      </span>
                    </td>
                    <td className="py-3 text-right text-gray-600 dark:text-gray-400">
                      {kw.volume}
                    </td>
                    <td className="py-3 text-right">
                      <Badge
                        variant={
                          kw.position <= 3
                            ? "success"
                            : kw.position <= 10
                              ? "primary"
                              : "neutral"
                        }
                        size="sm"
                      >
                        #{kw.position}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
