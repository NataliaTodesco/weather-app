import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
  tipo: string = '°C'

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.agregarTipo('°C')
    this.weatherService.getTipo().subscribe(
      (data) => {
        this.tipo = data;
      },
      (error) => console.log(error)
    )
  }

  cambiarTipo(tipo: string){
    this.weatherService.agregarTipo(tipo);
  }
}
