import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './visualComponents/nav/nav.component';
import { DockComponent } from "./visualComponents/dock/dock.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, NavComponent, RouterOutlet, DockComponent, DockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-forecast-app';
}
