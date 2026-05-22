export default class Task {
  constructor({
    id,
    name,
    description = "",
    dueDate = "",
    priority = "low",
    listId,
    completed = false,
  }) {
    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.listId = listId;
    this.completed = completed;
  }

  static fromJSON(data) {
    return new Task(data);
  }
}
