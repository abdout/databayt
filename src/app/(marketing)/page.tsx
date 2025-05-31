import Stack from "@/components/landing/stack";
import Testimonial from "@/components/landing/testimonial";
import LetsWorkTogether from "@/components/landing/lets-work-together";
import Wizard from "@/components/wizard";
import Time from "@/components/landing/time";
import Boost from "@/components/landing/boost";
import Hero from "@/components/landing/hero";
import OpenSource from "@/components/landing/open-source";
import Automated from "@/components/automated/featured";
import Codebase from "@/components/landing/codebase";
import FAQs from "@/components/landing/faqs";
import LogoCloud from "@/components/landing/logo-cloud";
import { Gallery } from "@/components/landing/gallery";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Gallery />
      <Stack />
      <Automated />
      <OpenSource />
      <Codebase />
      <Time />
      <Wizard />
      <Testimonial />
      <LogoCloud />
      <FAQs />
      <LetsWorkTogether />
      <Boost />
    </main>
  );
}
