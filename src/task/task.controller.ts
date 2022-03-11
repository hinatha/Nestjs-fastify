import { Req, Res, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { FileUploadDto } from './dto/file-upload.dto'
import { 
  ApiOperation,
  ApiConsumes,
  ApiResponse,
  ApiBody
} from '@nestjs/swagger';

import fastify = require('fastify');

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/uploadFile')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ 
    summary: 'Execute taskService.uploadFile()', 
    description: 'File upload'
  })
  @ApiResponse({
    status: 200,
    description: 'Success upload file!'
  })
  @ApiBody({
    description: 'File object',
    type: FileUploadDto
  })
  async uploadFile(@Req() req: fastify.FastifyRequest, @Res() res: fastify.FastifyReply<any>): Promise<any> {
    return await this.taskService.uploadFile(req,res)
  }
}
