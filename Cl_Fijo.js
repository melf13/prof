import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Fijo extends Cl_Profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    sueldototal() {
        return this.sueldo + this.bono;
    }
}