import { IsLowercase, IsString, Length } from 'class-validator';

export class CreateEntryDto {
  @IsString() @Length(5, 128) readonly title: string;
  @IsString() @Length(128, 5000) readonly body: string;
  @IsString() @IsLowercase() readonly authorId: string;
  @IsString() @IsLowercase() readonly categoryId: string;
}
