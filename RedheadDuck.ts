import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { IFlyBehavior }   from './FlyStrategy'
import { IQuackBehavior } from './QuackStrategy'

export class RedheadDuck extends Duck implements IDisplay {

    constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
        super()
        this.flyBehavior = flyBehavior
        this.quackBehavior = quackBehavior
    }

    display() {
        console.log(" - Redhead duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}