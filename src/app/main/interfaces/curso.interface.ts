interface Curso {
  nombre: string;
  acumulado: Tiempo;
  accion: string;
}

interface Tiempo {
  hora: number;
  minuto: number;
  segundo: number;
}

export { Curso, Tiempo };
