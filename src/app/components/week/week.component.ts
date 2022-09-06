import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
})
export class WeekComponent implements OnInit {
  week: Array<any> = [];
  tipo: string = '°C';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getTipo().subscribe(
      (data) => {
        this.tipo = data;
        this.obtenerClima(this.weatherService.lugar)
      },
      (error) => console.log(error)
    )

    this.weatherService.getLugar().subscribe(
      (data) => this.obtenerClima(data)
    )
  }

  obtenerClima(lugar: string){
    this.weatherService.obtenerClimaSemanal(lugar).subscribe(
      ({forecast}) => {
        let array = forecast.forecastday;
        array.shift();
        this.week = array;
      },
      (error) => console.log(error.message)
    )
  }
}
