import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key = 'f7af19c4696804e08dcf729c51137647'
  key2 = '4d5ae8b123c7bb417b641b4934d4827f'
  constructor(private http: HttpClient) { }
  getWeatherData(lat:number, lon:number){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`)
  }
  getLatAndLon(location: string){
    return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location},NGlimit=1&appid=${this.key2}`)
  }
}
