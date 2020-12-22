import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../test.model';
import { TestService } from '../test.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css']
})
export class TestItemComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
   test : Test;  

   id : number ;

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
      
  }

}
