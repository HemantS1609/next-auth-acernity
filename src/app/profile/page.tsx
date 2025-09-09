"use client";
import { useEffect, useState } from "react";

export default function profilePage() {
  const [storedUser, setStoredUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 p-6 shadow-lg">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-neutral-300 dark:bg-neutral-700 text-2xl font-bold text-gray-800 dark:text-gray-200">
              {storedUser?.firstname?.[0]?.toUpperCase() || "U"}
            </div>
          </div>

          <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
            {storedUser?.firstname || "John"} {storedUser?.lastname || "Doe"}
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400">
            {storedUser?.email || "user@example.com"}
          </p>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Basic user information display only
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
