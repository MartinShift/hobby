import { Component } from '@angular/core';
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
}