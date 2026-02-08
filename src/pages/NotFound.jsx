import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors p-4 text-center">
      <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 font-primary">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
      >
        Go Home
      </Link>
    </div>
  );
}
