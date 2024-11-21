import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { Data, DataSchema } from './data.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }])],
  providers: [DataService],
  controllers: [DataController],
})
export class DataModule {}
