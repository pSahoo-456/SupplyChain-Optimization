import React, { useEffect } from "react";
// import { Outlet, Link } from "react-router-dom";
// import { LayoutGrid, Package, Bell } from "lucide-react";
import { useAuthStore } from "../contentStore/authStore";
import LandingPage from "../LandingPage/LandingPage";
// import { useProductStore } from "../contentStore/productStore";

export function Layout() {
  const { user } = useAuthStore();

  return !user ? (
    <LandingPage />
  ) : (
    <div className="min-h-screen bg-gradient-to-tr from-slate-600 to-slate-400">
      <p>Home !!!</p>
    </div>
  );
}
