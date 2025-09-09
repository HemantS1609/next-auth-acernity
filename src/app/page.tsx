import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoose />
      <Testimonial />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
