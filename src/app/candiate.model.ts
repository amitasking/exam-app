export class Candidate {
    testId : number;
    name : string;
    email : string;
    marks : number;
    status : string;
    startTime : Date;
    submissionTime : Date;
    correctAns : number;
    inCorrectAns : number;
    notAnswered : number

    constructor(testId : number,name : string, email : string , marks : number, status : string, startTime : Date, submissionTime : Date, correctAns : number, inCorrectAns : number, notAnswered : number){
        this.testId = testId;
        this.name = name;
        this.email = email;
        this.marks = marks;
        this.startTime = startTime;
        this.submissionTime = submissionTime;
        this.correctAns = correctAns;
        this.notAnswered = notAnswered;
        this.inCorrectAns = inCorrectAns;
    }

    
}