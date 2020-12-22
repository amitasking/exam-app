import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoredAnswersService } from '../StoredAnswers.service';
import { CandidateService } from '../candidate.service';
//import * as CanvasJS from 'canvasjs/';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  correct : number = 0;
  inCorrect : number = 0;
  notAnswered : number = 0;

 public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Wrong Answers', 'Correct Answers', 'Not Answered'];
  public barChartType = 'pie';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80], label: 'Series A'},
   

    
  ];







  constructor(private CandidateService : CandidateService, private ActivatedRoute : ActivatedRoute, private StoredAnswersService : StoredAnswersService) { }

  ngOnInit() {
    let answersGiven = this.CandidateService.answers;
    let correctAns = this.CandidateService.correctAns;
    

    for(let i = 0; i < answersGiven.length; i++){
        if(answersGiven[i] === correctAns[i]-1)
          this.correct++;
        else if(answersGiven[i] != -1)
          this.inCorrect++;
        else if(answersGiven[i] === -1)
          this.notAnswered++;
   
    }

    this.CandidateService.candidate.status = "Submitted"
    this.CandidateService.candidate.correctAns = this.correct;
    this.CandidateService.candidate.inCorrectAns = this.inCorrect;
    this.CandidateService.candidate.notAnswered = this.notAnswered;
    this.CandidateService.candidate.submissionTime = new Date();
    this.CandidateService.postCandidates(this.CandidateService.candidate);





  this.barChartData[0].data = [this.inCorrect,this.correct,this.notAnswered];

  }

  
}
