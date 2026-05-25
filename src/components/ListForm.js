import AppState from "../models/AppState.js";

// ─── Open the modal ───────────────────────────────────────
function open({ list = null, onSave }) {
  const overlay = document.getElementById("modal-overlay");
  overlay.innerHTML = "";
  overlay.classList.remove("hidden");

  const isEditMode = list !== null;

  // Modal container
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Title
  const title = document.createElement("h2");
  title.classList.add("modal-title");
  title.textContent = isEditMode ? "Edit List" : "New List";
  modal.appendChild(title);

  // Name field
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "List name";
  nameInput.value = isEditMode ? list.name : "";

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = "List name";

  formGroup.appendChild(label);
  formGroup.appendChild(nameInput);
  modal.appendChild(formGroup);

  // Error message
  const nameError = document.createElement("p");
  nameError.classList.add("field-error", "hidden");
  nameError.textContent = "List name is required";
  modal.appendChild(nameError);

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

    if (isEditMode) {
      AppState.updateList(list.id, name);
    } else {
      AppState.addList(name);
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
