"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useParams } from "next/navigation";
import React from "react";

const servicesData = {
  "web-dev": {
    title: "Web Development",
    subtitle: "Build Modern & Scalable Websites",
    description:
      "We build scalable, modern, and responsive websites tailored to your business needs using the latest technologies like React, Next.js, and Node.js. Optimized for performance, SEO, and user experience.",
    hiddenText:
      "Clean, maintainable, high-performing code ensures your website grows with your business.",
    details: [
      "Custom website development tailored to your brand",
      "Responsive design for mobile, tablet, and desktop",
      "Integration with modern tools and APIs",
      "Optimized for SEO, accessibility, and performance",
    ],
  },
  frontend: {
    title: "Frontend Development",
    subtitle: "Create Engaging User Interfaces",
    description:
      "We develop highly interactive and responsive frontends using React, Next.js, and modern JavaScript frameworks. We focus on usability, accessibility, and performance to enhance the user experience.",
    hiddenText:
      "Beautiful interfaces combined with efficient code make your web apps fast and intuitive.",
    details: [
      "Component-based development with React/Next.js",
      "Responsive layouts with Tailwind CSS or Bootstrap",
      "Integration with APIs and dynamic data",
      "Performance optimization and accessibility compliance",
    ],
  },
  backend: {
    title: "Backend Development",
    subtitle: "Powerful & Scalable Server Solutions",
    description:
      "Our backend development ensures secure, scalable, and efficient server-side logic using Node.js, Express, and databases like MongoDB or PostgreSQL. APIs, authentication, and data management are handled with best practices.",
    hiddenText:
      "Robust backend solutions to handle your business logic seamlessly.",
    details: [
      "RESTful and GraphQL API development",
      "Database design and optimization",
      "Authentication & authorization systems",
      "Performance monitoring and security best practices",
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    subtitle: "Efficient Deployment & Scaling",
    description:
      "We provide automated deployment, CI/CD pipelines, and cloud infrastructure setup on AWS, Azure, or GCP to ensure your applications are scalable, secure, and always available.",
    hiddenText:
      "Streamlined operations from development to production for reliable software delivery.",
    details: [
      "CI/CD pipeline setup",
      "Cloud infrastructure on AWS, Azure, GCP",
      "Monitoring, logging, and error handling",
      "Containerization with Docker & Kubernetes",
    ],
  },
  "ui-ux": {
    title: "UI/UX Design",
    subtitle: "Designing Intuitive User Experiences",
    description:
      "We craft user-centered interfaces and experiences focusing on simplicity, accessibility, and consistency. Wireframes, prototypes, and design systems ensure a seamless user journey.",
    hiddenText: "Good design solves problems without users even noticing it.",
    details: [
      "User research and persona creation",
      "Wireframing and interactive prototypes",
      "UI/UX design for web and mobile applications",
      "Design systems and consistent branding",
    ],
  },
};

const page = () => {
  const params = useParams();
  const slug = params?.slug as keyof typeof servicesData;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Service not found.
      </div>
    );
  }

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-30">
      <div className=" mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {service?.title}
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {service?.subtitle}
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {service?.details}
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
