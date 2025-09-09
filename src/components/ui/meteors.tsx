"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;
  const [delays, setDelays] = useState<string[]>([]);
  const [durations, setDurations] = useState<string[]>([]);

  useEffect(() => {
    // Generate random values only on client
    setDelays(
      Array.from({ length: meteorCount }, () => Math.random() * 5 + "s")
    );
    setDurations(
      Array.from(
        { length: meteorCount },
        () => Math.floor(Math.random() * (10 - 5) + 5) + "s"
      )
    );
  }, [meteorCount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: meteorCount }).map((_, idx) => {
        const position = idx * (800 / meteorCount) - 400;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: position + "px",
              animationDelay: delays[idx],
              animationDuration: durations[idx],
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
