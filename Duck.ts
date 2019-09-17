import { IFlyBehavior }   from './FlyStrategy'
import { IQuackBehavior } from './QuackStrategy'

export class Duck {
    protected flyBehavior : IFlyBehavior
    protected quackBehavior : IQuackBehavior

    public swim() {
        console.log("Swimming...")
    }

    public performQuack() {
        this.quackBehavior.quack()
    }

    public performFly() {
        this.flyBehavior.fly()
    }
}

