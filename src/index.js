import "./styles.css";
import AppState from "./models/AppState.js";
import * as Sidebar from "./components/Sidebar.js";
import * as TaskList from "./components/TaskList.js";

let activeListId = null;

function renderAll() {
  Sidebar.render(
    activeListId,
    // WHEN a list is clicked
    (listId) => {
      activeListId = listId;
      renderAll();
    },
    // WHEN "+" is clicked
    () => console.log("add list clicked"),
    // WHEN edit is clicked
    (list) => console.log("edit list clicked", list),
    // WHEN delete is clicked
    (listId) => {
      AppState.deleteList(listId);
      if (activeListId === listId) activeListId = null;
      renderAll();
    },
  );

  if (activeListId) {
    TaskList.render(
      activeListId,
      // WHEN add task is clicked
      () => console.log("add task clicked"),
      // WHEN edit task is clicked
      (task) => console.log("edit task clicked", task),
      // WHEN delete task is clicked
      (taskId) => {
        AppState.deleteTask(taskId);
        renderAll();
      },
      // WHEN complete is clicked
      (taskId) => {
        const task = AppState.tasks.find((t) => t.id === taskId);
        AppState.updateTask(taskId, { completed: !task.completed });
        renderAll();
      },
    );
  }
}

// Boot the app
AppState.init();
activeListId = AppState.lists[0]?.id ?? null;
renderAll();
