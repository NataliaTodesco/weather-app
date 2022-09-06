import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent implements OnInit {
  current: any = {
    wind_mph: 19.2,
    wind_kph: 31.0,
    wind_degree: 30,
    wind_dir: 'NNE',
    pressure_mb: 1016.0,
    pressure_in: 30.0,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 11,
    cloud: 0,
    feelslike_c: 24.5,
    feelslike_f: 76.0,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 7.0,
    gust_mph: 13.2,
    gust_kph: 21.2,
  };

  constructor(private weatherSevice: WeatherService) {}

  ngOnInit(): void {
    this.weatherSevice.getLugar().subscribe((data) =>
      this.weatherSevice.obtenerClimaActual(data).subscribe(
        ({ current }) => {
          this.current = current;
        },
        (error) => {
          console.log(error.message);
        }
      )
    );
  }
}
