import { Module } from '@nestjs/common';
import { KuisService } from './kuis.service';
import { KuisController } from './kuis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kui } from './entities/kui.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kui])],
  controllers: [KuisController],
  providers: [KuisService],
})
export class KuisModule {}
