import { Component, Input } from '@angular/core';
import { Hobby } from './hobby.model'; 

@Component({
  selector: 'app-hobby-display',
  templateUrl: './hobby-display.component.html',
  styleUrls: ['./hobby-display.component.css'],
  standalone: true,
})
export class HobbyDisplayComponent {
  @Input() hobby: Hobby;

  constructor() 
  {
    this.hobby = new Hobby("", "", "", "");
  }
}