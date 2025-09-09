"use client";
import React, { useContext, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { IconLogout, IconUserBolt } from "@tabler/icons-react";
import { useModal } from "@/components/ui/animated-modal";
import LogoutConfirmation from "./LogoutConfirmation";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { user } = useContext(UserContext);
  const { setOpen } = useModal();

  return (
    <>
      <LogoutConfirmation />
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 items-center",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>

          <MenuItem setActive={setActive} active={active} item="Service">
            <div className="flex flex-col space-y-4 text-sm">
              {/* <div className="flex flex-col space-y-4 text-sm"> */}
              <HoveredLink href="/service/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/service/frontend">
                Frontend Development
              </HoveredLink>
              <HoveredLink href="/service/backend">
                Backend Development
              </HoveredLink>
              <HoveredLink href="/service/devops">DevOps & Cloud</HoveredLink>
              <HoveredLink href="/service/ui-ux">UI/UX Design</HoveredLink>
            </div>
          </MenuItem>

          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>

          {!user ? (
            <Link
              href="/login"
              className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-1 rounded-full cursor-pointer inline-block"
            >
              Login
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </Link>
          ) : (
            <MenuItem setActive={setActive} active={active} item={"Profile"}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/profile">
                  <div className="flex items-center gap-2">
                    <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                    <span>User</span>
                  </div>
                </HoveredLink>

                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center gap-2 px-1 py-1 text-red-600 hover:text-red-700 cursor-pointer"
                >
                  <IconLogout className="h-5 w-5 shrink-0" />
                  <span>Logout</span>
                </button>
              </div>
            </MenuItem>
          )}
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
