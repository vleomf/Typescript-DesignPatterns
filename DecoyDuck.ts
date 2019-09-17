/**
 * * Clase derivada DecoyDuck, hereda de Duck, implementa IDisplay
 */
import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { FlyNoWay }   from './FlyStrategy'
import { MuteQuack } from './QuackStrategy'

export class DecoyDuck extends Duck implements IDisplay {

    //  Definicion de constructor
    constructor() {
        super()
        this.flyBehavior = new FlyNoWay()
        this.quackBehavior = new MuteQuack()
    }

    //  Implementacion de metodo display
    display() {
        console.log(" - Decoy duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}