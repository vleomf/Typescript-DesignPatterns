/**
* *    Comportamiento polimorfico de Fly
*/
export interface IFlyBehavior {
    fly() : void
}

export class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log("Fly...")
    }
}

export class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log("Can't fly...")
    }
}