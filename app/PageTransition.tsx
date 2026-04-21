"use client";

import { createContext, useContext, useEffect, useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

type TransitionContextType = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransitionNav() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransitionNav must be used inside TransitionProvider");
  return ctx;
}

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCovering, setIsCovering] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const navigate = (href: string) => {
    if (href === pathname) return; // no transition if same page
    setIsCovering(true);
    setPendingHref(href);
  };

  // After the cover fades in, actually navigate
  useEffect(() => {
    if (isCovering && pendingHref) {
      const timer = setTimeout(() => {
        router.push(pendingHref);
        setPendingHref(null);
      }, 400); // match fade-in duration
      return () => clearTimeout(timer);
    }
  }, [isCovering, pendingHref, router]);

  // When pathname changes, fade out the cover
  useEffect(() => {
    if (isCovering && !pendingHref) {
      const timer = setTimeout(() => {
        setIsCovering(false);
      }, 100); // small delay so new page has a moment to render
      return () => clearTimeout(timer);
    }
  }, [pathname, isCovering, pendingHref]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {isCovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black pointer-events-none"
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}