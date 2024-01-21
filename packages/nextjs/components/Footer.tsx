"use client";

import { socials } from "~~/components/buildfolio";

export function Footer() {
  return (
    <footer className="flex justify-center gap-4 py-2 border-t border-base-content">
      {socials.map(({ url, icon, id }) => (
        <a key={id} href={url} className="inline-block p-2 mr-3 rounded-full" target="_blank" rel="noreferrer">
          <span className="text-base-content">{icon}</span>
        </a>
      ))}
    </footer>
  );
}
