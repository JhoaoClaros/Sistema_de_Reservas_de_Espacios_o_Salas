import { Test, TestingModule } from '@nestjs/testing';
import { IncidenciaService } from './incidencias.service';

describe('IncidenciasService', () => {
  let service: IncidenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidenciaService],
    }).compile();

    service = module.get<IncidenciaService>(IncidenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
