import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Carlos Pérez' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'carlos@demo.com' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ example: '3101111111' })
  @IsOptional()
  @IsString()
  phone?: string;
}