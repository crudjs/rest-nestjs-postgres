import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';

@Component()
export class AuthService {
  createToken(email) {
    const expiresIn = 60 * 60;
    const secretOrKey = process.env.JWT_SECRET;
    const user = { email };
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    console.log('user');
    console.log(signedUser);
    if (signedUser.email === 'thisis@example.com') {
      return true;
    }
    return false;
  }
}
