import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

// Define module
@Module({
  imports: [TaskModule],
})
export class AppModule {}
