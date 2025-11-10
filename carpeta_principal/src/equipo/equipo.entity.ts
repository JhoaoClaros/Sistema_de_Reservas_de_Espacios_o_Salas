import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Incidencia } from '../incidencias/incidencia.entity';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id_equipo: number;

  @Column({ length: 100 })
  nombre_equipo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({
    type: 'varchar',
    length: 20,
    default: 'Disponible',
  })
  estado: string;


  @OneToMany(() => Incidencia, (incidencia) => incidencia.equipo)
  incidencias: Incidencia[];
}
