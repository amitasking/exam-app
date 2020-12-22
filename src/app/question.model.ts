export class Question {
    id : number;
    name : string;
    description : string;
    marks : number;
    option1 : string;    
    option2 : string;    
    option3 : string;    
    option4 : string;
    ans : number    

    constructor(id : number, name : string, description : string, marks : number,option1 : string,
        option2 : string,option3 : string,option4 : string,ans : number){

        this.id = id;
        this.name = name;
        this.description = description;
        this.marks = marks;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.ans = ans;
        
    }
}