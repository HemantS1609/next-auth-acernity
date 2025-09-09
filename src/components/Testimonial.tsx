"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const devSchoolTestimonials = [
  {
    quote:
      "Joining this platform transformed my coding skills. The hands-on projects and expert guidance helped me build confidence as a developer.",
    name: "Alex Johnson",
    title: "Frontend Developer Student",
  },
  {
    quote:
      "The mentorship and community support here are incredible. I was able to grasp React and Next.js concepts much faster than on my own.",
    name: "Samantha Lee",
    title: "Fullstack Developer Student",
  },
  {
    quote:
      "The TypeScript and Node.js courses gave me the tools to confidently work on real-world backend projects. Highly recommend!",
    name: "Michael Chen",
    title: "Backend Developer Student",
  },
  {
    quote:
      "I loved the DevOps and Docker lessons—they helped me understand deployment and cloud workflows in a practical way.",
    name: "Emily Taylor",
    title: "DevOps Student",
  },
  {
    quote:
      "The curriculum is constantly updated with the latest technologies. It really prepared me for modern web development challenges.",
    name: "Chris Morales",
    title: "Fullstack Developer Student",
  },
];

const Testimonial = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-gray-900 dark:bg-grid-gray-900/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear from Developers: Success Stories
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={devSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
