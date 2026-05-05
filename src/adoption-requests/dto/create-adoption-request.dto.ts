import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAdoptionRequestDto {
  
  @ApiProperty({example: '3fa85f64-5717-4562-b3fc-2c963f66afa6', description: 'UUID del usuario que solicita',})
  @IsUUID()
  userId: string;

  
  @ApiProperty({example: '3fa85f64-5717-4562-b3fc-2c963f66afa6', description: 'UUID del animal que se quiere adoptar',})
  @IsUUID()
  animalId: string;

  
  @ApiPropertyOptional({
    example: 'Tengo patio grande y experiencia con perros',
    description: 'Mensaje opcional con información sobre la solicitud de adopción',
  })
  @IsOptional() 
  @IsString()
  @MaxLength(500)
  message?: string;
}