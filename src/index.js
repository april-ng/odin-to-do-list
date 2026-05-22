import "./styles.css";
import AppState from "./models/AppState.js";
import * as Sidebar from "./components/Sidebar.js";

// keep track of which list is currently selected
let activeListId = null;

function renderSidebar() {
  Sidebar.render(
    activeListId,
    // WHEN a list is clicked
    (listId) => {
      activeListId = listId;
      renderSidebar();
    },
    // WHEN "+" is clicked
    () => console.log("add list clicked"),
    // WHEN edit is clicked
    (list) => console.log("edit list clicked", list),
    // WHEN delete is clicked
    (listId) => console.log("delete list clicked", listId),
  );
}

// Boot the app
AppState.init();
renderSidebar();
