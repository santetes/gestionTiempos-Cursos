import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { interval } from 'rxjs';
import { Tiempo } from '../interfaces/curso.interface';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit, OnChanges {
  //Atributos----
  @Input() accion: string = '';
  @Output() aumentarAcumulado = new EventEmitter<Tiempo>();
  interval: any;

  sec: number = 0;
  min: number = 0;
  hor: number = 0;

  constructor() {}
  ngOnChanges(): void {
    if (this.accion === 'play') {
      this.interval = setInterval(() => this.tik(), 1000);
    }
    if (this.accion === 'pause') {
      clearInterval(this.interval);
    }
    if (this.accion === 'stop') {
      clearInterval(this.interval);
      this.aumentarAcumulado.emit({
        hora: this.hor,
        minuto: this.min,
        segundo: this.sec,
      });
      this.sec = 0;
      this.min = 0;
      this.hor = 0;
    }
  }

  ngOnInit(): void {}

  tik() {
    this.sec++;
    if (this.sec >= 60) {
      this.sec = 0;
      this.min++;
      if (this.min >= 60) {
        this.min = 0;
        this.hor++;
      }
    }
  }
}
