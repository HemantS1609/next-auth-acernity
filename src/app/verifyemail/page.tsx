"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/verifyemail", { token });
      if (res.status === 200) {
        setVerified(true);
        toast.success("Email verified successfully 🎉");
      }
    } catch (err: any) {
      setError(true);
      toast.error(err?.response?.data?.error || "Verification failed");
      console.log(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="h-screen flex items-center justify-center">
      <Spotlight />
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-6 md:rounded-2xl md:p-8 dark:bg-black mt-20 text-center">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Verify Email
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          We’re validating your account. Please wait a moment...
        </p>

        {/* Loader / Status */}
        <div className="mt-6">
          {loading && (
            <span className="flex justify-center items-center gap-2 text-sm text-neutral-500 dark:text-neutral-300">
              <Loader /> Verifying your email...
            </span>
          )}

          {verified && (
            <div className="space-y-3">
              <h2 className="text-green-600 text-lg font-semibold">
                ✅ Email Verified
              </h2>
              <Link
                href="/login"
                className={cn(
                  "group/btn relative inline-flex h-10 w-full items-center justify-center rounded-md font-medium text-white transition",
                  "bg-gradient-to-br from-black to-neutral-600 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
                  "dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                )}
              >
                Go to Login <BottomGradient />
              </Link>
            </div>
          )}

          {error && !loading && (
            <h2 className="text-red-500 text-lg font-semibold">
              ❌ Verification failed
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

const Loader = () => (
  <svg
    className="animate-spin h-5 w-5 text-neutral-600 dark:text-neutral-300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
);

const BottomGradient = () => (
  <>
    <span
      className="absolute inset-x-0 -bottom-px block h-px w-full 
      bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
      opacity-0 transition duration-500 group-hover/btn:opacity-100"
    />
    <span
      className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 
      bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
      opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
    />
  </>
);
