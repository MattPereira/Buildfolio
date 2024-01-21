"use client";

import { useEffect } from "react";
import { useIsMounted } from "usehooks-ts";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "~~/hooks/scaffold-eth/useDarkMode";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { isDarkMode, toggle } = useDarkMode();
  const isMounted = useIsMounted();

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", isDarkMode ? "scaffoldEthDark" : "scaffoldEth");
  }, [isDarkMode]);

  return (
    <div className={`flex space-x-2 text-sm ${className}`}>
      {isMounted() && (
        <label
          onClick={toggle}
          htmlFor="theme-toggle"
          className={`swap swap-rotate ${!isDarkMode ? "swap-active" : ""}`}
        >
          <SunIcon className="swap-on h-8 w-8" />
          <MoonIcon className="swap-off h-8 w-8" />
        </label>
      )}
    </div>
  );
};
