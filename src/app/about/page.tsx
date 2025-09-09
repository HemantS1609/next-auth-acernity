"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import React from "react";

const AboutUs = () => {
  const techStackData = [
    {
      title: "Frontend Development",
      description:
        "We use modern frontend technologies like React, Next.js, and TypeScript to create scalable, responsive, and user-friendly interfaces.",
    },
    {
      title: "Backend Development",
      description:
        "Our backend is built with Node.js and Express, focusing on performance, security, and seamless integration with APIs and databases.",
    },
    {
      title: "DevOps & Cloud",
      description:
        "We leverage cloud platforms like AWS, Docker, and CI/CD pipelines to ensure reliable, scalable, and automated deployments.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our design system uses Figma and Tailwind CSS to deliver intuitive, accessible, and visually appealing user experiences.",
    },
    {
      title: "Database & Storage",
      description:
        "We manage data efficiently using MongoDB and PostgreSQL, ensuring consistency, security, and high performance for your applications.",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "We use Git and GitHub for version control, enabling seamless collaboration and code management across distributed teams.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Our workflow includes Jest, React Testing Library, and Cypress to maintain high-quality, bug-free code across your projects.",
    },
    {
      title: "API Development & Integration",
      description:
        "We create RESTful and GraphQL APIs that are robust, scalable, and easy to integrate with frontend applications and third-party services.",
    },
    {
      title: "State Management",
      description:
        "We use Redux Toolkit and TanStack Query to manage application state efficiently, ensuring predictable and maintainable data flow.",
    },
    {
      title: "Performance & Optimization",
      description:
        "We focus on optimizing web performance using techniques like lazy loading, code splitting, caching strategies, and modern web standards.",
    },
  ];

  return (
    <BackgroundBeamsWithCollision>
      <section className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-black mt-20">
        <h2 className=" text-center mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
          About Us
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {techStackData.map((item, idx) => (
            <GridItem
              key={idx}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default AboutUs;

interface GridItemProps {
  title: string;
  description: string;
}

const GridItem = ({ title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
              {title}
            </h3>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
