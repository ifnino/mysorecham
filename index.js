

class Animal{
    
    constructor(name, age){
        this.name = name;
        this.age = age;   
        }
        move(speed){
            console.log(`The ${this.name} can movw with a speed of ${speed}mph`);    
    }
}
class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age)
        this.runspeed = runspeed;
    }

    run(){
        console.log(`This is ${this.name} can run`)
    }
}
class Fish extends Animal{
    constructor(name, age, swinspeed){
        super(name, age)
        this.swinspeed = swinspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`)
    }
}
class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name, age)
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`)
    }
}

const rabbit = new Rabbit(`rabbit`, 1, 25)
const fish = new Fish(`fish`, 2, 12)
const hawk = new Hawk(`hawk`, 3, 50)

hawk.fly();
