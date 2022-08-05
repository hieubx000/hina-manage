import React from "react";
import Navbar from "../modules/navbar";
import SideBar from "../modules/sidebar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "100%", height: "100vh" }}>
        <Navbar />
        <div style={{ height: "100%", backgroundColor: "brown" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
