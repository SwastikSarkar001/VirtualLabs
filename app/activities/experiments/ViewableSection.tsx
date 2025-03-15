'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from './Navigation';
import Developer from './Developer';
import WebApp from './WebApp';
import Hosting from './Hosting';
import SeeAlso from './SeeAlso';

export type idType = 'Hosting' | 'Developer' | 'WebApp' | 'SeeAlso';

export default function ViewableSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = (searchParams.get('section') as idType) || 'Hosting'; // Default to Hosting

  const sections: { [key in idType]: React.ReactNode } = {
    Hosting: <Hosting />,
    Developer: <Developer />,
    WebApp: <WebApp />,
    SeeAlso: <SeeAlso />,
  };

  // Ensure URL reflects the initial activeTab if no query param is present
  useEffect(() => {
    if (!searchParams.get('section')) {
      router.push('/activities/experiments?section=Hosting', { scroll: false });
    }
    if (!sections[activeTab]) {
      router.push('/activities/experiments?section=Hosting', { scroll: false });
    }
  }, [searchParams, router, activeTab]);  // eslint-disable-line react-hooks/exhaustive-deps

  const setActiveTab = (tab: idType) => {
    router.push(`/activities/experiments?section=${tab}`, { scroll: false });
  };

  return (
    <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col items-center gap-4 flex-grow">
      {sections[activeTab]}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
}