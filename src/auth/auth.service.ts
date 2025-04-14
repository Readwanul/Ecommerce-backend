import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

 
}
