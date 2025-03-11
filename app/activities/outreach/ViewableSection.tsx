'use client'

import { useState } from "react";
import Navigation from "./Navigation";
import FAQSection from "./FAQSection";
import WorkshopSection from "./WorkshopSection";
import NodeSection from "./NodeSection";
import GallerySection from "./GallerySection";
import TestimonialSection from "./TestimonialSection";

export type idType = 'Gallery' | 'Workshops' | 'Nodes' | 'Testimonials' | 'FAQ'

export default function ViewableSection() {
  const [activeTab, setActiveTab] = useState<idType>('Gallery')
  const sections: { [key in idType]: React.ReactNode } = {
    Gallery: <GallerySection />,
    Workshops: <WorkshopSection />,
    Nodes: <NodeSection />,
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
