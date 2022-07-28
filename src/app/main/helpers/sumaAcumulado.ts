import { Tiempo } from '../interfaces/curso.interface';

const sumaAcumulado = (actual: Tiempo, acumular: Tiempo): Tiempo => {
  const secActual = actual.hora * 3600 + actual.minuto * 60 + actual.segundo;
  const secAcumular =
    acumular.hora * 3600 + acumular.minuto * 60 + acumular.segundo;

  const secTotales = secActual + secAcumular;
  const hora = Math.floor(secTotales / 3600);
  const minuto = Math.floor((secTotales / 60) % 60);
  const segundo = secTotales % 60;

  return { hora, minuto, segundo };
};

export { sumaAcumulado };
