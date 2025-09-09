"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const UpcomingWebinar = () => {
  const featuredWebinars = [
    {
      title: "React.js Deep Dive",
      description:
        "Master the fundamentals and advanced patterns of React.js for building scalable web applications.",
      slug: "reactjs-deep-dive",
      isFeatured: true,
    },
    {
      title: "Next.js & Server-Side Rendering",
      description:
        "Learn how to build performant, SEO-friendly web apps using Next.js and server-side rendering techniques.",
      slug: "nextjs-ssr",
      isFeatured: true,
    },
    {
      title: "TypeScript for Developers",
      description:
        "Enhance your JavaScript projects with TypeScript to improve type safety, maintainability, and scalability.",
      slug: "typescript-for-devs",
      isFeatured: true,
    },
    {
      title: "Node.js & Express Essentials",
      description:
        "Build robust backend applications using Node.js and Express, including REST APIs and middleware patterns.",
      slug: "node-express-essentials",
      isFeatured: true,
    },
    {
      title: "Docker & DevOps Basics",
      description:
        "Understand containerization and deployment workflows with Docker and introductory DevOps practices.",
      slug: "docker-devops-basics",
      isFeatured: true,
    },
    {
      title: "AWS Cloud Fundamentals",
      description:
        "Get started with AWS services like EC2, S3, and Lambda to deploy and scale modern web applications.",
      slug: "aws-cloud-fundamentals",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Boost Your Developer Skills
          </p>
        </div>

        <div className="mt-10 z-0 relative">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
