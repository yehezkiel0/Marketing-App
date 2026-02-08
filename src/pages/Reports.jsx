import React from "react";
import PageHeader from "../components/SaaS/PageHeader";
import { reportList } from "../data/dummyData";
import { FiFileText, FiDownload, FiEye } from "react-icons/fi";
import Button from "../components/UI/Button";
import Badge from "../components/UI/Badge";

export default function Reports() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Download and manage your monthly performance reports."
      />

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <h3 className="font-bold text-gray-800 dark:text-white">
            Generated Reports
          </h3>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">
              Filter
            </Button>
            <Button size="sm">Generate New</Button>
          </div>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-700">
          {reportList.map((report, idx) => (
            <div
              key={idx}
              className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  <FiFileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {report.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {report.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {report.size}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge variant="neutral">{report.type}</Badge>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost">
                    <FiEye className="mr-1" /> View
                  </Button>
                  <Button size="sm" variant="secondary">
                    <FiDownload className="mr-1" /> Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 text-center border-t border-gray-100 dark:border-gray-700">
          <button className="text-sm font-bold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            Load More Reports
          </button>
        </div>
      </div>
    </div>
  );
}
