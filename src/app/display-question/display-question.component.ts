import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../test.service';
import { Question } from '../question.model';
import { NgForm } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {

  @Input() selectedQuestion : Question;
   questionId : number;
   // currentAns : number = null;
   answer :  number;
  constructor(private router : Router, private testService : TestService,private candidateService : CandidateService,private route : ActivatedRoute) { }

  ngOnInit() {
   

    // currennt answer
   //this.currentAns = this.candidateService.getAnsById(this.questionId);
   //c//onsole.log("i got ans " + this.currentAns);


	     this.questionId = +this.route.snapshot.queryParams.questionId;
      this.route.queryParams.subscribe((p)=>{
        window.scroll(0,0);
	     this.questionId = +p.questionId;
console.log( this.questionId);

})

    console.log(this.questionId);
    
      
    }
  

    selectAnswer(form : NgForm){
      console.log(form.form.value.answer);
this.candidateService.setAnswers(this.questionId,+form.form.value.answer);
//alert(this.candidateService.getAnsById(this.questionId));
this.candidateService.questionDone();
console.log(this.candidateService.answers);

	this.candidateService.getAnswers();
       console.log(this.candidateService.getAnswers());

	     


 let testId = +this.route.snapshot.params.id;
   if(this.questionId+1  < this.testService.getTest(testId).questions.length){
    this.router.navigate(['take',testId],
               {
                
                 queryParams :{questionId : this.questionId+1}

             }
               );
      form.reset();
         

   }
        return;


    }

}
