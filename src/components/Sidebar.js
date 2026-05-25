import AppState from "../models/AppState.js";

// ─── Helper: create a material icon ──────────────────────
function createIcon(name) {
  const icon = document.createElement("span");
  icon.classList.add("material-icons");
  icon.textContent = name;
  return icon;
}

// ─── Render a single nav item ─────────────────────────────
function createNavItem(
  list,
  activeListId,
  onListSelect,
  onEditList,
  onDeleteList,
) {
  const item = document.createElement("div");
  item.classList.add("nav-item");
  if (list.id === activeListId) item.classList.add("active");

  // Left side: dot + name
  const left = document.createElement("div");
  left.classList.add("nav-item-left");

  const dot = document.createElement("span");
  dot.classList.add("nav-dot");

  const name = document.createElement("span");
  name.textContent = list.name;

  left.appendChild(dot);
  left.appendChild(name);

  // Right side: edit + delete buttons
  const actions = document.createElement("div");
  actions.classList.add("nav-item-actions");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("aria-label", "Edit list");
  editBtn.appendChild(createIcon("edit"));

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("aria-label", "Delete list");
  deleteBtn.appendChild(createIcon("delete"));

  editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    onEditList(list);
  });

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const confirmed = window.confirm(
      `Are you sure you want to delete "${list.name}"? All tasks in this list will be deleted too.`,
    );
    if (confirmed) onDeleteList(list.id);
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  item.addEventListener("click", () => onListSelect(list.id));

  item.appendChild(left);
  item.appendChild(actions);

  return item;
}

// ─── Main render function ─────────────────────────────────
function render(
  activeListId,
  onListSelect,
  onAddList,
  onEditList,
  onDeleteList,
) {
  const navList = document.getElementById("nav-list");
  navList.innerHTML = "";

  // Section header
  const sectionLabel = document.createElement("div");
  sectionLabel.classList.add("sidebar-section-label");

  const labelText = document.createElement("span");
  labelText.textContent = "LIST";

  const addBtn = document.createElement("button");
  addBtn.setAttribute("aria-label", "Add list");
  addBtn.appendChild(createIcon("add"));
  addBtn.addEventListener("click", onAddList);

  sectionLabel.appendChild(labelText);
  sectionLabel.appendChild(addBtn);
  navList.appendChild(sectionLabel);

  // Nav items
  AppState.lists.forEach((list) => {
    const item = createNavItem(
      list,
      activeListId,
      onListSelect,
      onEditList,
      onDeleteList,
    );
    navList.appendChild(item);
  });
}

export { render };
