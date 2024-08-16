# Bad Event List

This is a project meant to load and display a list of performance events. The code has a number of issues, including:

- bugs
- code "smells"
- invalid uses

Read the functional requirements below, and then look through the code to find issues. The issues will _only_ be in `app/events/` — no need to look elsewhere. The code is not meant to be run — it will not actually work since there is no API.

Feel free to:

- Ask questions.
- Look things up online.
- Use AI assistance.

## Functional Requirements

Given a list of event objects (each representing a concert/show/live event/livestream):

- Display a title for the list (provided in properties).
- Display the event names and times in a list in chronological order.
- Filter out any events with incomplete information.
- If there are no events with sufficient information, display a message to the user.
- Link each list item to the event's URL.
- When the link is clicked, call an event-tracking function passed through context.
