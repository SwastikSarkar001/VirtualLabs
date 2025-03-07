'use client';

import { useEffect, useState, createContext, useContext, useRef } from "react";
import Link from "next/link";
import { PiFlaskFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="self-center backdrop-blur-lg fixed flex items-center justify-between top-10 ml-auto w-[90%] md:w-4/5 z-50 rounded-full border-2 border-fuchsia-400/30 p-4 sm:px-8">
      <Explore />
      <Link href="/" className='flex gap-2 items-center'>
        <PiFlaskFill className="size-[1.3em] text-violet-400" />
        <div>Virtual Labs</div>
      </Link>
      <button className="cursor-pointer flex gap-1.5 text-sm items-center bg-gradient-to-b from-violet-700 to-violet-900 hover:to-violet-800 transition-colors py-1 px-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-[1.1em]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <div>Search</div>
      </button>
    </nav>
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
  const openExplore = () => setIsOpen(true);
  const closeExplore = () => setIsOpen(false);

  const contextValue: ExploreContextProps = {
    open: isOpen,
    openExplore: openExplore,
    closeExplore: closeExplore,
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up on unmount or when open changes.
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
      <ExploreOverlay />
    </ExploreContext.Provider>
  )
}

export function ExploreOverlay() {
  const [position, setPosition] = useState({
    top: 0,
    width: 0,
    opacity: 0
  })

  const context = useContext(ExploreContext);
  if (!context) {
    throw new Error("ExploreOverlay must be used within Explore");
  }

  const { open } = context;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed font-body top-0 left-0 w-full h-full backdrop-blur-xl z-999"
        >
          <div className="flex items-center justify-center w-full h-full bg-opacity-50">
            <div className="w-4/5 h-4/5 rounded-xl">
              <div className="flex items-center justify-between p-4">
                <div className="text-3xl font-semibold">Explore</div>
                <button aria-label="Close Explore" onClick={context.closeExplore} className="rounded-xl p-1 ring-2 ring-transparent hover:ring-white transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6 cursor-pointer"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
                <div className="sr-only">Close Explore</div>
              </div>
              <ul
                className="relative flex flex-col gap-4 p-4"
                onMouseLeave={ () => setPosition(prev => ({ ...prev, opacity: 0 })) }
              >
                <Tab setPosition={setPosition} onClick={context.closeExplore}>
                  <div className="px-4 py-2 text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>Start Learning</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Tab setPosition={setPosition} onClick={context.closeExplore}>
                  <div className="px-4 py-2 text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>About Us</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Tab setPosition={setPosition} onClick={context.closeExplore}>
                  <div className="px-4 py-2 text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
                    <div>Activities</div>
                    <HiOutlineChevronRight />
                  </div>
                </Tab>
                <Tab setPosition={setPosition} onClick={context.closeExplore}>
                  <div className="px-4 py-2 text-xl flex gap-2 group-hover:gap-3 items-center transition-all duration-500">
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

type TabProps = React.PropsWithChildren<{
  setPosition: React.Dispatch<React.SetStateAction<{top: number, width: number, opacity: number}>>,
  onClick: () => void
}>

function Tab({children, setPosition, onClick}: TabProps) {
  const listRef = useRef<HTMLLIElement>(null);
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
  return (
    <li
      ref={listRef}
      onMouseEnter={getPos}
      className="relative z-1 w-max group transition-all"
      onClick={ onClick }
    >
      {children}
    </li>
  )
}

function Cursor({ position }: { position: {top: number, width: number, opacity: number} }) {
  return (
    <motion.li
      animate={ position }
      className="absolute z-0 rounded-full bg-violet-500 h-11 pointer-events-none"
    />
  )
}