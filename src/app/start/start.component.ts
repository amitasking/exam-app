import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router,ActivatedRoute}from '@angular/router';
import {TestService}from '../test.service';
import {CandidateService}from '../candidate.service';
import {Candidate} from '../candiate.model';
import Swal from 'sweetalert2';
// declare var $:any;
// import * from 'jquery';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private Router : Router ,private route : ActivatedRoute,private TestService : TestService,private CandidateService : CandidateService) { }

  ngOnInit() {
     
    
      // $('.tap-target').tapTarget();
  }

  start(form : NgForm){
    console.log(form);
    let name = form.value.name;
    let mail = form.value.email;
  	let id  = this.route.snapshot.params.id;

    let candidate : Candidate = new Candidate(id,name,mail,null,null,null,null,null,null,null);

      // set candidate

      this.CandidateService.candidate = candidate;
       

    if(!this.TestService.matchPublicPassword(id,form.value.password)){
      Swal.fire({
          title: 'Wrong Test Password!',
          //text: 'You will not be able to recover this imaginary file!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Sure!',
          // cancelButtonText: 'No, am not ready'

        })
      return;
    }
    Swal.fire({
      title: 'Do you want to start the Test?',
      //text: 'You will not be able to recover this imaginary file!',
      //icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Sure!',
      cancelButtonText: 'No, am not ready'
    }).then((result) => {
      if (result.value) {
        this.Router.navigate(['take',id],{ queryParams : {questionId : 0}});
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          return;
      }

    })


  	
  }

}
