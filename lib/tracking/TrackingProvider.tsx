"use client";
import type { PropsWithChildren } from "react";
import { TrackingContext, type TrackingContextType } from "./context";
export type TrackingProviderProps = PropsWithChildren<TrackingContextType>;
export const TrackingProvider = ({
  children,
  ...contextProps
}: TrackingProviderProps) => (
  <TrackingContext.Provider value={contextProps}>
    {children}
  </TrackingContext.Provider>
);
