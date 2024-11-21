import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data } from './data.schema';

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private readonly dataModel: Model<Data>) {}

  async findAll(): Promise<Data[]> {
    return this.dataModel.find().exec();
  }

  async create(data: Partial<Data>): Promise<Data> {
    const newData = new this.dataModel(data);
    return newData.save();
  }
}
