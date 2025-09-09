"use client";

import {
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";
import { UserContext } from "@/context/UserContext";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function LogoutConfirmation() {
  const router = useRouter();
  const { open, setOpen } = useModal();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      setOpen(false);
      router.push("/login");
      localStorage.removeItem("userData");
      setUser(null);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.error || "Logout failed");
        console.log(err.response?.data);
      } else if (err instanceof Error) {
        toast.error(err.message);
        console.log(err.message);
      } else {
        toast.error("An unexpected error occurred");
        console.log(err);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="py-40 flex items-center justify-center">
      <ModalBody>
        <ModalContent>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
            Are you sure you want to logout?
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
            You will need to log in again to access your account.
          </p>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button
            className="px-4 py-2 bg-gray-200 text-black dark:bg-neutral-800 dark:text-white rounded-md cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ModalFooter>
      </ModalBody>
    </div>
  );
}
