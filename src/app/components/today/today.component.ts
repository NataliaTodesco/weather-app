import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  clima: any = {
    location: {
      region: 'Cordoba',
      country: 'Argentina',
      localtime: '2022-09-06 13:45',
    },
    current: {
      temp_c: 26.0,
      temp_f: 78.8,
      is_day: 1,
      condition: {
        text: 'Sunny',
        icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
        code: 1000,
      },
    },
  };
  temperatura: string = '';
  tipo: string = '';
  url: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getPosicionActual();
    this.weatherService.getTipo().subscribe(
      (data) => {
        this.tipo = data;
        this.obtenerClima(this.weatherService.lugar)
      },
      (error) => console.log(error)
    );
    this.weatherService.getLugar().subscribe(
      (place) => this.obtenerClima(place)
    )
  }

  obtenerClima(lugar: string) {
    this.weatherService.obtenerClimaActual(lugar).subscribe(
      (data) => {
        this.clima = data;

        if (this.tipo === '°C') this.temperatura = data.current.temp_c;
        else this.temperatura = data.current.temp_f;

        switch (this.clima.current.condition.text) {
          case 'Sunny':
            this.url = '../../../assets/Clear.png';
            break;
          case 'Cloudy':
            this.url = '../../../assets/HeavyCloud.png';
            break;
          case 'Heavy rain':
            this.url = '../../../assets/HeavyRain.png';
            break;
          case 'Light cloud':
            this.url = '../../../assets/LightCloud.png';
            break;
          case 'Light rain':
            this.url = '../../../assets/LightRain.png';
            break;
          case 'Shower':
            this.url = '../../../assets/Shower.png';
            break;
          case 'Sleet':
            this.url = '../../../assets/Sleet.png';
            break;
          case 'Blowing snow':
            this.url = '../../../assets/Snow.png';
            break;
          case 'Thunderstorm':
            this.url = '../../../assets/Thunderstorm.png';
            break;
          case 'Partly Cloudy':
            this.url = '../../../assets/HeavyCloud.png';
            break;
          default:
            this.url = '../../../assets/Hail.png';
            break;
        }
      },
      (error) => console.log(error.message)
    );
  }

  obtenerLocacion() {
    this.weatherService.getPosicionActual();
  }

  abrirBuscador(){
    this.weatherService.setBuscar(false);
  }
}
