(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        lastAccess: Date;
        person: PersonProps;
    }

    class User extends Person {
        public email: string;
        public role: string;
        private lastAccess: Date;
        constructor({
            email,
            role,
            person
        }: UserProps) {
            super(person);
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        user: UserProps;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder, user }: UserSettingsProps) {
            super(user);
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const newUser = new User({
        email: 'fernando@google.com',
        role: 'admin',
        person: {
            name: 'Fernando',
            gender: 'M',
            birthdate: new Date('1985-10-15')
        }
    });

    const newuserSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        user: {
            email: 'fernando@google.com',
            role: 'admin',
            lastAccess: new Date('2020-01-01'),
            person: {
                name: 'Fernando',
                gender: 'M',
                birthdate: new Date('1985-10-15')
            }
        }
    });


    console.log(newUser);
    console.log(newuserSettings);
    console.log(newuserSettings.checkCredentials());
})();