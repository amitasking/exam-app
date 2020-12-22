import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private Router : Router) { }

  ngOnInit() {

  }


  organizeTest(){
    this.Router.navigate(['/organize']);
  }

  takeTest(){
    this.Router.navigate(['/take']);
  
  }


}
