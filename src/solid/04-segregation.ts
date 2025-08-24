interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird {
    public fly() {};
    public eat() {};
    public run() {};
    public swim() {
        throw new Error('I cannot swim');
    }
}

class Hummingbird implements Bird {
    public fly() {};
    public eat() {};
    public run() {};
    public swim() {
        throw new Error('I cannot swim');
    }
}

class Ostrich implements Bird {
    public fly() {
        throw new Error('I cannot fly');
    };
    public eat() {};
    public run() {};
    public swim() {
        throw new Error('I cannot swim');
    }
}

class Penguin implements Bird {
    public fly() {
        throw new Error('I cannot fly');
    };
    public eat() {};
    public run() {};

    public swim() {};
}