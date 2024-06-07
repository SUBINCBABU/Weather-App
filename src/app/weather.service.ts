import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey="06c29f72559fc95867e92bf22c2f01fb"
  
  constructor(private http:HttpClient) { }
  getWeather(city:string){
return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
  }

  getLatLon(lat:string,lon:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${this.apiKey}`)
      } 
}
