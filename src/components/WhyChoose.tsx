"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const devSchoolContent = [
  {
    title: "Build Real-World Skills with Hands-On Projects",
    description:
      "Go beyond theory and practice coding through real-world projects. From frontend interfaces to backend APIs, every lesson is designed to help you apply skills immediately.",
  },
  {
    title: "Personalized Learning Path",
    description:
      "Whether you're a beginner or an experienced developer, our platform adapts to your skill level. Choose your own track—frontend, backend, fullstack, or DevOps—and learn at your own pace.",
  },
  {
    title: "Expert Mentorship & Community Support",
    description:
      "Learn directly from industry professionals and collaborate with a vibrant developer community. Get feedback, share knowledge, and grow together.",
  },
  {
    title: "Live Feedback & Interactive Sessions",
    description:
      "Just like debugging in real-time, our platform provides instant feedback on your code, ensuring you learn from mistakes and master concepts faster.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Stay ahead with constantly updated courses covering the latest technologies like React, Next.js, TypeScript, Docker, and AWS. Never fall behind in the fast-moving tech world.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "Access a vast library of resources, coding challenges, and advanced projects. From beginner to advanced, there's always something new to explore and master.",
  },
];
const WhyChoose = () => {
  return (
    <div className="w-full">
      <StickyScroll content={devSchoolContent} />
    </div>
  );
};

export default WhyChoose;
