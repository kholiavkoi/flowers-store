import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateFlowersDto {
  @IsString({
    message: 'Name must be a string',
  })
  name: string;

  @IsString()
  color: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  price: number;
}

export type TUpdateFlowersDto = Partial<CreateFlowersDto>;
