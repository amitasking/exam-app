import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Question} from '../question.model';
import {TestService} from '../test.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.css']
})
export class OrganizeComponent implements OnInit {
  	
  noOfQuestion : number  = 0;
  questions : Question[] = [];
  name : string;
  adminUserName : string;
  time : number;
  adminPassword : string;
  publicPassword : string; 

  stepper : boolean = false;


  constructor(private TestService : TestService) { }

  ngOnInit() {
  	
  }

check() : boolean{
  for(let i = 0; i < this.questions.length; i++){
      if( this.questions[i].description == null || this.questions[i].description === "" || this.questions[i].option1 == null || this.questions[i].option1 === ""|| this.questions[i].option3 == null || this.questions[i].option3=== ""|| this.questions[i].option4 == null || this.questions[i].option4 === "" || this.questions[i].option2 === "" || this.questions[i].option2=== null || this.questions[i].ans== null || +this.questions[i].ans > 4 || +this.questions[i].ans < 1  || this.questions[i].ans== null || this.questions[i].marks== null || +this.questions[i].marks < 0)
        {
         console.log(this.questions[i])
           Swal.fire({
                    title: `Please fill all values correctly for Question ${i+1} !`,
                    //text: 'You will not be able to recover this imaginary file!',
                    icon: 'warning',
                    // showCancelButton: true,
                    // confirmButtonText: 'Yes, Sure!',
                    // cancelButtonText: 'No, am not ready'

              })
        
          return false
        };
    }

  return true;
}

  submit(form : NgForm){
    if(this.check()){
          this.TestService.createTest(this.name,this.questions,this.adminUserName,this.adminPassword,this.publicPassword,this.time);
   
    }
    

  	  
  }

  // basic(){
  //   alert("j")
  // }

  numberOfQuest(input : HTMLInputElement,name : HTMLInputElement, adminUserName : HTMLInputElement,adminPassword : HTMLInputElement, publicPassword: HTMLInputElement,time: HTMLInputElement){
      this.adminUserName = adminUserName.value;
      this.adminPassword = adminPassword.value;
      this.publicPassword = publicPassword.value;
      this.noOfQuestion = +input.value;
      this.time = +time.value;
      this.name =name.value;
      
      if(!this.adminUserName || !this.adminPassword || !this.publicPassword || !this.noOfQuestion || this.noOfQuestion <= 0 || !this.time || +this.time<=0){
         Swal.fire({
                    title: `Please fill all values correctly!`,
                    //text: 'You will not be able to recover this imaginary file!',
                    icon: 'warning',
                    // showCancelButton: true,
                    // confirmButtonText: 'Yes, Sure!',
                    // cancelButtonText: 'No, am not ready'

              })
       return; 
      }

      for(let i = 0; i < this.noOfQuestion; i++){
         this.questions.push(new Question(i,null,null,null,null,null,null,null,null));
      }

      this.stepper = true;
  }

 

}
