import { Injectable } from "@nestjs/common";
import { Todo } from "./todo";
@Injectable()
export class TodoService {
  private todoMap = new Map<string, Todo>();
  getTodo(id: string): Todo {
    if (this.todoMap.has(id)) {
      return this.todoMap.get(id);
    }
    return undefined;
  }

  getAllTodo(): Array<Todo> {
    const list: Array<Todo> = [];
    for (const t of this.todoMap.values()) {
      list.push(t);
    }
    return list;
  }

  addTodo(todo: Todo): void {
    this.todoMap.set(todo.id, todo);
    return;
  }

  updateTodo(todo: Todo): void {
    if (this.todoMap.has(todo.id)) {
      todo.setUpdateAt();
      this.todoMap.set(todo.id, todo);
    }
    return;
  }

  deleteTodo(todo: Todo): void {
    if (this.todoMap.has(todo.id)) {
      this.todoMap.delete(todo.id);
    }
    return;
  }
}
