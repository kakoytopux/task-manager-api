import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task } from "src/schemas/task.schema";

/**
 * сервис задач
 */

@Injectable()
export class TaskService {

  // внедрение модели
  constructor(@InjectModel(Task.name) private taskSchema: Model<Task>) {}

  // создает задачу
  public createTask(body: Task): Promise<Task> {
    return this.taskSchema.create(body);
  }

  // получение всех задач
  public getTasks(): Promise<Task[]> {
    return this.taskSchema.find();
  }

  // редактирование задачи
  public editTask(id: string, body: Task): Promise<Task> {
    return this.taskSchema.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { returnDocument: 'after' }
    );
  }

  // удаление задачи
  public deleteTask(id: string): Promise<Task> {
    return this.taskSchema.findByIdAndDelete({ _id: id });
  }

}
