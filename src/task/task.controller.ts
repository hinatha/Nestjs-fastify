import { Req, Res, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiFile } from './dto/file-upload.dto';
import { ApiConsumes } from '@nestjs/swagger';

import fastify = require('fastify');

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/uploadFile')
  @ApiConsumes('multipart/form-data')
  @ApiFile()
  async uploadFile(
    @Req() req: fastify.FastifyRequest,
    @Res() res: fastify.FastifyReply<any>,
  ): Promise<any> {
    return await this.taskService.uploadFile(req, res);
  }
}
