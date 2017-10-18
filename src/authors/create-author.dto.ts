import { IsEmail, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString() readonly username: string;
  @IsEmail() readonly email: string;
}
