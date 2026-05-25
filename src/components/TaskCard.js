import AppState from "../models/AppState.js";
import { format } from "date-fns";

// ─── Helper: create a material icon ──────────────────────
function createIcon(name) {
  const icon = document.createElement("span");
  icon.classList.add("material-icons");
  icon.textContent = name;
  return icon;
}

// ─── Helper: create the priority chip ────────────────────
function createChip(priority) {
  const chip = document.createElement("span");
  chip.classList.add("chip", priority);
  chip.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
  return chip;
}

// ─── Main: create a single task card ─────────────────────
function createTaskCard(task, onEdit, onDelete, onToggleComplete) {
  const card = document.createElement("div");
  card.classList.add("task-card");

  // ── Complete button ──────────────────────────────────
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("task-complete-btn");
  if (task.completed) completeBtn.classList.add("completed");
  completeBtn.setAttribute("aria-label", "Toggle complete");
  completeBtn.appendChild(
    createIcon(task.completed ? "check_circle" : "radio_button_unchecked"),
  );
  completeBtn.addEventListener("click", () => onToggleComplete(task.id));

  // ── Task body ────────────────────────────────────────
  const body = document.createElement("div");
  body.classList.add("task-body");

  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.textContent = task.name;

  body.appendChild(taskName);

  if (task.description) {
    const desc = document.createElement("div");
    desc.classList.add("task-description");
    desc.textContent = task.description;
    body.appendChild(desc);
  }

  // Meta row: date + chip
  const meta = document.createElement("div");
  meta.classList.add("task-meta");

  if (task.dueDate) {
    const dateWrapper = document.createElement("div");
    dateWrapper.classList.add("task-date");
    dateWrapper.appendChild(createIcon("calendar_today"));

    const dateText = document.createElement("span");
    dateText.textContent = format(
      new Date(task.dueDate + "T00:00:00"),
      "MMM d",
    );
    dateWrapper.appendChild(dateText);
    meta.appendChild(dateWrapper);
  }

  meta.appendChild(createChip(task.priority));
  body.appendChild(meta);

  // ── Action buttons ───────────────────────────────────
  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("aria-label", "Edit task");
  editBtn.appendChild(createIcon("edit"));
  editBtn.addEventListener("click", () => onEdit(task));

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.appendChild(createIcon("delete"));
  deleteBtn.addEventListener("click", () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.name}"?`,
    );
    if (confirmed) onDelete(task.id);
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  card.appendChild(completeBtn);
  card.appendChild(body);
  card.appendChild(actions);

  return card;
}

export { createTaskCard };
