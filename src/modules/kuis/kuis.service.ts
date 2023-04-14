import { Injectable } from '@nestjs/common';
import { CreateKuiDto } from './dto/create-kui.dto';
import { UpdateKuiDto } from './dto/update-kui.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kui } from './entities/kui.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KuisService {
  constructor(
    @InjectRepository(Kui)
    private kuiRepo: Repository<Kui>
  ){}

  
  async store(kuis: CreateKuiDto) {
    const res =  await this.kuiRepo.insert(kuis);
    
    /* RESPON PROSES */
    if (res['raw']['affectedRows'] > 0) {
      return{
        message: 'Data Berhasil Ditambahkan!',
        data: kuis
      }
    }else{
      return{
        message: 'Data Gagal Ditambahkan!',
        data: kuis
      }
    }
  }

  async getAllQuiz(){
    const res = await this.kuiRepo.find();
    
    if (!res) {
      return {message: "Data Tidak Ditemukan"};
    }else{
      return res;
    } 
  }

  async read(id: number){
    const res = await this.kuiRepo.find({where: {id: id}});

    if (!res) {
      return {message: "Data Tidak Ditemukan"};
    }else{
      return res;
    } 
  }

  update(id: number, updateKuiDto: UpdateKuiDto) {
    return `This action updates a ${id} kui`;
  }

  remove(id: number) {
    return `This action removes a #${id} kui`;
  }
}
function Args(arg0: string, arg1: { type: () => any; }): (target: KuisService, propertyKey: "read", parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

