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
    }

    class User {
        public email: string;
        public role: string;
        private lastAccess: Date;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(person: Person, user: User, settings: Settings) {
            this.person = person;
            this.user = user;
            this.settings = settings;
        }
    }

    const person = new Person({
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-15')
    });
    const user = new User({
        email: 'fernando@google.com',
        role: 'admin'
    });
    const settings = new Settings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home'
    });

    const newuserSettings = new UserSettings(person, user, settings);


    console.log(user);
    console.log(newuserSettings);
    console.log(newuserSettings.user.checkCredentials());
})();