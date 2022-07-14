import React from "react";
import { Navbar } from "../components/Navbar";
export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
