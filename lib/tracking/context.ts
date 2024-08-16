import { createContext } from "react";
export type TrackingContextType = {
  readonly track: (
    page: string,
    type: string,
    label: string,
    index: number,
    time: number
  ) => void;
};
export const TrackingContext = createContext<TrackingContextType | undefined>(
  undefined
);
