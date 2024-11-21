import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from './data.schema';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async getAll(): Promise<Data[]> {
    return this.dataService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<Data>): Promise<Data> {
    return this.dataService.create(data);
  }
}
