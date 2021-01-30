import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { TodoService } from "./app.service";
import { Todo } from "./todo";
import { TodoRequest } from "./todoRequest";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(":id")
  getTodo(@Param("id") id: string): Todo {
    return this.todoService.getTodo(id);
  }

  @Get()
  getAllTodo(): Array<Todo> {
    return this.todoService.getAllTodo();
  }

  @Post()
  @HttpCode(201)
  addTodo(@Body() todoRequest: TodoRequest): Todo {
    const todo = Todo.ofText(todoRequest.text);
    this.todoService.addTodo(todo);
    return todo;
  }

  @Put()
  updateTodo(@Body() todoRequest: TodoRequest): Todo {
    const todo = Todo.ofRequest(todoRequest);
    this.todoService.updateTodo(todo);
    return todo;
  }

  @Delete()
  deleteTodo(@Body() todoRequest: TodoRequest): void {
    const todo = Todo.ofRequest(todoRequest);
    this.todoService.deleteTodo(todo);
    return;
  }
}
