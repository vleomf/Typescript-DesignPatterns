/**
* * Comportamiento polimorfico de Quack
*/
export interface IQuackBehavior {
    quack() : void
}

/**
 * * Especializacion de Comportamiento Quack
 */
export class Quack implements IQuackBehavior {
    quack() {
        console.log("Quack quack...")
    }
}

/**
 * * Especializacion de Comportamiento Squeak
 */
export class Squeak implements IQuackBehavior {
    quack() {
        console.log("Squeak...")
    }
}

/**
 * * Especializacion de Comportamiento Mute
 */
export class MuteQuack implements IQuackBehavior {
    quack() {
        console.log("(mute)...")
    }
}