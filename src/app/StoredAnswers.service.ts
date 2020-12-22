import { StoredAnswers } from './StoredAnswers.model';

export class StoredAnswersService {
    storedAnswers : StoredAnswers[] = [ new StoredAnswers([1,1,1,1]) ]; 

    getStoredAnswers(testId : number){
        return this.storedAnswers[testId].answers;
    }

}