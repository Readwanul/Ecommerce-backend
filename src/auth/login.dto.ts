import { IsEmail } from "class-validator";
export class LoginDto {
    @IsEmail({}, { message: 'Invalid email address' })
    email: string;
    password: string;
}
export class ForgotPasswordDto {
    @IsEmail({}, { message: 'Invalid email address' })
    email: string;
}