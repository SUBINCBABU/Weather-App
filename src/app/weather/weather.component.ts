import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city!: string
  weatherData: any
  weather: any
  lat:any
  lon:any
  constructor(private weatherService: WeatherService) { }
  ngOnInit() { }


  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data
      console.log(data);

    })

  }

  getLatLon() {
    this.weatherService.getLatLon(this.lat,this.lon).subscribe(data => {
      this.weather = data
      console.log(data);

    })

  }



}
