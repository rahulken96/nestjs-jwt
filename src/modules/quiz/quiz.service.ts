import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class QuizService {

    getAllQuiz() {
        return [1, 2, 3, 'Suatu Data String'];
    }

    storeQuiz() {
        return [1, 2, 3, 'Suatu Data String'];
    }
}