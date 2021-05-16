import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  city;

  getWeather() {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.city
      }&appid=a623c29bd6729f12ffe00e920ab70426`
    );
  }
}
