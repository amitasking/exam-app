import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-show-cand',
  templateUrl: './show-cand.component.html',
  styleUrls: ['./show-cand.component.css']
})
export class ShowCandComponent implements OnInit {
  loadgif = true;
  tests : any[] = [];
  p : number = 1;
  constructor(private testService : TestService) { }

  ngOnInit() {
 //  console.log(this.st.newTimer('5sec', 5));
    this.testService.getLiveTests().subscribe((data : any[]) =>{
      this.loadgif = false;
      let arr = Object.entries(data);
      this.testService.tests = this.tests;
      for(let i = 0; i < arr.length; i++){
          this.tests.push(arr[i][1])
        
      }
       
          
 

    });
    
    console.log(this.tests);
  }

}
