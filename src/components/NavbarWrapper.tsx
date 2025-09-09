"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = [
    "/login",
    "/signup",
    "/verifyemail",
    "/forgot-password",
    "/reset-password",
  ].includes(pathname);

  if (hideNavbar) return null;

  return (
    <div className="relative flex items-center justify-center w-full">
      <Navbar />
    </div>
  );
}
