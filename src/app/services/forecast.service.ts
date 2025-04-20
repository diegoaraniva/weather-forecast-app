import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private baseUrl = 'https://weatherforecastapi-s7zj.onrender.com/forecast';

  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
