import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { IncidenciaService } from './incidencias.service';
import { Incidencia } from './incidencia.entity';

@Controller('incidencias')
export class IncidenciaController {
  constructor(private readonly incidenciaService: IncidenciaService) {}

  @Get()
  findAll() {
    return this.incidenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.incidenciaService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Incidencia>) {
    return this.incidenciaService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Incidencia>) {
    return this.incidenciaService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.incidenciaService.delete(id);
  }
}
