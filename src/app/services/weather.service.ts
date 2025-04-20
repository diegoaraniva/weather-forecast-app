import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = 'https://weatherforecastapi-s7zj.onrender.com/current';

  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
