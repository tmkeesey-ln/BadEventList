import { useContext } from "react";
import { TrackingContext } from "./context";
export const useTrack = () => {
  const { track } = useContext(TrackingContext) ?? {};
  return track;
};
