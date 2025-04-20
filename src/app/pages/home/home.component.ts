import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherViewModel } from '../../viewmodels/weatherViewModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weatherViewModel!: WeatherViewModel;

  newDate : string = "";

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(
      data => {
        this.weatherViewModel = data;
        console.log(data);

        const creationDate = new Date(this.weatherViewModel.creationDate);

        const opciones: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        this.newDate = new Intl.DateTimeFormat('en-US', opciones)
          .format(creationDate)
          .replace(',', '');
      },
      error => {
        console.error('Weather service unavailable:', error);
      }
    );

    

  }
}
