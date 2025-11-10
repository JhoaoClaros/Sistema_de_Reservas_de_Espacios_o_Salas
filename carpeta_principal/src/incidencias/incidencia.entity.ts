import { Entity, PrimaryGeneratedColumn, Column, ManyToOne , JoinColumn } from 'typeorm';
import { Equipo } from '../equipo/equipo.entity';

@Entity()
export class Incidencia {
  @PrimaryGeneratedColumn()
  id_incidencia: number;

  @Column('text')
  descripcion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_reporte: Date;

  @Column({
    type: 'varchar',
    length: 20,
    default: 'Pendiente',
  })
  estado: string;

  @ManyToOne(() => Equipo, (equipo) => equipo.incidencias, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_equipo' })
  equipo: Equipo;
}
