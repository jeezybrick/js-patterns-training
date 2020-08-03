class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address;
        return this;
    }

    build() {
        return this.user;
    }
}

const user = new UserBuilder('Bob').build();
const user2 = new UserBuilder('Andrey')
    .setAge(27)
    .setPhone('050111111')
    .setAddress(new Address('1', 'Pobedi'))
    .build();

console.log(user);
console.log(user2);
