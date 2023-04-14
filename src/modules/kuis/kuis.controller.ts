import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { KuisService } from './kuis.service';
import { CreateKuiDto } from './dto/create-kui.dto';
import { UpdateKuiDto } from './dto/update-kui.dto';

@Controller('kuis')
export class KuisController {
  constructor(private readonly kuisService: KuisService) { }

  
  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateKuiDto) { 
    return this.kuisService.store(quizData);
    // return { data: quizData };
  }

  @Get('/')
  getAllQuiz() {
    return this.kuisService.getAllQuiz();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kuisService.read(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKuiDto: UpdateKuiDto) {
    return this.kuisService.update(+id, updateKuiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kuisService.remove(+id);
  }
}
