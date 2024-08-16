import type { Event } from "@/lib/models/Event";
import axios from "axios";
import { EventList } from "./EventList";
export default async function EventsPage() {
  const events = await axios
    .get<{ events: readonly Partial<Event>[] }>("/api/events")
    .then((response) => response.data.events);
  return (
    <main>
      <EventList events={events} title="Events" />
    </main>
  );
}
