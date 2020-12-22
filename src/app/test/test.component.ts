import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../test.model';
import { Question } from '../question.model';
import { TestService } from '../test.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { HostListener } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  start_date : Date = new Date();
    end_date : Date = new Date();

  welcome : boolean = true;
  questionDone : boolean = false;
  id : number;
   test : Test;
   questionId : number;
  questionSelected : Question;
  windowsChanged : number = 0;
 p : number = 1;
 disableNext : boolean = false;


  constructor(private testService : TestService, private route : ActivatedRoute, private router : Router, private candidateService : CandidateService) { }


@HostListener('window:blur', ['$event'])
   onBlur(event: FocusEvent): void {
    Swal.fire({
      title: "If you Change The Window Your Test Will be cancelled!",
      icon: 'warning',
     
  
    });

  // alert();
  // console.log(this.windowsChanged);
   this.windowsChanged++;
   if(this.windowsChanged > 3){
     this.router.navigate(['sorry'])
   }
   }


  ngOnInit() {


console.log("welcome "+ this.welcome)

 
   this.id = +this.route.snapshot.params.id; 
   this.test = this.testService.getTest(this.id);
   this.questionId = this.route.snapshot.queryParams.questionId;
    // this.questionId = 0;
    //  this.questionSelected = this.testService.getSelectedQuestion(this.id,this.questionId);
//co
 
 this.candidateService.init(this.id);
this.end_date.setMinutes(this.start_date.getMinutes() + this.test.time);

   this.route.queryParams.subscribe((params : Params)=>{

     this.questionId = +params['questionId'];
     if(this.questionId == this.test.questions.length-1){
      // alert("hogya");
       this.disableNext = true;
     }

     if(this.questionId < this.test.questions.length-1){
       this.disableNext = false;
     }
     
     if(!this.questionId){
       this.questionId = 0;
     }
     this.questionSelected = this.testService.getSelectedQuestion(this.id,this.questionId);
//console.log("chla");

    
   })

	this.candidateService.done.subscribe(()=>{
			this.questionDone = true;
	///		console.log("done")
	});
    // create user
    // this.candidateService.createCandidate("amit","amit@test.com",this.id);
     console.log("welcome "+ this.welcome)
  }


  submitTest(){
     Swal.fire({
      title: 'Do you want to submit the Test?',
      //text: 'You will not be able to recover this imaginary file!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, Sure!',
      cancelButtonText: 'No, am not ready'
    }).then((result) => {
      if (result.value) {
           let givenAns : number[] = [];
            let correctAns : number[] = [];
           
           //givenAns = this.candidateService.getAnswers();
          for(let i = 0; i < this.test.questions.length; i++){
              correctAns.push(this.test.questions[i].ans);
            
          }

          this.candidateService.correctAns = correctAns;


        this.router.navigate(['take',this.id,'result']);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
          return;
      }

    });



   
       
       // console.log(correctAns);
       // console.log(givenAns);
   

  }




  triggerFunction() {
    console.log(this.end_date.getTime())
   let givenAns : number[] = [];
            let correctAns : number[] = [];
           
           //givenAns = this.candidateService.getAnswers();
          for(let i = 0; i < this.test.questions.length; i++){
              correctAns.push(this.test.questions[i].ans);
            
          }

          this.candidateService.correctAns = correctAns;


        this.router.navigate(['take',this.id,'result']);
  }




  next(){
   if(this.questionId+1 < this.test.questions.length)
     return this.questionId+1;
   else 
      return this.test.questions.length-1;

  }

  back(){
    if(this.questionId-1 >= 0)
      return this.questionId-1;
    return 0;

  }
  

}
