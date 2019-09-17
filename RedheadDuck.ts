/**
 * * Implementacion de clase RedheadDuck, hereda de Duck, implementa interfaz IDisplay
 */
import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { FlyWithWings }   from './FlyStrategy'
import { Quack } from './QuackStrategy'


export class RedheadDuck extends Duck implements IDisplay {

    //  Definicion de constructor
    constructor() {
        super()
        this.flyBehavior = new FlyWithWings()
        this.quackBehavior = new Quack()
    }

    //  Implementacion de metodo display
    display() {
        console.log(" - Redhead duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}