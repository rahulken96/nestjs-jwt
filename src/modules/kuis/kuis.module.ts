import { Module } from '@nestjs/common';
import { KuisService } from './kuis.service';
import { KuisController } from './kuis.controller';

@Module({
  controllers: [KuisController],
  providers: [KuisService]
})
export class KuisModule {}
