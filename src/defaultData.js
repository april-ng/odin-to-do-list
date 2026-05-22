export const defaultLists = [
  { id: "list-work", name: "Work" },
  { id: "list-personal", name: "Personal" },
  { id: "list-travel", name: "Travel" },
];

export const defaultTasks = [
  // Work
  {
    id: "task-1",
    name: "Prepare Q3 report",
    description: "Review last quarter metrics and compile slides",
    dueDate: "2026-06-03",
    priority: "high",
    listId: "list-work",
    completed: false,
  },
  {
    id: "task-2",
    name: "Schedule team standup",
    description: "Set up recurring 9am meeting on calendar",
    dueDate: "2026-05-23",
    priority: "medium",
    listId: "list-work",
    completed: false,
  },
  {
    id: "task-3",
    name: "Reply to client proposal",
    description: "Send feedback on the revised contract draft",
    dueDate: "2026-05-21",
    priority: "high",
    listId: "list-work",
    completed: false,
  },

  // Personal
  {
    id: "task-4",
    name: "Book dentist appointment",
    description: "Annual checkup, call Dr. Park's office",
    dueDate: "2026-06-15",
    priority: "low",
    listId: "list-personal",
    completed: false,
  },
  {
    id: "task-5",
    name: "Renew gym membership",
    description: "Monthly plan expires at end of May",
    dueDate: "2026-05-31",
    priority: "medium",
    listId: "list-personal",
    completed: false,
  },
  {
    id: "task-6",
    name: "Buy birthday gift for mom",
    description: "She likes candles and cookbooks",
    dueDate: "2026-06-08",
    priority: "high",
    listId: "list-personal",
    completed: false,
  },

  // Travel
  {
    id: "task-7",
    name: "Research Lisbon hotels",
    description: "Look for places near Alfama, budget ~$150/night",
    dueDate: "2026-06-20",
    priority: "low",
    listId: "list-travel",
    completed: false,
  },
  {
    id: "task-8",
    name: "Check visa requirements",
    description: "Confirm entry rules for Portugal",
    dueDate: "2026-06-01",
    priority: "medium",
    listId: "list-travel",
    completed: false,
  },
  {
    id: "task-9",
    name: "Book airport transfer",
    description: "Flight lands at 11pm, need pickup",
    dueDate: "2026-06-18",
    priority: "low",
    listId: "list-travel",
    completed: false,
  },
];
