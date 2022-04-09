import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nightaksee-app';

  allTaxis = [
    {
      description:"Taxi 1",
      id:1
    },
    {
      description:"Taxi 2",
      id:2
    },
    {
      description:"Taxi 3", 
      id:3
    },
  ];

  get taxis() {
    return this.allTaxis;
  }
}
