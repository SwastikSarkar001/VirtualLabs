'use client'

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { idType } from "./ViewableSection";

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
      className="fixed bottom-8 lg:bottom-16 w-max mx-auto z-2 bg-stone-900 flex border-2 items-center justify-between py-px px-1 rounded-full"
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onMouseLeave={handleNavMouseLeave}
    >
      <Tab
        tabId='Overview'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Overview'] = el}
      >
        Overview
      </Tab>
      <Tab
        tabId='Goals'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Goals'] = el}
      >
        Goals and Philosophy
      </Tab>
      <Tab
        tabId='Institutes'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Institutes'] = el}
      >
        Participating Institutes
      </Tab>
      <Tab
        tabId='Testimonials'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['Testimonials'] = el}
      >
        Testimonials
      </Tab>
      <Tab
        tabId='FAQ'
        setActiveTab={setActiveTab}
        setPosition={setPosition}
        registerRef={(el) => tabRefs.current['FAQ'] = el}
      >
        FAQ
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
}>

function Tab({ children, tabId, setPosition, setActiveTab, registerRef }: TabType) {
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
      className="select-none cursor-pointer mix-blend-difference relative z-1 px-2 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-lg"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

function Cursor({ position }: { position: { left: number; width: number } }) {
  return (
    <motion.div
      animate={position}
      transition={{ stiffness: 100, damping: 20 }}
      className="absolute z-0 h-5 lg:h-9.5 bg-foreground rounded-full pointer-events-none"
    />
  );
}
