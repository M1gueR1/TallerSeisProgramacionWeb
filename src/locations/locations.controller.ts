import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiOperation({ summary: 'Crear una nueva ubicación / refugio' })
  @ApiResponse({ status: 201, description: 'Ubicación creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos (validación del DTO)' })
  @Post()           create(@Body() dto: CreateLocationDto) { return this.locationsService.create(dto); }

  @ApiOperation({ summary: 'Listar todas las ubicaciones' })
  @ApiResponse({ status: 200, description: 'Array de ubicaciones' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  @Get()            findAll() { return this.locationsService.findAll(); }


  @ApiOperation({ summary: 'Obtener una ubicación por UUID' })
  @ApiParam({ name: 'id', type: String, description: 'UUID de la ubicación' })
  @ApiResponse({ status: 200, description: 'Ubicación encontrada' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  @Get(':id')       findOne(@Param('id', ParseUUIDPipe) id: string) { return this.locationsService.findOne(id); }

  @ApiOperation({ summary: 'Actualizar una ubicación' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Ubicación actualizada' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  @Patch(':id')     update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateLocationDto) { return this.locationsService.update(id, dto); }

  @ApiOperation({ summary: 'Eliminar una ubicación' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Ubicación eliminada' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  @Delete(':id')    remove(@Param('id', ParseUUIDPipe) id: string) { return this.locationsService.remove(id); }
}