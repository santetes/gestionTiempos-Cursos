import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { sumaAcumulado } from '../helpers/sumaAcumulado';
import { Curso, Tiempo } from '../interfaces/curso.interface';
import { GestionCursosService } from '../services/gestion-cursos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  accion: string = '';

  get listadoCursos() {
    return this.gestionCursosService.listadoCursos;
  }

  constructor(
    private gestionCursosService: GestionCursosService,
    private cd: ChangeDetectorRef
  ) {
    gestionCursosService.leerCursosLocalStorage();
  }

  ngOnInit(): void {}

  play(i: number) {
    this.listadoCursos[i].accion = 'play';
  }
  stop(i: number) {
    this.listadoCursos[i].accion = 'stop';
  }
  pause(i: number) {
    this.listadoCursos[i].accion = 'pause';
  }

  recibirTiempoAcumular(tiempo: Tiempo, i: number) {
    const actual: Tiempo = this.listadoCursos[i].acumulado;
    const acumular: Tiempo = tiempo;

    const tiempoTotal: Tiempo = sumaAcumulado(actual, acumular);

    this.listadoCursos[i].acumulado = tiempoTotal;
    this.gestionCursosService.almacenarCursosLocalStorage();
    this.cd.detectChanges();
  }

  borrar(i: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Seguro que quieres borrar la tarea?',
        text: 'Esto no sera reversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Borrala!',
        cancelButtonText: 'No, Espera!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Borrada!',
            'Tu tarea ha sido borrada.',
            'success'
          );
          this.gestionCursosService.borrarCurso(i);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'La tarea aún se encuentra entre nosotros :)',
            'error'
          );
        }
      });
  }
}
