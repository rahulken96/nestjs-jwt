import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor (private readonly quizService: QuizService) {}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Post('/')
    @HttpCode(200)
    createQuiz(@Body() quizData){
        // return this.quizService.storeQuiz();
        return {data: quizData};
    }
}
