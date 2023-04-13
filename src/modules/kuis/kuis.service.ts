import { Injectable } from '@nestjs/common';
import { CreateKuiDto } from './dto/create-kui.dto';
import { UpdateKuiDto } from './dto/update-kui.dto';

@Injectable()
export class KuisService {

  getAllQuiz() {
    return [1, 2, 3, 'Suatu Data String'];
  }

  async storeQuiz(quiz: CreateKuiDto) {
    // return await this.quizRepository.save(quiz);
    return 'This action adds a new kui';
  }

  findAll() {
    return `This action returns all kuis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kui`;
  }

  update(id: number, updateKuiDto: UpdateKuiDto) {
    return `This action updates a #${id} kui`;
  }

  remove(id: number) {
    return `This action removes a #${id} kui`;
  }
}
