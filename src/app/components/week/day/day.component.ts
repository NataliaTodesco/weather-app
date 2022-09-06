import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  @Input() day: any = {};
  @Input() tipo: string = "";

  max = 0;
  min = 0;
  fecha = '' + new Date();

  constructor() {}
  
  ngOnInit(): void {
    this.definirTipo()

    let fec = new Date();
    this.fecha = this.formatoFecha(fec);
  }

  formatoFecha(fec: any) {
    let año = fec.getFullYear();
    let mes = fec.getMonth() + 1;
    let month = fec.getMonth() + 1;
    let dia = Number(fec.getDate()) + 1;
    let day = '' + Number(fec.getDate()) + 1;

    if (dia < 10) {
      day = '0' + dia;
    }

    if (mes < 10) {
      month = '0' + mes;
    }

    return año + '-' + month + '-' + day;
  }

  definirTipo(){
    if (this.tipo === '°C'){
      this.max = Math.round(this.day.day.maxtemp_c);
      this.min = Math.round(this.day.day.mintemp_c);
    }
    else {
      this.max = Math.round(this.day.day.maxtemp_f);
      this.min = Math.round(this.day.day.mintemp_f);
    }
  }
}
