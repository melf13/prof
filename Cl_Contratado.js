import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Fijo extends Cl_Profesor {
    constructor(nombre, bono, canthoras) {
        super(nombre, bono);
        this.canthoras = canthoras
    }
    sueldocontratado () {
        return this.canthoras * 10
    }

    sueldototal () {
        return this.bono + this.sueldocontratado()
    }

}