'use client'

import { AnimatePresence, HTMLMotionProps, motion, Variants } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom";

type DialogContextProps = {
  open: boolean;
  openDialog: () => void;
  closeDialog: (skip?: boolean) => void;
};

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

type DialogProps = {
  /** Function to execute on opening the dialog */
  onOpen?: () => void
  /** Function to execute on closing the dialog */
  onClose?: () => boolean
}

export default function Dialog({ children, onOpen, onClose }: React.PropsWithChildren<DialogProps>) {
  const [open, setOpen] = useState(false)
  const openDialog = () => {
    if (onOpen !== undefined) {
      onOpen()
    }
    setOpen(true)
  }
  const closeDialog = (skip?: boolean) => {
    if (skip) {
      setOpen(false)
    }
    else {
      if (onClose !== undefined) {
        if (onClose()) setOpen(false)
      }
      else setOpen(false)
    }
  }
  const contextValue: DialogContextProps = {
    open,
    openDialog,
    closeDialog,
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount or when open changes.
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <DialogOverlay onClick={closeDialog} />
    </DialogContext.Provider>
  )
}

export function DialogOverlay({ onClick }: { onClick: () => void }) {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("DialogOverlay must be used within a Dialog");
  }
  const { open } = context;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-999"
        />
      )}
    </AnimatePresence>,
    document.body
  );
}

export function DialogTrigger({ children, onClick, asChild, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement> & {asChild?: boolean}>) {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("DialogTrigger must be used within a Dialog");
  }
  const { openDialog } = context;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    openDialog();
  };
  if (asChild) {
    if (!React.isValidElement(children)) {
      throw new Error("DialogTrigger: when asChild is true, children must be a valid React element.");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(children as React.ReactElement<any>, {
      ...props,
      onClick: handleClick
    })
  }
  else {
    return (
      <button
        {...props}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
}

export function DialogContent({ children, className, ...props }: React.PropsWithChildren<HTMLMotionProps<'div'>>) {
  const [mounted, setMounted] = useState(false);
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("DialogContent must be used within a Dialog");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { open, closeDialog } = context;
  const variants: Variants = {
    transit: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
    }
  }
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={variants}
          initial='transit'
          animate='animate'
          exit='transit'
          transition={{ duration: 0.15 }}
          className={
            "fixed z-1000 overflow-y-auto p-4 pt-0 scrollbar top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 md:aspect-[6/7] not-md:w-full text-text bg-background border-2 border-gray-400/20 rounded-xl flex flex-col items-stretch" +
            (className ? " " + className : "")
          }
          aria-modal="true"
          {...props}
        >
          <button
            className="fixed z-10 top-4 right-4 text-2xl rounded-lg size-6 outline-none flex items-center justify-center text-center border-2 border-transparent hover:border-text transition-colors"
            onClick={() => closeDialog()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function DialogHeader({ children, className, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...props}
      className={"p-1 pt-5 text-xl font-bold sticky top-0 bg-background" + (className ? ' '+className : '')}
      // style={{
      //   // Option 1: Using sticky so header stays in view when body scrolls.
      //   position: "sticky",
      //   top: 0,
      //   background: "white",
      //   zIndex: 1,
      //   ...props.style,
      // }}
    >
      {children}
    </div>
  );
}

export function DialogBody({ children, className, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...props}
      className={"py-4 mb-auto" + (className ? ' '+className : '')}
    >
      {children}
    </div>
  )
}

export function DialogFooter({ children, className, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...props}
      className={"mt-auto bg-background z-10" + (className ? ' '+className : '')}
    >
      {children}
    </div>
  )
}

export function DialogActionBtn({ children, className, onClick, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("DialogCloseBtn must be used within a Dialog")
  }

  const { closeDialog } = context
  return (
    <button
      {...props}
      className={"py-2 px-4 bg-blue-500 rounded-lg text-white transition-all disabled:grayscale disabled:cursor-not-allowed not-disabled:cursor-pointer" + (className ? ' '+className : '')}
      onClick={
        e => {
          if (onClick !== undefined) {
            onClick(e)
          }
          closeDialog(true)
        }
      }
    >
      {children}
    </button>
  )
}

export function DialogCloseBtn({ children, className, onClick, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("DialogCloseBtn must be used within a Dialog")
  }
  const { closeDialog } = context
  return (
    <button
      {...props}
      className={"py-2 px-4 bg-red-500 rounded-lg text-white transition-all disabled:grayscale disabled:cursor-not-allowed not-disabled:cursor-pointer" + (className ? ' '+className : '')}
      onClick={
        e => {
          if (onClick !== undefined) {
            onClick(e)
          }
          closeDialog()
        }
      }
    >
      {children}
    </button>
  )
}