import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hobby } from './hobby-display/hobby.model'; 
import { HobbyDisplayComponent } from './hobby-display/hobby-display.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HobbyDisplayComponent]
})
export class AppComponent {
  title = 'hobby';
  myHobby = new Hobby(
    "DDOS",
    "Distributed Denial of Service", 
    "/assets/images.png",
    "/assets/biber.png");
}