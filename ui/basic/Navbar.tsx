'use client';

import { useEffect, useState, createContext, useContext, useRef } from "react";
import Link from "next/link";
import { PiFlaskFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { subjects } from "@/data/data";


// Module-level flag (resets on full page reload)
let navbarHasAnimated = false;

export default function Navbar({ position = 'sticky' }: { position?: 'sticky' | 'fixed' }) {
  // On mount, if navbarHasAnimated is false, animate; otherwise, skip the initial animation.
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(!navbarHasAnimated);

  useEffect(() => {
    if (!navbarHasAnimated) {
      setShouldAnimate(true);
      navbarHasAnimated = true;
    }
  }, []);
  return (
    <motion.nav
      className={`self-center backdrop-blur-xl bg-indigo-950/50 ${position} flex items-center justify-between top-10 w-[85%] z-50 rounded-full border-2 border-fuchsia-400/30 p-4 sm:px-8`}
      initial={shouldAnimate ? { y: -100 } : false}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Explore />
      <Link href="/" className='flex gap-2 items-center'>
        <PiFlaskFill className="size-[1.3em] text-violet-400" />
        <div>Virtual Labs</div>
      </Link>
      <button className="cursor-pointer flex gap-1.5 text-sm items-center transition-colors rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </motion.nav>
  )
}

type ExploreContextProps = {
  open: boolean;
  openExplore: () => void;
  closeExplore: () => void;
};

const ExploreContext = createContext<ExploreContextProps | undefined>(undefined);

function Explore() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const openExplore = () => setIsOpen(true);
  const closeExplore = () => {
    setIsOpen(false);
    setActiveTab(null);
  };

  const contextValue: ExploreContextProps = {
    open: isOpen,
    openExplore,
    closeExplore,
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ExploreContext.Provider value={contextValue}>
      <button onClick={openExplore} className="size-6 cursor-pointer text-zinc-400 hover:text-fuchsia-400 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1"
          viewBox="0 0 100 100"
          fill='currentColor'
        >
          <path d="M14.4 15.1C11.7 18 11.8 28 14.5 31c1.6 1.8 2.8 2 8.4 1.8 6.3-.3 6.6-.4 6.6-2.8 0-2.3-.4-2.5-5.2-2.8l-5.3-.3V19h22.8c12.5 0 23.3-.4 24-.9.8-.5 1.2-1.7 1-2.7-.3-1.8-1.8-1.9-25.4-2.2-24.4-.2-25.1-.2-27 1.9" />
          <path d="M72.4 14.5c-1 2.4 1.5 4.5 5.2 4.5 3.3 0 3.4.1 3.4 4v4H58.6c-23.4 0-25.5.4-24 4.4C35.1 32.8 38 33 59 33c28.6 0 28.5 0 28.5-9.8 0-8.2-1.9-10.2-9.2-10.2-3.9 0-5.5.4-5.9 1.5M14.4 42.1c-2.6 2.9-2.6 12.9 0 15.8 1.6 1.7 3.1 2.1 8.8 2.1 5.2 0 7-.4 7.4-1.5 1.1-2.7-1.6-4.5-6.7-4.5H19v-8h22c19.9 0 22-.2 22.8-1.8 2.1-4 1.1-4.2-23.7-4.2-22.8 0-23.9.1-25.7 2.1" />
          <path d="M70.7 40.7c-1.3 1.2-.7 4.1.9 4.7.9.3 3.3.6 5.5.6 3.9 0 3.9 0 3.9 4v4H59c-19.9 0-22 .2-22.8 1.7-2.1 4.1-1.1 4.3 23.7 4.3 22.8 0 23.9-.1 25.7-2.1 1.4-1.5 1.9-3.6 1.9-7.9 0-8.2-1.8-10-10-10-3.4 0-6.5.3-6.8.7M14.4 69.1c-1.4 1.5-1.9 3.6-1.9 8 0 7.4 2 9.7 9.1 10.5 5.7.7 9.4-.7 9.4-3.5 0-2.3-1.9-3.1-7.6-3.1H19v-8h21.4c22.3 0 24.5-.4 23-4.4-.5-1.4-3.3-1.6-23.9-1.6-22.2 0-23.3.1-25.1 2.1" />
          <path d="M68.4 68.5C67.3 71.3 70 73 75.6 73H81v8H59c-20.1 0-22 .1-22.9 1.8-.6 1.1-.6 2.4-.1 3.3.8 1.1 4.9 1.4 23.9 1.4 22.6 0 23.1 0 25.3-2.3 1.8-1.8 2.3-3.3 2.3-8.1 0-8.6-1.7-10.1-11.2-10.1-5.6 0-7.5.4-7.9 1.5" />
        </svg>
      </button>
      <ExploreOverlay activeTab={activeTab} setActiveTab={setActiveTab} />
    </ExploreContext.Provider>
  )
}

type ExploreOverlayProps = {
  activeTab: string | null;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
};

export function ExploreOverlay({ activeTab, setActiveTab }: ExploreOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    width: 0,
    opacity: 0
  })

  const context = useContext(ExploreContext);
  if (!context) {
    throw new Error("ExploreOverlay must be used within Explore");
  }
  const { open, closeExplore } = context;

  // Ensure this overlay is only rendered on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define suboptions for each tab.
  const subOptions = {
    learn: subjects.map((subject) => ({ label: subject.fieldName, href: `/learn/${subject.fieldRouteName}` })),
    about: [
      { label: "VLead", href: "/vlead" },
      { label: "Virtual Labs", href: "/vlabs" },
    ],
    activities: [
      { label: "Create Experiment", href: "/activities/experiments" },
      { label: "Host Workshop", href: "/activities/workshops" },
      { label: "Explore Research", href: "/activities/researches" },
    ],
    analytics: [
      { label: "Summary", href: "/analytics/summary" },
      { label: "Detailed Analysis", href: "/analytics/analysis" },
    ],
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed font-body top-0 left-0 w-full h-full backdrop-blur-xl z-50"
        >
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-[90%] sm:w-4/5 h-4/5 rounded-xl">
              <div className="flex items-center justify-between p-4">
                <div className="text-2xl sm:text-3xl font-semibold">Explore</div>
                <button
                  aria-label="Close Explore"
                  onClick={closeExplore}
                  className="rounded-xl p-1 ring-2 ring-transparent hover:ring-white transition-shadow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  </button>
                <div className="sr-only">Close Explore</div>
              </div>
              <ul
                className="relative flex flex-col gap-4 p-4"
                onMouseLeave={() => setPosition(prev => ({ ...prev, opacity: 0 }))}
              >
                <Tab
                  tabId="learn"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  setPosition={setPosition}
                  subOptions={subOptions.learn}
                >
                  <div className="px-4 py-2 text-lg sm:text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>Learning Spheres</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Tab
                  tabId="about"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  setPosition={setPosition}
                  subOptions={subOptions.about}
                >
                  <div className="px-4 py-2 text-lg sm:text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>About Us</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Tab
                  tabId="activities"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  setPosition={setPosition}
                  subOptions={subOptions.activities}
                >
                  <div className="px-4 py-2 text-lg sm:text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>Activities</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Tab
                  tabId="analytics"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  setPosition={setPosition}
                  subOptions={subOptions.analytics}
                >
                  <div className="px-4 py-2 text-lg sm:text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>Analytics</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Cursor position={position} />
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

type TabType = React.PropsWithChildren<{
  setPosition: React.Dispatch<React.SetStateAction<{ top: number; width: number; opacity: number }>>;
  tabId: string;
  subOptions: { label: string; href: string }[];
  activeTab: string | null;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}>

function Tab({ children, tabId, setPosition, subOptions, activeTab, setActiveTab }: TabType) {
  const listRef = useRef<HTMLLIElement>(null);

  // Handle hover (for desktop) and tap/click (for mobile) events.
  const handleMouseLeave = () => setActiveTab(null);
  const handleClick = () => setActiveTab(prev => (prev === tabId ? null : tabId));
  const getPos = () => {
    if (listRef.current) {
      const { width } = listRef.current.getBoundingClientRect();
      setPosition({
        top: listRef.current.offsetTop,
        width,
        opacity: 1
      });
    }
  }
  const handleMouseEnter = () => {
    setActiveTab(tabId)
    getPos()
  }
  return (
    <li
      ref={listRef}
      className="relative z-1 w-max group transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2 text-xl cursor-pointer">
        { children }
      </div>
      <AnimatePresence>
        {activeTab === tabId && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -2 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className=" absolute -top-2 left-[110%] w-80 mt-2 z-20 rounded shadow-lg p-2 flex flex-col gap-2"
          >
            {subOptions.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className= {`hover:underline py-2`}
              >
                {option.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function Cursor({ position }: { position: { top: number; width: number; opacity: number } }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 rounded-full bg-violet-500 h-11 pointer-events-none"
    />
  );
}