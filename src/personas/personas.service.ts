import { Injectable } from '@nestjs/common';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonasService {
  private personas: Persona[] = [];

  create(datosPersona: Persona) {
    this.personas.push(datosPersona);

    return 'Persona creada';
  }

  findAll() {
    return this.personas;
  }

  findOne(id: number) {
    const index = this.personas.findIndex((persona) => persona.id === id);

    if (index === -1) {
      return 'No encontrado';
    }

    return this.personas[index];
  }

  update(id: number, datosPersona: Persona) {
    const index = this.personas.findIndex((persona) => persona.id === id);

    if (index === -1) {
      return 'No encontrado';
    }

    this.personas[index] = datosPersona;

    return `Actualizado ${id}`;
  }

  remove(id: number) {
    this.personas = this.personas.filter((persona) => persona.id !== id);

    return `Eliminado ${id}`;
  }
}
