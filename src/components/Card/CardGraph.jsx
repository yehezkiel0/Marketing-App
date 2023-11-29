import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function CardGraph() {
  const data = [
    {
      name: "Jan",
      range: 4000,
      Income: 2400,
    },
    {
      name: "Feb",
      range: 3000,
      Income: 2400,
    },
    {
      name: "Mar",
      range: 2000,
      Income: 2400,
    },
    {
      name: "Apr",
      range: 2000,
      Income: 2400,
    },
    {
      name: "Mei",
      range: 2000,
      Income: 2400,
    },
    {
      name: "Juni",
      range: 2000,
      Income: 2400,
    },
    {
      name: "July",
      range: 2000,
      Income: 2400,
    },
    {
      name: "Aug",
      range: 2000,
      Income: 4400,
    },
  ];
  return (
    <>
      <div className="w-full h-full rounded-2xl bg-white p-2 py-4 border border-gray-300">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={700}
            height={250}
            data={data}
            className="font-primary text-[#3A1F59] font-bold text-[10px]"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="range" fill="#8884d8" radius={[7, 7, 0, 0]} />
            <Bar dataKey="Income" fill="#3B3286" radius={[7, 7, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
