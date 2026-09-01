import create from "zustand";

/**
 * Zustand Store
 *
 * You can add global state to the app using this useGlobalState, to get & set
 * values from anywhere in the app.
 *
 * Think about it as a global useState.
 */

type GlobalState = {
  ensRecords: any;
  setEnsRecords: (newEnsRecords: any) => void;
};

export const useGlobalState = create<GlobalState>(set => ({
  ensRecords: {},
  setEnsRecords: (newEnsRecords: any) => set(() => ({ ensRecords: newEnsRecords })),
}));
