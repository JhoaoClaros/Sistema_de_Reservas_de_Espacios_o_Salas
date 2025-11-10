import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './equipo.entity';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private equipoRepository: Repository<Equipo>,
  ) {}

  findAll() {
    return this.equipoRepository.find({ relations: ['incidencias'] });
  }

  findOne(id: number) {
    return this.equipoRepository.findOne({ where: { id_equipo: id }, relations: ['incidencias'] });
  }

  create(data: Partial<Equipo>) {
    const nuevo = this.equipoRepository.create(data);
    return this.equipoRepository.save(nuevo);
  }

  update(id: number, data: Partial<Equipo>) {
    return this.equipoRepository.update(id, data);
  }

  delete(id: number) {
    return this.equipoRepository.delete(id);
  }
}
