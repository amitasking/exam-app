import { Question } from './question.model';
import { Test } from './test.model';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';


export class TestService {
   constructor(private HttpClient : HttpClient,private router : Router){

   }
  questions : Question[];
  //ans : number[];
  
  tests : Test[] = [];
  
  getLiveTests(){
     return this.HttpClient.get<Test[]>('https://test-c5234.firebaseio.com/data.json')
     
      
  }


  getTest(index : number){
    return this.tests[index];
  }

  getSelectedQuestion(testId : number, questionId : number){
    return this.tests[testId].questions[questionId];
  }

  createTest(name : string, questions : Question[],adminUserName :string,adminPassword:string,publicPassword : string,time : number){
   
    const test = new Test(name,questions,adminUserName,adminPassword,publicPassword,time);
   
   //  console.log(test);
    this.tests.push(test);
       this.HttpClient.post('https://test-c5234.firebaseio.com/data.json',test).subscribe(response =>{
       console.log(response);
         Swal.fire({
        title: 'Done!',
        //text: 'You will not be able to recover this imaginary file!',
        icon: 'success',
        
    })
         this.router.navigate(['/']);

    })
        
    
    //console.log(this.tests);
  }

   matchPublicPassword(testId : number, enteredPassword : string){
       return this.tests[testId].publicPassword === enteredPassword;
   }

}
