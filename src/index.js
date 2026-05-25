import "./styles.css";
import AppState from "./models/AppState.js";
import * as Sidebar from "./components/Sidebar.js";
import * as TaskList from "./components/TaskList.js";
import * as TaskForm from "./components/TaskForm.js";
import * as ListForm from "./components/ListForm.js";

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
    () =>
      ListForm.open({
        onSave: renderAll,
      }),
    // WHEN edit is clicked
    (list) =>
      ListForm.open({
        list,
        onSave: renderAll,
      }),
  );

  if (activeListId) {
    TaskList.render(
      activeListId,
      // WHEN add task is clicked
      () =>
        TaskForm.open({
          listId: activeListId,
          onSave: renderAll,
        }),
      // WHEN edit task is clicked
      (task) =>
        TaskForm.open({
          task,
          onSave: renderAll,
        }),
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
