import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';


export class Message {

  constructor(public author: string, public content: string) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private router: Router) {
   }

   showChatbot: boolean = false;

   toggleChatbot() {
     this.showChatbot = !this.showChatbot;
   }

  // redirect() {
  //   this.router.navigate(['/bot']);
  // }
}











 
  



