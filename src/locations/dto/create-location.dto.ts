import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @ApiProperty({ example: 'Refugio Patitas Felices' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Medellín' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'Calle 10 #43-25' })
  @IsString()
  address: string;

  @ApiPropertyOptional({ example: '3041111111' })
  @IsOptional()
  @IsString()
  phone?: string;
}