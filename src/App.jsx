import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Seo from "./pages/Seo";
import PaidAds from "./pages/PaidAds";
import SocialMedia from "./pages/SocialMedia";
import DataSources from "./pages/DataSources";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { session, loading } = useAuth();

  if (loading)
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50 dark:bg-gray-900">
        Loading...
      </div>
    );

  return session ? <Element {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <MainLayout>
                  <PrivateRoute element={Dashboard} />
                </MainLayout>
              }
            />
            <Route
              path="/leads"
              element={
                <MainLayout>
                  <PrivateRoute element={Dashboard} />{" "}
                  {/* Re-using Dashboard for Leads for now or create specific Leads component/page if exists? Wait, I saw LeadsTable used in Dashboard. Let's redirect to Dashboard or keep it if there was a Leads page. Checking file list... logic suggests expanding dashboard or if specific page existed. The previous App.jsx didn't have /leads. I will leave it out or map it to Dashboard for now to be safe, or just stick to what was there. */}
                  {/* Actually, user asked for Commercial Upgrade. Let's stick to existing pages for now to avoid 404s. */}
                </MainLayout>
              }
            />
            <Route
              path="/seo"
              element={
                <MainLayout>
                  <PrivateRoute element={Seo} />
                </MainLayout>
              }
            />
            <Route
              path="/ads"
              element={
                <MainLayout>
                  <PrivateRoute element={PaidAds} />
                </MainLayout>
              }
            />
            <Route
              path="/social"
              element={
                <MainLayout>
                  <PrivateRoute element={SocialMedia} />
                </MainLayout>
              }
            />
            <Route
              path="/data"
              element={
                <MainLayout>
                  <PrivateRoute element={DataSources} />
                </MainLayout>
              }
            />
            <Route
              path="/reports"
              element={
                <MainLayout>
                  <PrivateRoute element={Reports} />
                </MainLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <MainLayout>
                  <PrivateRoute element={Settings} />
                </MainLayout>
              }
            />

            {/* Catch All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
