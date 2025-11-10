import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { Equipo } from './equipo.entity';

@Controller('equipos')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get()
  findAll() {
    return this.equipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.equipoService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Equipo>) {
    return this.equipoService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Equipo>) {
    return this.equipoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.equipoService.delete(id);
  }
}
