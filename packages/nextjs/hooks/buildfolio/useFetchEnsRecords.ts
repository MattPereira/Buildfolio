"use client";

import { useEffect, useState } from "react";
import { createEnsPublicClient } from "@ensdomains/ensjs";
import { getAddressRecord, getTextRecord } from "@ensdomains/ensjs/public";
import { http } from "viem";
import { mainnet } from "viem/chains";

/**
 * @param ensName used to fetch records from ens contracts using ensjs library
 * @returns
 */
export const useFetchEnsRecords = (ensName: string) => {
  const [records, setRecords] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const client = createEnsPublicClient({
      chain: mainnet,
      transport: http(),
    });

    async function fetchEnsRecords() {
      try {
        setIsError(false);
        setIsLoading(true);
        // batch the requests for better performance
        const [ethAddress, twitterUsername, githubUsername, telegramUsername, title, name, description, avatar] =
          await client.ensBatch(
            getAddressRecord.batch({ name: ensName }),
            getTextRecord.batch({ name: ensName, key: "com.twitter" }),
            getTextRecord.batch({ name: ensName, key: "com.github" }),
            getTextRecord.batch({ name: ensName, key: "org.telegram" }),
            getTextRecord.batch({ name: ensName, key: "title" }),
            getTextRecord.batch({ name: ensName, key: "name" }),
            getTextRecord.batch({ name: ensName, key: "description" }),
            getTextRecord.batch({ name: ensName, key: "avatar" }),
          );
        const records = {
          ethAddress,
          twitterUsername,
          githubUsername,
          telegramUsername,
          title,
          name,
          description,
          avatar,
        };
        setRecords(records);
      } catch (error) {
        console.error("Error fetching address:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEnsRecords();
  }, [ensName]);

  return { records, isLoading, isError };
};
