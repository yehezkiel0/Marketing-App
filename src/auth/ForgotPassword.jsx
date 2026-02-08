import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      <div className="w-full flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 text-center">
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl animate-scale-in">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📨
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Check your inbox
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                We have sent a password reset link to{" "}
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  {email}
                </span>
                .
              </p>
              <Link
                to="/login"
                className="text-blue-600 font-bold hover:underline"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-primary">
                  Forgot Password?
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="text-center mt-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  ← Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
