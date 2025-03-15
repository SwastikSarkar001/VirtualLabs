'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { idType } from './ViewableSection';
import { GrGallery, GrWorkshop } from 'react-icons/gr';
import { TbBuildingPlus } from 'react-icons/tb';
import { BiSolidQuoteLeft } from 'react-icons/bi';

export default function Navigation({ activeTab, setActiveTab }: { activeTab: idType; setActiveTab: (tab: idType) => void }) {
  const [position, setPosition] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key in idType]?: HTMLDivElement }>({});

  useEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      const { width } = activeTabRef.getBoundingClientRect();
      setPosition({ left: activeTabRef.offsetLeft, width });
    }
  }, [activeTab]);

  useEffect(() => {
    const resize = () => {
      const activeTabRef = tabRefs.current[activeTab];
      if (activeTabRef) {
        const { width } = activeTabRef.getBoundingClientRect();
        setPosition({ left: activeTabRef.offsetLeft, width });
      }
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [activeTab]);

  const handleNavMouseLeave = () => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      const { width } = activeTabRef.getBoundingClientRect();
      setPosition({ left: activeTabRef.offsetLeft, width });
    }
  };

  return (
    <motion.nav
      className="fixed bottom-8 lg:bottom-16 w-max mx-auto z-2 bg-stone-900 flex not-lg:gap-4 border-2 items-center justify-between py-px px-1 rounded-full"
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      onMouseLeave={handleNavMouseLeave}
    >
      <Tab
        tooltip='On-Boarding and Hosting'
        tabId='Hosting'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => (tabRefs.current['Hosting'] = el)}
      >
        <GrGallery />
        <div>Hosting</div>
      </Tab>
      <Tab
        tooltip='Developer Tools'
        tabId='Developer'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => (tabRefs.current['Developer'] = el)}
      >
        <GrWorkshop />
        <div>Developer Tools</div>
      </Tab>
      <Tab
        tooltip='Progressive Web Application'
        tabId='WebApp'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => (tabRefs.current['WebApp'] = el)}
      >
        <TbBuildingPlus />
        <div>Progressive Web Application</div>
      </Tab>
      <Tab
        tooltip='See Also'
        tabId='SeeAlso'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => (tabRefs.current['SeeAlso'] = el)}
      >
        <BiSolidQuoteLeft />
        <div>See Also</div>
      </Tab>
      <Cursor position={position} />
    </motion.nav>
  );
}

type TabType = React.PropsWithChildren<{
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number }>>;
  tabId: idType;
  setActiveTab: (tab: idType) => void;
  registerRef: (el: HTMLDivElement) => void;
  tooltip: string;
}>;

function Tab({ children, tabId, setPosition, setActiveTab, tooltip, registerRef }: TabType) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      registerRef(divRef.current);
    }
  }, [divRef, registerRef]);

  const getPos = () => {
    if (divRef.current) {
      const { width } = divRef.current.getBoundingClientRect();
      setPosition({ left: divRef.current.offsetLeft, width });
    }
  };

  const handleClick = () => setActiveTab(tabId);
  const handleMouseEnter = () => getPos();

  return (
    <div
      ref={divRef}
      className="group select-none *:first:block lg:*:first:hidden *:nth-last-[2]:hidden lg:*:nth-last-[2]:block cursor-pointer mix-blend-difference relative z-1 px-2 py-3 lg:px-4 lg:py-2 rounded-full text-2xl lg:text-lg"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
      <div className="absolute lg:hidden bottom-full mb-2 left-1/2 -translate-x-1/2 origin-bottom opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition pointer-events-none whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded border border-white shadow">
        {tooltip || tabId}
      </div>
    </div>
  );
}

function Cursor({ position }: { position: { left: number; width: number } }) {
  return (
    <motion.div
      animate={position}
      transition={{ stiffness: 100, damping: 20 }}
      className="absolute z-0 h-9.5 bg-foreground rounded-full pointer-events-none"
    />
  );
}