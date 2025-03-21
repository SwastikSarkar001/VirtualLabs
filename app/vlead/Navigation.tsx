'use client'

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { idType } from "./ViewableSection";
import { MdTimeline } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiTeamUpgrade } from "react-icons/gi";
import { GiTeamDowngrade } from "react-icons/gi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";

export default function Navigation({ activeTab, setActiveTab }: { activeTab: idType; setActiveTab: React.Dispatch<React.SetStateAction<idType>> }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  })

  // Create a ref map for tabs to store their DOM references
  const tabRefs = useRef<{ [key in idType]?: HTMLDivElement }>({});

  // Update cursor position when activeTab changes
  useEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      const { width } = activeTabRef.getBoundingClientRect();
      setPosition({
        left: activeTabRef.offsetLeft,
        width
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const resize = () => {
      const activeTabRef = tabRefs.current[activeTab];
      if (activeTabRef) {
        const { width } = activeTabRef.getBoundingClientRect();
        setPosition({
          left: activeTabRef.offsetLeft,
          width
        });
      }
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [activeTab]);

  // Handler for when mouse leaves the nav area
  const handleNavMouseLeave = () => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      const { width } = activeTabRef.getBoundingClientRect();
      setPosition({
        left: activeTabRef.offsetLeft,
        width
      });
    }
  };

  return (
    <motion.nav
      className="fixed bottom-8 lg:bottom-16 w-max mx-auto z-2 bg-stone-900 flex not-lg:gap-4 border-2 items-center justify-between py-px px-1 rounded-full"
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onMouseLeave={handleNavMouseLeave}
    >
      <Tab
        tooltip='Motivation'
        tabId='Motivation'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Motivation'] = el}
      >
        <GoGoal />
        <div>Motivation</div>
      </Tab>
      <Tab
        tooltip='Initiatives'
        tabId='Initiatives'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Initiatives'] = el}
      >
        <FaInfo />
        <div>Initatives</div>
      </Tab>
      <Tab
        tooltip='Timeline'
        tabId='Timeline'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Timeline'] = el}
      >
        <MdTimeline  />
        <div>Timeline</div>
      </Tab>
      <Tab
        tooltip='Current Team'
        tabId='CurrentTeam'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['CurrentTeam'] = el}
      >
        <GiTeamUpgrade />
        <div>Current Team</div>
      </Tab>
      <Tab
        tooltip='Past Team'
        tabId='PastTeam'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['PastTeam'] = el}
      >
        <GiTeamDowngrade />
        <div>Past Team</div>
      </Tab>
      <Tab
        tooltip='Testimonials'
        tabId='TestimonialSection'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['TestimonialSection'] = el}
      >
        <BiSolidQuoteLeft />
        <div>Testimonials</div>
      </Tab>
      <Cursor position={position} />
    </motion.nav>
  )
}

type TabType = React.PropsWithChildren<{
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number }>>;
  tabId: idType;
  setActiveTab: React.Dispatch<React.SetStateAction<idType>>;
  registerRef: (el: HTMLDivElement) => void;
  tooltip: string
}>

function Tab({ children, tabId, setPosition, setActiveTab, tooltip, registerRef }: TabType) {
  const divRef = useRef<HTMLDivElement>(null);
  // On mount, register the ref with the parent
  useEffect(() => {
    if (divRef.current) {
      registerRef(divRef.current);
    }
  }, [divRef, registerRef]);

  const getPos = () => {
    if (divRef.current) {
      const { width } = divRef.current.getBoundingClientRect();
      setPosition({
        left: divRef.current.offsetLeft,
        width
      });
    }
  }
  const handleClick = () => setActiveTab(tabId);
  const handleMouseEnter = () => getPos();
  return (
    <div
      ref={divRef}
      tabIndex={0}
      className="group select-none *:first:block lg:*:first:hidden *:nth-last-[2]:hidden lg:*:nth-last-[2]:block cursor-pointer mix-blend-difference relative z-1 px-2 py-3 lg:px-4 lg:py-2 rounded-full text-2xl lg:text-lg"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
      <div className="absolute lg:hidden bottom-full mb-2 left-1/2 -translate-x-1/2 origin-bottom opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition pointer-events-none whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded border border-white shadow">
        {tooltip || tabId}
      </div>
    </div>
  )
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
