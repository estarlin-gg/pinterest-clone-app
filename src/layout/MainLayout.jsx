import React from "react";
import { TabBar } from "../components/TabBar";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const MainLayout = () => {
  return (
    <>
      <TabBar />
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};
