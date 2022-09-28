import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  location = 'Abuja'
  // locationDetails: any
  currentWeather: any;
  constructor(private weatherServ: WeatherService){}

  ngOnInit(): void {
    const getLocation = this.weatherServ.getLatAndLon(this.location);
    getLocation.subscribe((data: any) => {
      // console.log(data)
      // this.locationDetails = data;
      // console.log(data[0]?.lat)
      this.weatherServ.getWeatherData(data[0]?.lat, data[0]?.lat).subscribe((weather: any) => {
        this.currentWeather = weather
      })
    })
    // const grapWeather = this.weatherServ.getWeatherData(this.locationDetails[0]?.lat, this.locationDetails[0]?.lat);
    // grapWeather.subscribe((data: any) => {
    //   this.currentWeather = data
    // })
  }
}
