import React, { useState } from "react";
import { instagramStats, twitterStats } from "../../data/dummyData";
import {
  FiMoreHorizontal,
  FiHeart,
  FiMessageCircle,
  FiShare,
} from "react-icons/fi";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const ProgressBar = ({ value }) => (
  <div className="flex items-end gap-1 h-12 w-2 bg-blue-100 rounded-full overflow-hidden relative">
    <div
      className="w-full bg-blue-500 rounded-full absolute bottom-0"
      style={{ height: value }}
    ></div>
  </div>
);

export default function SocialWidget() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="space-y-6">
      {/* Instagram Widget */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 dark:text-white">Instagram</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
            7D <FiMoreHorizontal className="inline ml-1" />
          </span>
        </div>

        <div className="mb-6">
          <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">
            Followers
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {instagramStats.followers}
            </span>
            <span className="text-xs font-bold text-green-500">
              {instagramStats.followersChange}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">
              Interactions
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {instagramStats.interactions}
              </span>
              <span className="text-xs font-bold text-green-500">
                {instagramStats.interactionsChange}
              </span>
            </div>
          </div>
          {/* Simple Donut Chart Mockup */}
          <div className="w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent animate-spin-slow"></div>
        </div>

        <div className="space-y-3">
          {instagramStats.details.map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center text-sm group cursor-pointer"
            >
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors">
                {item.label}
              </span>
              <span className="font-bold text-gray-900 dark:text-gray-200">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Posts Widget */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 dark:text-white">Top Posts</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative group cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPost(i)}
            >
              <img
                src={`https://picsum.photos/seed/${i + 10}/200`}
                alt="Post"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <FiHeart className="text-white fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Detail Modal */}
      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title="Post Analytics"
      >
        <div className="flex gap-4">
          <div className="w-1/3 rounded-xl overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${selectedPost + 10}/400`}
              alt="Post Detail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-center">
                <FiHeart className="mx-auto text-red-500 mb-1" />
                <span className="block text-lg font-bold text-gray-800 dark:text-gray-200">
                  1.2k
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  Likes
                </span>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-center">
                <FiMessageCircle className="mx-auto text-blue-500 mb-1" />
                <span className="block text-lg font-bold text-gray-800 dark:text-gray-200">
                  45
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  Comments
                </span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-center">
                <FiShare className="mx-auto text-purple-500 mb-1" />
                <span className="block text-lg font-bold text-gray-800 dark:text-gray-200">
                  82
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  Shares
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                Audience
              </h4>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-1">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>75% Followers</span>
                <span>25% Non-Followers</span>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button size="sm" onClick={() => setSelectedPost(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Twitter Widget */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 dark:text-white">X.com</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
            7D <FiMoreHorizontal className="inline ml-1" />
          </span>
        </div>

        <div className="mb-6">
          <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">
            Followers
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {twitterStats.followers}
            </span>
            <span className="text-xs font-bold text-green-500">
              {twitterStats.followersChange}
            </span>
          </div>
        </div>

        {/* Bar Chart Mockup */}
        <div className="flex justify-between items-end h-16 mb-6 px-2 group">
          {[40, 60, 30, 80, 50, 90, 45].map((val, idx) => (
            <div
              key={idx}
              className="transition-transform hover:scale-y-110 origin-bottom duration-200"
            >
              <ProgressBar value={`${val}%`} />
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {twitterStats.metrics.map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center text-sm group cursor-pointer"
            >
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-400 transition-colors">
                {item.label}
              </span>
              <div className="text-right">
                <span className="font-bold text-gray-900 dark:text-gray-200 block">
                  {item.value}
                </span>
                <span
                  className={`text-[10px] ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                >
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
