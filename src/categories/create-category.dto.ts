import { IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsString() @Length(3, 64) readonly name: string;
  @IsString() readonly description: string;
}
