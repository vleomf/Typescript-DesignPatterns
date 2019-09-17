import { Duck } from './Duck'
import { IDisplay} from './IDisplay'
import { IFlyBehavior }   from './FlyStrategy'
import { IQuackBehavior } from './QuackStrategy'

export class MallardDuck extends Duck implements IDisplay {
    
    public constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
        super()
        this.flyBehavior   = flyBehavior
        this.quackBehavior = quackBehavior
    }

    display() {
        console.log(" - Mallar duck - ")
        this.swim()
        this.performFly()
        this.performQuack()
    }

}