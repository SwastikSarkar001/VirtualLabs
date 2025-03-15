'use client'

import { useState } from "react";
import Navigation from "./Navigation";
import Initiatives from "./Initiatives";
import CurrentTeam from "./CurrentTeam";
import Motivation from "./MotivationSection";
import TestimonialSection from "./TestimonialSection";
import PastTeam from "./PastTeam";
import TimelineSection from "./TimelineSection";

export type idType = 'Motivation' | 'Initiatives' | 'Timeline' | 'CurrentTeam' | 'PastTeam' | 'TestimonialSection'

export default function ViewableSection() {
  const [activeTab, setActiveTab] = useState<idType>('Motivation')
  const sections: { [key in idType]: React.ReactNode } = {
    Motivation: <Motivation />,
    Initiatives: <Initiatives />,
    Timeline: <TimelineSection />,
    CurrentTeam: <CurrentTeam />,
    PastTeam: <PastTeam />,
    TestimonialSection: <TestimonialSection />,
  }
  return (
    <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col items-center gap-4 flex-grow">
      {sections[activeTab]}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  )
}
