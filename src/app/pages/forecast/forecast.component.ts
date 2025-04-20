import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  viewModel: any

  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {

    this.forecastService.getForecast().subscribe(
      data => {
        this.viewModel = data;
        console.log(data);

      },
      error => {
        console.error('Weather service unavailable:', error);
      }
    );
  }
}
