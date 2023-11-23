import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Pages from "./pages/Pages";

function App() {
  return (
    <div
      className="w-full h-screen py-2 px-4 pr-8
    [background:linear-gradient(180deg,rgb(35.97,32.88,65)_0%,rgb(62.88,57.29,115.48)_33.33%,rgb(107.98,100.12,181.87)_64.58%,rgb(133.38,124.71,214.83)_100%)]"
    >
      <div className="w-full h-full flex flex-row">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pages" element={<Pages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
