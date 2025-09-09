"use client";
import React, { useContext, useState } from "react";
import { cn } from "@/utils/cn";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { UserContext } from "@/context/UserContext";

export default function SigninFormDemo() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleLogin = async (value: typeof initialValues) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", value);

      if (response?.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        setUser(response.data.user);
        toast.success("Logged in successfully");
        router.push("/");
      } else {
        toast.error(response.data.error);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to signin. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Spotlight />
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black mt-20">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome to DevAcademy
        </h2>
        {/* <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Login to Demo if you can because we don&apos;t have a login flow yet
        </p> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              handleBlur,
              isValid,
              dirty,
            } = props;
            return (
              <form className="my-8" onSubmit={handleSubmit}>
                {/* Email */}
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </LabelInputContainer>

                {/* Password */}
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    autoComplete="off"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <span className="text-red-500 text-xs">
                      {errors.password}
                    </span>
                  )}
                </LabelInputContainer>
                <div className="flex justify-end mb-4">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Form Submit */}
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
                      <Loader /> Signing in...
                    </span>
                  ) : (
                    <>
                      Sign in &rarr;
                      <BottomGradient />
                    </>
                  )}
                </button>
                <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  Don't have account?
                  <Link
                    href="/signup"
                    className="text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Sing up
                  </Link>
                </p>

                {/* Divider */}
                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                {/* Social Login Buttons */}
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

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

/* Gradient underline for buttons */
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

/* Container for Label + Input */
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

/* Social login button component */
// const SocialButton = ({
//   icon,
//   label,
// }: {
//   icon: React.ReactNode;
//   label: string;
// }) => (
//   <button
//     type="button"
//     className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
//   >
//     {icon}
//     <span className="text-sm text-neutral-700 dark:text-neutral-300">
//       {label}
//     </span>
//     <BottomGradient />
//   </button>
// );
