import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../data/dummyData";

export default function TrendChart({
  data = chartData,
  title = "Trends",
  trafficColor = "#EF4444",
  roiColor = "#93C5FD",
}) {
  const [timeRange, setTimeRange] = useState("3M");

  // Simulated data sorting/filtering based on range (just for demo visual change)
  const getData = () => {
    // If custom data is passed (not the default chartData), just return it directly or simulate slice if possible
    // For simplicity, if it's the default chartData, we allow the slice logic.
    // If it's custom data, we assume it's already formatted or we just return it.
    if (data === chartData) {
      if (timeRange === "7D") return data.slice(0, 4);
      if (timeRange === "1M") return data.slice(0, 6);
    }
    return data;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-[300px] transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white font-primary">
            {title}
          </h3>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: trafficColor }}
              ></span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Metric 1
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: roiColor }}
              ></span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Metric 2
              </span>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-50 dark:bg-gray-700 rounded-lg p-1 transition-colors">
          {["7D", "1M", "3M"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`text-xs font-bold px-3 py-1 rounded-md transition-all ${
                timeRange === range
                  ? "bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm"
                  : "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="75%">
        <AreaChart
          data={getData()}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={trafficColor} stopOpacity={0.1} />
              <stop offset="95%" stopColor={trafficColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRoi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={roiColor} stopOpacity={0.1} />
              <stop offset="95%" stopColor={roiColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9CA3AF" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9CA3AF" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            labelStyle={{ color: "#6B7280" }}
          />
          <Area
            type="monotone"
            dataKey="traffic"
            stroke={trafficColor}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTraffic)"
            animationDuration={500}
          />
          <Area
            type="monotone"
            dataKey="roi"
            stroke={roiColor}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRoi)"
            animationDuration={500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
