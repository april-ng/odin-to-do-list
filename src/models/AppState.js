import List from "./List.js";
import Task from "./Task.js";
import { defaultLists, defaultTasks } from "../defaultData.js";

const AppState = {
  lists: [],
  tasks: [],

  // ─── Boot ─────────────────────────────────────────────
  init() {
    const saved = localStorage.getItem("appState");
    if (saved) {
      const parsed = JSON.parse(saved);
      this.lists = parsed.lists.map((l) => List.fromJSON(l));
      this.tasks = parsed.tasks.map((t) => Task.fromJSON(t));
    } else {
      this.lists = defaultLists.map((l) => List.fromJSON(l));
      this.tasks = defaultTasks.map((t) => Task.fromJSON(t));
      this.save();
    }
  },

  // ─── Persist ──────────────────────────────────────────
  save() {
    localStorage.setItem(
      "appState",
      JSON.stringify({
        lists: this.lists,
        tasks: this.tasks,
      }),
    );
  },

  // ─── List operations ──────────────────────────────────
  addList(name) {
    const list = new List({ name });
    this.lists.push(list);
    this.save();
    return list;
  },

  updateList(id, name) {
    const list = this.lists.find((l) => l.id === id);
    if (list) {
      list.name = name;
      this.save();
    }
  },

  deleteList(id) {
    this.lists = this.lists.filter((l) => l.id !== id);
    this.tasks = this.tasks.filter((t) => t.listId !== id);
    this.save();
  },

  // ─── Task operations ──────────────────────────────────
  addTask(data) {
    const task = new Task(data);
    this.tasks.push(task);
    this.save();
    return task;
  },

  updateTask(id, changes) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      Object.assign(task, changes);
      this.save();
    }
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.save();
  },

  // ─── Helpers ──────────────────────────────────────────
  getTasksByList(listId) {
    return this.tasks.filter((t) => t.listId === listId);
  },
};

export default AppState;
