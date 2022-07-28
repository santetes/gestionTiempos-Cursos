import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root',
})
export class GestionCursosService {
  private _listadoCursos: Curso[] = [];

  get listadoCursos() {
    return [...this._listadoCursos];
  }

  constructor() {}

  leerCursosLocalStorage() {
    this._listadoCursos = JSON.parse(localStorage.getItem('cursos')!) ?? [];
  }

  almacenarCursosLocalStorage() {
    localStorage.setItem('cursos', JSON.stringify(this._listadoCursos));
  }

  incluirCurso(curso: Curso) {
    this._listadoCursos.push(curso);
    this.almacenarCursosLocalStorage();
  }

  borrarCurso(i: number) {
    this._listadoCursos.splice(i, 1);
    this.almacenarCursosLocalStorage();
  }
}
