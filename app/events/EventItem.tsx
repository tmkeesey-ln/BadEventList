import type { Event } from "@/lib/models/Event";
import { useTrack } from "@/lib/tracking";
import { type FC, useCallback } from "react";
export type EventItemProps = {
  event: Event;
  index: number;
  onClick: (event: Event) => void;
};
export const EventItem: FC<EventItemProps> = ({ event, index, onClick }) => {
  const track = useTrack();
  const handleClick = useCallback(
    (event: any) => {
      onClick?.(event);
      event.stopPropagation();
      track?.(
        "Events",
        "Event",
        event.name,
        index,
        new Date().valueOf() / 1000
      );
    },
    [track]
  );
  if (!event.name || !event.timestamp || !event.url) {
    return null;
  }
  if (event.type === "livestream") {
    return (
      <li>
        <a onClick={handleClick}>
          <header>{event.name} [Livestream]</header>
          <time dateTime={new Date(event.timestamp).toISOString()}>
            {new Date(event.timestamp).toUTCString()}
          </time>
        </a>
      </li>
    );
  } else if (event.type === "regular") {
    return (
      <li>
        <a onClick={handleClick}>
          <header>{event.name}</header>
          <time dateTime={new Date(event.timestamp).toISOString()}>
            {new Date(event.timestamp).toLocaleString()}
          </time>
        </a>
      </li>
    );
  } else {
    return null;
  }
};
