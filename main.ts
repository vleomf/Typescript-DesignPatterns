import { MallardDuck } from './MallardDuck'
import { RedheadDuck } from './RedheadDuck'
import { RubberDuck } from './RubberDuck'
import { DecoyDuck } from './DecoyDuck'

import { Quack, Squeak, MuteQuack } from './QuackStrategy'
import { FlyWithWings, FlyNoWay } from './FlyStrategy'

const duck1 = new MallardDuck( new FlyWithWings(), new Quack() )
const duck2 = new RedheadDuck( new FlyWithWings(), new Quack() )
const duck3 = new RubberDuck( new FlyNoWay(), new Squeak() )
const duck4 = new DecoyDuck( new FlyNoWay(), new MuteQuack() )

duck1.display()
duck2.display()
duck3.display()
duck4.display()