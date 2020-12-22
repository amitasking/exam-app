import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../candiate.model';
import {TestService} from '../test.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private testService : TestService, private route : ActivatedRoute, private HttpClient : HttpClient) { }
  testName : string;
  candidates : any[] = [];
  testId : number;
p : number = 1;
  ngOnInit() {

  	this.testId = +this.route.snapshot.params.id;
  	this.testName = this.testService.getTest(this.testId).name;
   // console.log(this.testName);
    this.HttpClient.get('https://test-c5234.firebaseio.com/candidates2.json').subscribe((data)=>{
  		let arr = Object.entries(data);
  		for(let i = 0; i < arr.length; i++){
          if(arr[i][1].testId == +this.testId){
          	this.candidates.push(arr[i][1]);
          }
        
      }
       
  	})

  	console.log(this.candidates)


  }




}
