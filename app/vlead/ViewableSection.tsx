'use client'

import { useState } from "react";
import Navigation from "./Navigation";
import FAQSection from "./FAQSection";
import GoalsSection from "./GoalsSection";
import InstituteSection from "./InstituteSection";
import OverviewSection from "./OverviewSection";
import TestimonialSection from "./TestimonialSection";

export type idType = 'Overview' | 'Goals' | 'Institutes' | 'Testimonials' | 'FAQ'

export default function ViewableSection() {
  const [activeTab, setActiveTab] = useState<idType>('Overview')
  const sections: { [key in idType]: React.ReactNode } = {
    Overview: <OverviewSection />,
    Goals: <GoalsSection />,
    Institutes: <InstituteSection />,
    Testimonials: <TestimonialSection />,
    FAQ: <FAQSection />,
  }
  return (
    <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col items-center gap-4 flex-grow">
      {sections[activeTab]}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  )
}
