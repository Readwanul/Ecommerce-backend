import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    
    async findByUsername(username: string) {
        return this.userRepository.findOne({ where: { username } });
    }
    
    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }
}
