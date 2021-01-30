import { v4 as uuid } from "uuid";
import { TodoRequest } from "./todoRequest";

export class Todo {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    //no action
  }

  static ofText(text: string) {
    const todo = new Todo();
    todo.id = uuid();
    todo.text = text;
    todo.createdAt = new Date();
    return todo;
  }

  static ofRequest(todoRequest: TodoRequest) {
    return Object.assign(new Todo(), todoRequest);
  }

  public setUpdateAt(): void {
    this.updatedAt = new Date();
  }
}
