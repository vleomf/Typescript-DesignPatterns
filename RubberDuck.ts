/**
 * * Clase derivada RubberDuck, hereda de Duck, implementa interfaz IDisplay
 */
import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { FlyNoWay }   from './FlyStrategy'
import { Squeak } from './QuackStrategy'

export class RubberDuck extends Duck implements IDisplay {

    //  Definicion de constructor
    constructor() {
        super()
        this.flyBehavior = new FlyNoWay()
        this.quackBehavior = new Squeak()
    }

    //  Implementacion de metodo display
    display() {
        console.log(" - Rubber duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}