/**
 * Clase Duck, clase padre.
 */
import { IFlyBehavior }   from './FlyStrategy'
import { IQuackBehavior } from './QuackStrategy'

export class Duck {
    //  Atributos protegidos
    protected flyBehavior : IFlyBehavior
    protected quackBehavior : IQuackBehavior

    //  Implementacion de metodo swim
    public swim() {
        console.log("Swimming...")
    }

    //  Implementacion de metodo performQuack
    public performQuack() {
        this.quackBehavior.quack()
    }

    //  Implementacion de metodo performFly
    public performFly() {
        this.flyBehavior.fly()
    }
}

