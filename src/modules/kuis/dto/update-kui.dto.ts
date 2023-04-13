import { PartialType } from '@nestjs/mapped-types';
import { CreateKuiDto } from './create-kui.dto';

export class UpdateKuiDto extends PartialType(CreateKuiDto) {}
