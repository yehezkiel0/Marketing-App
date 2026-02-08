import React, { useState } from "react";
import { leadsData, leadsDataVariations } from "../../data/dummyData";
import { FiExternalLink } from "react-icons/fi";
import Badge from "../UI/Badge";
import Button from "../UI/Button";

export default function LeadsTable() {
  const [activeTab, setActiveTab] = useState("Lead Quality");
  const [expandedRow, setExpandedRow] = useState(null);

  // Get data based on active tab
  const getDisplayData = () => {
    return leadsDataVariations[activeTab] || leadsData;
  };

  const tabs = [
    "Lead Quality",
    "Day on Day",
    "Week on Week",
    "SQR",
    "Keyword Performance",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors">
      <div className="border-b border-gray-100 dark:border-gray-700">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
                activeTab === tab
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-white animate-scale-in"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              <th className="p-6 font-bold">Date</th>
              <th className="p-6 font-bold">Company</th>
              <th className="p-6 font-bold">Email</th>
              <th className="p-6 font-bold">Lead Quality</th>
              <th className="p-6 font-bold text-right">Country</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
            {getDisplayData().map((lead, index) => (
              <React.Fragment key={index}>
                <tr
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                  onClick={() =>
                    setExpandedRow(expandedRow === index ? null : index)
                  }
                >
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {lead.date}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 font-bold text-gray-900 dark:text-white">
                    {lead.company}
                  </td>
                  <td className="p-6 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      {lead.email}
                      <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 dark:text-gray-500" />
                    </div>
                  </td>
                  <td className="p-6">
                    <Badge
                      variant={
                        lead.status === "GOOD"
                          ? "success"
                          : lead.status === "NEEDS REVIEW"
                            ? "danger"
                            : "neutral"
                      }
                    >
                      {lead.status}
                    </Badge>
                  </td>
                  <td className="p-6 text-right text-gray-900 dark:text-white">
                    {lead.country}
                  </td>
                </tr>
                {/* Expanded Row Detail */}
                {expandedRow === index && (
                  <tr className="bg-gray-50/50 dark:bg-gray-700/30 animate-slide-down">
                    <td colSpan="5" className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs text-gray-400 dark:text-gray-500 uppercase font-bold block mb-1">
                              Services Required
                            </span>
                            <div className="flex gap-2">
                              <Badge variant="primary">UI/UX DESIGN</Badge>
                              <Badge variant="neutral">WEB DEV</Badge>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">
                              Google Ads (Summer Sale Campaign)
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              $1,500 (Estimated)
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <Button size="sm">View Campaign</Button>
                            <Button size="sm" variant="ghost">
                              Assign to Team
                            </Button>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center mb-1 bg-white dark:bg-gray-800">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                              85
                            </span>
                          </div>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold">
                            AI Score
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {getDisplayData().length === 0 && (
          <div className="p-12 text-center text-gray-400 dark:text-gray-500">
            No data available for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
