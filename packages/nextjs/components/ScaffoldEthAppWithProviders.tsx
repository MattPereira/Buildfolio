"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { ensName } from "~~/buildfolio.config";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useFetchEnsRecords } from "~~/hooks/buildfolio";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

// import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
// import { BlockieAvatar } from "~~/components/scaffold-eth";
// import { useDarkMode } from "~~/hooks/scaffold-eth/useDarkMode";
// import { appChains } from "~~/services/web3/wagmiConnectors";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  const { records } = useFetchEnsRecords(ensName);
  const setEnsRecords = useGlobalState(state => state.setEnsRecords);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    if (records) {
      setEnsRecords(records);
    }
  }, [setEnsRecords, records]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

/**
 * If I don't comment out RainbowKitProvider, error is thrown about mismatched client / server
 * Warning: Prop `dangerouslySetInnerHTML` did not match.
 */
export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  // const { isDarkMode } = useDarkMode();

  return (
    <WagmiConfig config={wagmiConfig}>
      <ProgressBar />
      {/* <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={isDarkMode ? darkTheme() : lightTheme()}
      > */}
      <ScaffoldEthApp>{children}</ScaffoldEthApp>
      {/* </RainbowKitProvider> */}
    </WagmiConfig>
  );
};
