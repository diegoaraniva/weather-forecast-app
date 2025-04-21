import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherViewModel } from '../../viewmodels/weatherViewModel';
import { CommonModule } from '@angular/common';
import { ownFormatDate } from '../../Helpers/formatDate';

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

        this.newDate = ownFormatDate.fromDateToDescription(this.weatherViewModel.creationDate);
      },
      error => {
        console.error('Weather service unavailable:', error);
      }
    );

    

  }
}
