'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from './Navigation';
import OpenProblems from './OpenProblems';
import Publications from './Publications';
import Talks from './Talks';

export type idType = 'OpenProblems' | 'Publications' | 'Talks';

export default function ViewableSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = (searchParams.get('section') as idType) || 'OpenProblems'; // Default to OpenProblems

  const sections: { [key in idType]: React.ReactNode } = {
    OpenProblems: <OpenProblems />,
    Publications: <Publications />,
    Talks: <Talks />,
  };

  // Ensure URL reflects the initial activeTab if no query param is present
  useEffect(() => {
    if (!searchParams.get('section')) {
      router.push('/activities/researches?section=OpenProblems', { scroll: false });
    }
    if (!sections[activeTab]) {
      router.push('/activities/researches?section=OpenProblems', { scroll: false });
    }
  }, [searchParams, router, activeTab]);  // eslint-disable-line react-hooks/exhaustive-deps

  const setActiveTab = (tab: idType) => {
    router.push(`/activities/researches?section=${tab}`, { scroll: false });
  };

  return (
    <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col items-center gap-4 flex-grow">
      {sections[activeTab]}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
}