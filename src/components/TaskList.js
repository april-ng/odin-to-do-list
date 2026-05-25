import AppState from "../models/AppState.js";
import { createTaskCard } from "./TaskCard.js";

// ─── Helper: create the add task button ──────────────────
function createAddTaskButton(onAddTask) {
  const btn = document.createElement("button");
  btn.classList.add("add-task-btn");

  const icon = document.createElement("span");
  icon.classList.add("material-icons");
  icon.textContent = "add";

  const label = document.createElement("span");
  label.textContent = "Add task";

  btn.appendChild(icon);
  btn.appendChild(label);
  btn.addEventListener("click", onAddTask);

  return btn;
}

// ─── Helper: create empty state ──────────────────────────
function createEmptyState() {
  const empty = document.createElement("div");
  empty.classList.add("empty-state");

  const icon = document.createElement("span");
  icon.classList.add("material-icons");
  icon.textContent = "checklist";

  const message = document.createElement("p");
  message.textContent = "No tasks yet. Add one to get started!";

  empty.appendChild(icon);
  empty.appendChild(message);

  return empty;
}

// ─── Main render function ─────────────────────────────────
function render(listId, onAddTask, onEditTask, onDeleteTask, onToggleComplete) {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  const list = AppState.lists.find((l) => l.id === listId);
  if (!list) return;

  // List title
  const title = document.createElement("h1");
  title.classList.add("list-title");
  title.textContent = list.name;
  main.appendChild(title);

  // Tasks
  const tasks = AppState.getTasksByList(listId);

  if (tasks.length === 0) {
    main.appendChild(createEmptyState());
  } else {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    tasks.forEach((task) => {
      const card = createTaskCard(
        task,
        onEditTask,
        onDeleteTask,
        onToggleComplete,
      );
      taskContainer.appendChild(card);
    });

    main.appendChild(taskContainer);
  }

  // Add task button
  main.appendChild(createAddTaskButton(onAddTask));
}

export { render };
