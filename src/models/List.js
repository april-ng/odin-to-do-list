export default class List {
  constructor({ id, name }) {
    this.id = id ?? crypto.randomUUID();
    this.name = name;
  }

  static fromJSON(data) {
    return new List(data);
  }
}
