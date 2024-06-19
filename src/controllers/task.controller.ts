import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Task } from "src/schemas/task.schema";
import { TaskService } from "src/services/task.service";

/**
 * контроллер задач
 */

@Controller('/api/task')
export class TaskController {

  // внедрение сервиса
  constructor(private taskService: TaskService) {}

  // создание задачи
  @Post()
  public createTask(@Body() body: Task): Promise<Task> {
    return this.taskService.createTask(body);
  }

  // получение всех задач
  @Get()
  public getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  // редактирование задачи
  @Patch('/:id')
  public editTask(@Param('id') id: string, @Body() body: Task): Promise<Task> {
    return this.taskService.editTask(id, body);
  }

  // удаление задачи
  @Delete('/:id')
  public deleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.deleteTask(id);
  }

}