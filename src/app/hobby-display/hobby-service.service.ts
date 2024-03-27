// hobby.service.ts
import { Injectable } from '@angular/core';
import { Hobby } from './hobby.model';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {
  private hobby: Hobby;

  constructor() {
    this.hobby = new Hobby(
      "DDOS",
      "Distributed Denial of Service",
      "/assets/images.png",
      "/assets/biber.png",
      "Doge");
   }

  getHobby(): Hobby {
    return this.hobby;
  }
}