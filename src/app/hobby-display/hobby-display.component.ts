import { Component, OnInit } from '@angular/core';
import { Hobby } from './hobby.model'; 
import { HobbyService } from './hobby-service.service'; 

@Component({
  selector: 'app-hobby-display',
  templateUrl: './hobby-display.component.html',
  styleUrls: ['./hobby-display.component.css'],
  standalone: true
})
export class HobbyDisplayComponent implements OnInit {
  hobby: Hobby;

  constructor(private hobbyService: HobbyService) { this.hobby = new Hobby("","","","","") }

  ngOnInit(): void {
    this.hobby = this.hobbyService.getHobby();
  }
}