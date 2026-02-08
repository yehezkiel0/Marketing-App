import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { config } from "../config";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await authService.signIn(email, password);

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          alt="Login Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-20 p-12 text-white">
          <h1 className="text-5xl font-bold font-primary mb-6">
            {config.tagline}
          </h1>
          <p className="text-xl text-gray-300 max-w-lg">
            Join thousands of marketers who use {config.appName} to track,
            analyze, and optimize their campaigns in real-time.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-primary">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Please enter your details to sign in.
            </p>
          </div>

          {/* Demo Credentials Removed - Real Auth Active */}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm border border-red-100 dark:border-red-900/10 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
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

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-500 dark:text-gray-400"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-gray-900 dark:text-white hover:underline"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <ClimbingBoxLoader size={20} color={"#ffffff"} />
        </div>
      )}
    </div>
  );
}
