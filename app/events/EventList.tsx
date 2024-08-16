import type { Event } from "@/lib/models/Event";
import { useRouter } from "next/navigation";
import { FC, useCallback, useMemo } from "react";
import { EventItem } from "./EventItem";
export type EventListProps = {
  events: readonly Partial<Event>[];
  title: string;
};
export const EventList: FC<EventListProps> = ({ events, title }) => {
  const hasEvents = useMemo(() => events.length > 0, [events]);
  if (!hasEvents) {
    return (
      <section>
        <header>{title}</header>
        <p>There are no events.</p>
      </section>
    );
  }
  const processedEvents = useMemo(
    () =>
      events
        .filter((event) => event.name && event.timestamp && event.url)
        .sort((a, b) => ((a.timestamp ?? 0) < (b.timestamp ?? 0) ? -1 : 0)),
    [events, title]
  );
  const hasProcessedEvents = useMemo(
    () => processedEvents.length > 0,
    [processedEvents]
  );
  if (!hasProcessedEvents) {
    return (
      <section>
        <header>{title}</header>
        <p>There are no events.</p>
      </section>
    );
  }
  const router = useRouter();
  const handleEventClick = useCallback(
    (event: Event) => {
      router.push(event.url);
    },
    [router]
  );
  return (
    <section>
      <header>{title}</header>
      <ul>
        {events.map((event, index) => (
          <EventItem
            onClick={handleEventClick}
            event={event as Event}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};
