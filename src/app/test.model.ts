import { Question } from './question.model';

export class Test {
  
    name : string;
    questions : Question[];
    adminName : string;
    adminPassword : string;
    publicPassword : string;	
    time : number;

    constructor( name : string, questions : Question[],adminName : string, adminPassword : string, pp : string,time : number){
    	this.adminName = adminName;
    	this.adminPassword = adminPassword;
        this.name = name;
        this.questions = questions;
        this.publicPassword = pp;
        this.time = time;
    }
}