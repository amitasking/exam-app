import { Injectable,Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Candidate } from './candiate.model';
import {HttpClient} from '@angular/common/http'

import { TestService } from './test.service';
import { Test } from './test.model';
import { StoredAnswersService } from './StoredAnswers.service';
@Injectable()
export class CandidateService {


    constructor(private TestService : TestService, private StoredAnswersService : StoredAnswersService,private HttpClient : HttpClient){
       

    }
 @Output() done = new EventEmitter<Boolean>();
    public candidate : Candidate;
    answers : number[] = [];
    correctAns : number[] = [];

    // createCandidate(name : String, email : String, testId : number){
        

    //     this.candidate = new Candidate(name,email,testId, this.answers);
    //     console.log(this.candidate);
        
    // }


    init(testId : number){
              for(let i = 0; i < this.TestService.getTest(testId).questions.length; i++){
            this.answers.push(-1);
        } 
    }

	getAnswers(){
		return this.answers;	
	
	}
	
	setAnswers(id : number, ans : number){

		this.answers[id] = ans;
	}



	questionDone(){
		this.done.emit(true);	
    }
    
    submitTest(testId){
        console.log(this.StoredAnswersService.getStoredAnswers(testId));
        
        
    }

    postCandidates(candidate : Candidate){

          this.HttpClient.post('https://test-c5234.firebaseio.com/candidates2.json',candidate).subscribe((res)=>{
              console.log(res)
          })
     }

     getAnsById(id : number){
         return this.answers[id]
     }
}
