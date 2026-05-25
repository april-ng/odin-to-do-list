import AppState from "../models/AppState.js";

// ─── Helper: create a form group ─────────────────────────
function createFormGroup(labelText, input) {
  const group = document.createElement("div");
  group.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;

  group.appendChild(label);
  group.appendChild(input);

  return group;
}

// ─── Helper: create the priority select ──────────────────
function createPrioritySelect(value = "low") {
  const select = document.createElement("select");
  select.classList.add("priority-select");

  ["low", "medium", "high"].forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    if (priority === value) option.selected = true;
    select.appendChild(option);
  });

  return select;
}

// ─── Open the modal ───────────────────────────────────────
function open({ task = null, listId = null, onSave }) {
  const overlay = document.getElementById("modal-overlay");
  overlay.innerHTML = "";
  overlay.classList.remove("hidden");

  const isEditMode = task !== null;

  // Modal container
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Title
  const title = document.createElement("h2");
  title.classList.add("modal-title");
  title.textContent = isEditMode ? "Edit Task" : "New Task";
  modal.appendChild(title);

  // Name field
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Task name";
  nameInput.value = isEditMode ? task.name : "";
  modal.appendChild(createFormGroup("Task name", nameInput));

  // Error message for name
  const nameError = document.createElement("p");
  nameError.classList.add("field-error", "hidden");
  nameError.textContent = "Task name is required";
  modal.appendChild(nameError);

  // Description field
  const descInput = document.createElement("textarea");
  descInput.placeholder = "Description (optional)";
  descInput.value = isEditMode ? task.description : "";
  modal.appendChild(createFormGroup("Description", descInput));

  // Due date field
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = isEditMode ? task.dueDate : "";
  modal.appendChild(createFormGroup("Due date", dateInput));

  // Priority field
  const prioritySelect = createPrioritySelect(
    isEditMode ? task.priority : "low",
  );
  modal.appendChild(createFormGroup("Priority", prioritySelect));

  // Action buttons
  const actions = document.createElement("div");
  actions.classList.add("form-actions");

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("btn", "btn-secondary");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", close);

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("btn", "btn-primary");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (!name) {
      nameInput.classList.add("input-error");
      nameError.classList.remove("hidden");
      return;
    }

    nameInput.classList.remove("input-error");
    nameError.classList.add("hidden");

    const data = {
      name,
      description: descInput.value.trim(),
      dueDate: dateInput.value,
      priority: prioritySelect.value,
      listId: isEditMode ? task.listId : listId,
    };

    if (isEditMode) {
      AppState.updateTask(task.id, data);
    } else {
      AppState.addTask(data);
    }

    close();
    onSave();
  });

  actions.appendChild(cancelBtn);
  actions.appendChild(saveBtn);
  modal.appendChild(actions);

  overlay.appendChild(modal);

  // Close when clicking the backdrop
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
}

// ─── Close the modal ──────────────────────────────────────
function close() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("hidden");
  overlay.innerHTML = "";
}

export { open, close };
