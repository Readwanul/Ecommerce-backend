import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        // Implement your user validation logic here
        return { userId: 1, username: 'test' }; // Example user object
    }
    async login() {
        const payload = { username: 'test' };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

 
}
