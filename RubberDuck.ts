import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { IFlyBehavior }   from './FlyStrategy'
import { IQuackBehavior } from './QuackStrategy'

export class RubberDuck extends Duck implements IDisplay {

    constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
        super()
        this.flyBehavior = flyBehavior
        this.quackBehavior = quackBehavior
    }

    display() {
        console.log(" - Rubber duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}