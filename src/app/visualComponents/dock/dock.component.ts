import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})

export class DockComponent {
  currentRoute: string = ""

  constructor(private router: Router){
    this.router.events
      .pipe(filter(event=>event instanceof NavigationEnd))
      .subscribe((event: any)=>{
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  isComponentActive(routeSubString: string): boolean{
    return this.currentRoute.includes(routeSubString);
  }
  
}
