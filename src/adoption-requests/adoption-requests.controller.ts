import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AdoptionRequestsService }  from './adoption-requests.service';
import { CreateAdoptionRequestDto } from './dto/create-adoption-request.dto';
import { UpdateAdoptionRequestDto } from './dto/update-adoption-request.dto';

import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('adoption-requests')

@Controller('adoption-requests')
export class AdoptionRequestsController {
  constructor(private readonly adoptionRequestsService: AdoptionRequestsService) {}

  @ApiOperation({ summary: 'Crear solicitud de adopción' })
  @ApiResponse({ status: 201, description: 'Solicitud creada' })
  @ApiResponse({ status: 409, description: 'Solicitud duplicada o animal ya adoptado' })
  @Post()
  create(@Body() dto: CreateAdoptionRequestDto) {
    return this.adoptionRequestsService.create(dto);
  }

  @ApiOperation({ summary: 'Listar animales con paginación y filtros' })
  @ApiResponse({ status: 200, description: 'Lista paginada: { data, total, page, limit }' })

  @Get()
  findAll() {
    return this.adoptionRequestsService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un animal por UUID' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del animal' })
  @ApiResponse({ status: 200, description: 'Animal encontrado' })
  @ApiResponse({ status: 404, description: 'Animal no encontrado' })

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adoptionRequestsService.findOne(id);
  }

    // PATCH :id/status — aprueba o rechaza una solicitud

  @ApiOperation({ summary: 'Aprobar o rechazar una solicitud' })
  @ApiParam({ name: 'id', type: String, description: 'UUID de la solicitud' })
  @ApiResponse({ status: 200, description: 'Estado actualizado' })
  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAdoptionRequestDto,
  ) {
    return this.adoptionRequestsService.updateStatus(id, dto);
  }

  @ApiOperation({ summary: 'Eliminar un animal' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del animal' })
  @ApiResponse({ status: 200, description: 'Animal eliminado' })
  @ApiResponse({ status: 404, description: 'Animal no encontrado' })

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.adoptionRequestsService.remove(id);
  }
}