import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoModule } from './equipo/equipo.module';
import { IncidenciaModule } from './incidencias/incidencias.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // cambia según tu usuario
      password: '123qwe',
      database: 'sistema_reservas',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Solo para desarrollo
    }),
    EquipoModule,
    IncidenciaModule,
   
  ],
})
export class AppModule {}
