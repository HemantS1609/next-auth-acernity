"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            minWidth: "300px",
            padding: "16px",
          },
        }}
      />
    </div>
  );
};

export default Toast;
