import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  doAuth( @Body() credentials) {
    return this.authService.createToken(credentials.email);
  }
}