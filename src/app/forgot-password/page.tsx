"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleForgotPassword = async (value: typeof initialValues) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/forgot-password", value);

      if (res.status === 200) {
        toast.success("Password reset link sent to your email 📩");
      } else {
        toast.error(res.data.error || "Failed to send reset link");
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Spotlight />
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-6 md:rounded-2xl md:p-8 dark:bg-black mt-20">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Forgot Password
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Enter your email address and we&apos;ll send you a reset link.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleForgotPassword}
        >
          {(props) => {
            const {
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
            } = props;

            return (
              <form className="my-8" onSubmit={handleSubmit}>
                {/* Email Field */}
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="projectmayhem@fc.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </LabelInputContainer>

                {/* Submit Button */}
                <button
                  className={cn(
                    "group/btn relative flex h-10 w-full items-center justify-center rounded-md font-medium text-white transition",
                    "bg-gradient-to-br from-black to-neutral-600 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
                    "dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer",
                    (loading || !dirty || !isValid) &&
                      "opacity-50 cursor-not-allowed"
                  )}
                  type="submit"
                  disabled={loading || !dirty || !isValid}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader /> Sending link...
                    </span>
                  ) : (
                    <>
                      Send Reset Link
                      <BottomGradient />
                    </>
                  )}
                </button>

                {/* Back to Login */}
                <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  Remembered your password?{" "}
                  <Link
                    href="/login"
                    className="text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Back to Login
                  </Link>
                </p>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

/* Loader Spinner */
const Loader = () => (
  <svg
    className="animate-spin h-4 w-4 text-white"
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
