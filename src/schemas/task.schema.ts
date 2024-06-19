import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/**
 * схема задачи
 */

@Schema({
  timestamps: {
    updatedAt: false
  }
})
export class Task {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: Date, default: null })
  date_completion: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
