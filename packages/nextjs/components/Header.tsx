"use client";

import React from "react";
import Link from "next/link";
// import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { SwitchTheme } from "~~/components/SwitchTheme";
import MpLogo from "~~/public/logo.svg";

type HeaderMenuLink = {
  label: string;
  href: string;
};

export const menuLinks: HeaderMenuLink[] = [
  { label: "About", href: "/#About" },
  { label: "Projects", href: "/#Projects" },
  { label: "Experience", href: "/#Experience" },
  { label: "Achievements", href: "/#Achievements" },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1H-5nsbQjDQPvQYtGq6Y91_NAwTxjicJEVXbtxtorsKI/edit?usp=sharing",
  },
];

/**
 * Site header
 */
export const Header = () => {
  return (
    <div className="navbar border-b border-primary lg:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost lg:hidden">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-primary-content rounded-box w-52"
          >
            {menuLinks.map(({ label, href }) => {
              return (
                <li key={href}>
                  <Link href={href} passHref className={`font-cubano text-2xl hover:text-accent`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/" passHref>
          <MpLogo width={35} height={35} className="w-10 h-10 hidden lg:flex hover:text-accent" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 py-4">
          {menuLinks.map(({ label, href }) => {
            return (
              <li key={href}>
                <Link
                  href={href}
                  passHref
                  className={`font-cubano text-2xl hover:text-accent rounded-md hover:bg-base-300`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
      </div>
    </div>
  );
};
