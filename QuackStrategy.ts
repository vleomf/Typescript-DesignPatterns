/**
* * Comportamiento polimorfico de Quack
*/
export interface IQuackBehavior {
    quack() : void
}

export class Quack implements IQuackBehavior {
    quack() {
        console.log("Quack quack...")
    }
}

export class Squeak implements IQuackBehavior {
    quack() {
        console.log("Squeak...")
    }
}

export class MuteQuack implements IQuackBehavior {
    quack() {
        console.log("(mute)...")
    }
}