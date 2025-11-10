import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidencia } from './incidencia.entity';
import { IncidenciaService } from './incidencias.service';
import { IncidenciaController } from './incidencias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Incidencia])],
  controllers: [IncidenciaController],
  providers: [IncidenciaService],
})
export class IncidenciaModule {}

