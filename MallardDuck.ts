/**
 * Clase derivada MallardDuck, hereda de Duck, implementa interfaz IDisplay
 */

import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { FlyWithWings }   from './FlyStrategy'
import { Quack } from './QuackStrategy'

export class MallardDuck extends Duck implements IDisplay {
    
    //  Definicion de constructor
    public constructor() {
        super()
        this.flyBehavior   = new FlyWithWings()
        this.quackBehavior = new Quack()
    }

    //  Implementacion de metodo display
    display() {
        console.log(" - Mallar duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}