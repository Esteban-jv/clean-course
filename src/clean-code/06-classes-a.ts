(() => {

    // Ejemplo de clase no aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    class Person {
        /*public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }*/

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}

    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, lastAccess, name, gender, birthdate);
        }
    }

    const newUser = new User(
        'fernando@google.com',
        'admin',
        new Date('2020-01-01'),
        'Fernando',
        'M',
        new Date('1985-10-15')
    );

    const newuserSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'admin',
        new Date('2020-01-01'),
        'Fernando',
        'M',
        new Date('1985-10-15')
    );

    console.log(newUser);
    console.log(newuserSettings);
})();