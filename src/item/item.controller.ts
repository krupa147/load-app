import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto, UpdateItemDto } from './item.dto';

@Controller("items")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll() {
    return this.itemService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemService.findOne(id)
  }

  @Post()
  create(@Body('item') createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body('item') updateItemDto: UpdateItemDto) {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemService.delete(id);
  }
}