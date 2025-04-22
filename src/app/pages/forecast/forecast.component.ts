import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { ownFormatDate } from '../../helpers/formatDate';
import { ForecastViewModel } from '../../viewmodels/forecastViewModel';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  forecasViewModel!: ForecastViewModel[]

  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {

    this.forecastService.getForecast().subscribe(
      data => {
        this.forecasViewModel = data;
        console.log(data);
      },
      error => {
        console.error('Weather service unavailable:', error);
      }
    );
  }

  formatNewDate(date: any){
    return ownFormatDate.fromDateToDescription(date);
  }

}
