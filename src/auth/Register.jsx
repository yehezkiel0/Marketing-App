import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { config } from "../config";
import Modal from "../components/UI/Modal";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    division: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { email, password, ...metaData } = formData;
      const { error } = await authService.signUp(email, password, {
        data: metaData,
      });

      if (error) {
        setError(error.message);
      } else {
        // Success! Show Modal
        setShowSuccessModal(true);
      }
    } catch (err) {
      setError("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        title="Registration Successful 🎉"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Your account has been created successfully!
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Please check your email</strong> ({formData.email}) to
              confirm your account before logging in.
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={handleCloseModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-bold transition-all"
            >
              Go into Login
            </button>
          </div>
        </div>
      </Modal>

      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          alt="Register Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-20 p-12 text-white">
          <h1 className="text-5xl font-bold font-primary mb-6">
            Start Your Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-lg">
            Create an account to access powerful {config.appName} analytics and
            grow your business today.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-primary">
              Create Account
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Join our community of marketers.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm border border-red-100 dark:border-red-900/10">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Division / Company
              </label>
              <input
                type="text"
                name="division"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="Marketing Team"
                value={formData.division}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-gray-900 dark:text-white hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
