/**
* *    Comportamiento polimorfico de Fly
*/
export interface IFlyBehavior {
    fly() : void
}

/**
 * *    Especializacion de Comportamiento FlyWithWings
 */
export class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log("Fly...")
    }
}

/**
 * *    Especializacion de Comportamiento FlyNoWay
 */
export class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log("Can't fly...")
    }
}