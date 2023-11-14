import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { empleadoModel } from './empleadoModel';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: EmpleadosService){}

    @Post()
    contratarEmpleado(@Body() empleadoModel: empleadoModel){
        return this.servicio.contratarEmpleado(empleadoModel);
    }

    @Put(':id')
    modificarSalario(@Body() empleadoModel: empleadoModel, @Param('id') id: string){
        return this.servicio.modificarSalario(id, empleadoModel.salario);
    }

    @Delete(':id')
        eliminarEmpleado(@Param('id') id: string) {
        return this.servicio.despedirEmpleado(id);
    }

    @Get (':id')
    getUnEmpleado(@Param('id') id): string {
        return this.servicio.getUnEmpleado(id);
    }

    @Get()
    getTodosEmpleados() {
    return this.servicio.getTodosEmpleados();
    }
}
