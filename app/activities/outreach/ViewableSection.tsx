// app/activities/outreach/page.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from './Navigation';
import FAQSection from './FAQSection';
import WorkshopSection from './WorkshopSection';
import NodeSection from './NodeSection';
import GallerySection from './GallerySection';
import TestimonialSection from './TestimonialSection';

export type idType = 'Gallery' | 'Workshops' | 'Nodes' | 'Testimonials' | 'FAQ';

export default function ViewableSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = (searchParams.get('section') as idType) || 'Gallery'; // Default to Gallery

  const sections: { [key in idType]: React.ReactNode } = {
    Gallery: <GallerySection />,
    Workshops: <WorkshopSection />,
    Nodes: <NodeSection />,
    Testimonials: <TestimonialSection />,
    FAQ: <FAQSection />,
  };

  // Ensure URL reflects the initial activeTab if no query param is present
  useEffect(() => {
    if (!searchParams.get('section')) {
      router.push('/activities/outreach?section=Gallery', { scroll: false });
    }
    if (!sections[activeTab]) {
      router.push('/activities/outreach?section=Gallery', { scroll: false });
    }
  }, [searchParams, router, activeTab]);  // eslint-disable-line react-hooks/exhaustive-deps

  const setActiveTab = (tab: idType) => {
    router.push(`/activities/outreach?section=${tab}`, { scroll: false });
  };

  return (
    <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col items-center gap-4 flex-grow">
      {sections[activeTab]}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
}