import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/task-manager'),
    TaskModule
  ],
})

export class AppModule {}
