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
  public async createTask(body: Task): Promise<Task> {
    return this.taskSchema.create(body);
  }

  // получение всех задач
  public async getTasks(): Promise<Task[]> {
    return this.taskSchema.find().exec();
  }

  // редактирование задачи
  public async editTask(id: string, body: Task): Promise<Task> {
    return this.taskSchema.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { returnDocument: 'after' }
    )
      .exec();
  }

  // удаление задачи
  public async deleteTask(id: string): Promise<Task> {
    return this.taskSchema.findByIdAndDelete({ _id: id }).exec();
  }

}
