import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { ParseIntPipe } from 'src/conception/pipe';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
}
