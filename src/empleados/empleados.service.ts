import { Injectable } from '@nestjs/common';
import { empleadoModel } from './empleadoModel';

@Injectable()
export class EmpleadosService {
    empleados = [];
    constructor() {
        let empleado = {
            "id": 1,
            "nombre": "Bruno Giuliano Vapore",
            "telefono": 249456789,
            "salario": 300000
        }
        this.empleados.push(empleado);
        empleado = {
            "id": 2,
            "nombre": "Ailin Suarez",
            "telefono": 2494554545,
            "salario": 350000
        }
        this.empleados.push(empleado);
    }

    contratarEmpleado(empleadoModel: empleadoModel) {
        let empleadoNuevo = {
        "id": empleadoModel.id,
        "nombre": empleadoModel.nombre,
        "telefono": empleadoModel.telefono,
        "salario": empleadoModel.salario
        }
        this.empleados.push(empleadoNuevo);
        return "La persona ha sido contratada";
    }

    modificarSalario(id: string, empleadoModel: empleadoModel){
        for (let index = 0; index < this.empleados.length; index++) {
            if (id = this.empleados[index]) {
                this.empleados[index].salario = empleadoModel.salario;
                return "El salario fue modificado";   
            } else {
                return "Error";
            }
        }
    }

    despedirEmpleado(id): string {
        for (let index = 0; index < this.empleados.length; index++) {
            if(id = this.empleados[index]) {
                this.empleados.splice(id,1);
                return "La persona fue despedida";
            } else {
                return "La persona no es parte de la empresa";
            }
        }
    }

    getUnEmpleado(id: string) {
        return this.empleados.find(u=>u.id==id);
    }
    
    getTodosEmpleados(): any[] {
        return this.empleados;
    }
}