import { Module } from "@nestjs/common";
import { TodoController } from "./app.controller";
import { TodoService } from "./app.service";

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
