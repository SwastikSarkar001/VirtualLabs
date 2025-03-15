'use client'

import { useEffect } from "react";
import Navigation from "./Navigation";
import FAQSection from "./FAQSection";
import GoalsSection from "./GoalsSection";
import InstituteSection from "./InstituteSection";
import OverviewSection from "./OverviewSection";
import TestimonialSection from "./TestimonialSection";
import { useRouter, useSearchParams } from "next/navigation";

export type idType = 'Overview' | 'Goals' | 'Institutes' | 'Testimonials' | 'FAQ'

export default function ViewableSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = (searchParams.get('section') as idType) || 'Overview'; // Default to Overview

  const sections: { [key in idType]: React.ReactNode } = {
    Overview: <OverviewSection />,
    Goals: <GoalsSection />,
    Institutes: <InstituteSection />,
    Testimonials: <TestimonialSection />,
    FAQ: <FAQSection />,
  };

  // Ensure URL reflects the initial activeTab if no query param is present
  useEffect(() => {
    if (!searchParams.get('section')) {
      router.push('/vlabs?section=Overview', { scroll: false });
    }
    if (!sections[activeTab]) {
      router.push('/vlabs?section=Overview', { scroll: false });
    }
  }, [searchParams, router, activeTab]);  // eslint-disable-line react-hooks/exhaustive-deps

  const setActiveTab = (tab: idType) => {
    router.push(`/vlabs?section=${tab}`, { scroll: false });
  };

  return (
    <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col items-center gap-4 flex-grow">
      {sections[activeTab]}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  )
}
