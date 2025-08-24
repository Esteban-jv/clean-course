// Animals
interface Bird {
    eat(): void;
}

// Capabilities
interface Runner {
    run(): void;
}
interface Swimmer {
    swim(): void;
}
interface Flyer {
    fly(): void;
}

class Tucan implements Bird, Runner, Flyer {
    public fly() {};
    public eat() {};
    public run() {};
}

class Hummingbird implements Bird, Flyer {
    public fly() {};
    public eat() {};
}

class Ostrich implements Bird, Runner {
    public eat() {};
    public run() {};
}

class Penguin implements Bird, Swimmer {
    public eat() {};
    public swim() {};
}