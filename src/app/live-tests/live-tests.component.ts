import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Test } from '../test.model';
import { Question } from '../question.model';
import { TestService } from '../test.service';
import Swal from 'sweetalert2';
// declare var $:any;

@Component({
  selector: 'app-live-tests',
  templateUrl: './live-tests.component.html',
  styleUrls: ['./live-tests.component.css'],

})
export class LiveTestsComponent implements OnInit {
 loadgif = true;
 toSearch : string;
 initsearch : boolean = false;
  tests : any[] = [];
  original : any[] = [];
  loadTest(t : Test){
     
  }
   p : number = 1;
  constructor(private testService : TestService) { }

  ngOnInit() {
    

 this.testService.getLiveTests().subscribe((data : any[]) =>{
      this.loadgif = false;
      let arr = Object.entries(data);
      this.testService.tests = this.tests;
      for(let i = 0; i < arr.length; i++){
          this.tests.push(arr[i][1])
        
      }
       
      this.original = this.tests
          
 

    });  
    
    console.log(this.tests);
  }

  search(){
    this.tests = this.original
    if(this.toSearch === ""){
       this.tests = this.original
       return;}
    let temp =  this.tests.filter((test)=> test.name.toLowerCase() === this.toSearch.toLowerCase())
    
    if(temp.length == 0){
     Swal.fire({
          title: 'Not Found!',
          //text: 'You will not be able to recover this imaginary file!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Sure!',
          // cancelButtonText: 'No, am not ready'

        })

     return;
    }

    if(temp.length > 0 )
      this.tests = temp
    
    this.p = 1;
    console.log(temp);

  }


  searchinit(){
    this.initsearch = true;
  }

}
