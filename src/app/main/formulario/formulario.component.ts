import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GestionCursosService } from '../services/gestion-cursos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor(private gestionCursosService: GestionCursosService) {}

  ngOnInit(): void {}

  incluir() {
    this.gestionCursosService.incluirCurso({
      nombre: this.miFormulario.controls['nombre'].value,
      acumulado: { hora: 0, minuto: 0, segundo: 0 },
      accion: '',
    });
    this.miFormulario.resetForm();
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['nombre']?.invalid &&
      this.miFormulario?.controls['nombre']?.touched
    );
  }
}
