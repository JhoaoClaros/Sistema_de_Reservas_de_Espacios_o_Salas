import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incidencia } from './incidencia.entity';

@Injectable()
export class IncidenciaService {
  constructor(
    @InjectRepository(Incidencia)
    private readonly repo: Repository<Incidencia>,
  ) {}

  private readonly relations = ['equipo'];

  findAll() {
    return this.repo.find({ relations: this.relations });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_incidencia: id }, relations: this.relations });
  }

  async create(data: any) {
    const incidencia = this.repo.create({
      descripcion: data.descripcion,
      estado: data.estado,
      equipo: { id_equipo: data.id_equipo },
    });
    await this.repo.save(incidencia);
    return this.findOne(incidencia.id_incidencia);
  }

  async update(id: number, data: Partial<Incidencia>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}

