"use client";

import { useEffect } from "react";
import { ensName } from "~~/buildfolio.config";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { ProgressBar } from "~~/components/ProgressBar";
import { useFetchEnsRecords } from "~~/hooks/buildfolio";
import { useGlobalState } from "~~/services/store/store";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const { records } = useFetchEnsRecords(ensName);
  const setEnsRecords = useGlobalState(state => state.setEnsRecords);

  useEffect(() => {
    if (records) {
      setEnsRecords(records);
    }
  }, [setEnsRecords, records]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <ScaffoldEthApp>{children}</ScaffoldEthApp>
    </>
  );
};
