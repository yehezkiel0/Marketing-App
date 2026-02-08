import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      <div className="w-full flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl text-center animate-scale-in">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Password Reset!
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Your password has been successfully reset. Redirecting to
                login...
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-primary">
                  Reset Password
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Enter your new password below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  Reset Password
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
