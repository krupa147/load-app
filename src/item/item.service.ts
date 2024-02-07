import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/entities/item.entity';
import { CreateItemDto, UpdateItemDto } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    return this.itemRepository.findOneOrFail({ where: {id: id} });
  }

  async create(item: CreateItemDto): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async update(id: number, item: UpdateItemDto): Promise<Item> {
    await this.itemRepository.update(id, item);
    console.log(item);
    return this.itemRepository.findOneOrFail({ where: {id: id} });

  }

  async delete(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}