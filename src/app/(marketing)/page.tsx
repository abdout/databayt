import Stack from "@/components/landing/stack";
import Testimonial from "@/components/landing/testimonial";
import LetsWorkTogether from "@/components/landing/lets-work-together";
import Wizard from "@/components/wizard";
import Time from "@/components/landing/time";
import Boost from "@/components/landing/boost";
import Hero from "@/components/landing/hero";
import OpenSource from "@/components/landing/open-source";
import Automated from "@/components/automated/project";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-20">
        <Stack />
        <Automated />
        <OpenSource />
        <Time />
        <Wizard />
        <Testimonial />
        <LetsWorkTogether />
        <Boost />
      </div>
    </>
  );
}
