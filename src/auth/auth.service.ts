import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private userService: UserService) {}

  async login({ username, password }) {
    const user = await this.userService.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.username, role: user.role };
    return { access_token: this.jwt.sign(payload) };
  }

  async forgotPassword(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');
    // Generate token and send email logic here
    return { message: 'Password reset email sent.' };
  }

  async resetPassword(token: string, newPassword: string) {
    // Validate token, decode user, etc.
    // Hash and save new password
    return { message: 'Password successfully reset' };
  }
}
