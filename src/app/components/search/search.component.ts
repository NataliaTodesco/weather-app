import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cerrar: boolean = true;
  busqueda : string = '';
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getBuscar().subscribe(
      (data) => this.cerrar = data,
      (error) => console.log(error)
    );
  }

  Cerrar(){
    this.weatherService.setBuscar(true);
  }

  Buscar(){
    this.weatherService.agregarLugar(this.busqueda)
  }
}
