import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  key: string = '4facaf34a5b14544a40220913220209';
  current_url: string = 'https://api.weatherapi.com/v1/current.json?q=';
  days_url: string = 'https://api.weatherapi.com/v1/forecast.json?q=';

  constructor(private http: HttpClient) {}

  private place = new Subject<string>();
  lugar: string = 'cordoba';

  agregarLugar(v: string) {
    this.lugar = v;
    this.place.next(v);
  }

  getLugar(): Observable<string> {
    return this.place.asObservable();
  }

  private sub = new Subject<string>();
  tipo: string = '°C';

  agregarTipo(tipo: string) {
    this.tipo = tipo;
    this.sub.next(this.tipo);
  }

  getTipo(): Observable<string> {
    return this.sub.asObservable();
  }

  private close = new Subject<boolean>();
  buscar: boolean = true;

  setBuscar(v: boolean) {
    this.buscar = v;
    this.close.next(this.buscar);
  }

  getBuscar(): Observable<boolean> {
    return this.close.asObservable();
  }

  obtenerClimaActual(q: string): Observable<any> {
    return this.http.get(`${this.current_url}${q}&key=${this.key}`);
  }

  obtenerClimaSemanal(q: string): Observable<any> {
    return this.http.get(`${this.days_url}${q}&key=${this.key}&days=6`);
  }

  getPosicionActual() {
    navigator.geolocation.getCurrentPosition(
      (resp) => {
        this.agregarLugar(resp.coords.latitude + ',' + resp.coords.longitude);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
