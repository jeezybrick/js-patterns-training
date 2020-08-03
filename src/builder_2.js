class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, {age = 18, phone, address} = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

const user = new User('Jeka', {age: 30});
console.log(user);

const user2 = new User('Lexa', {age: 30, address: new Address('1', ' Main')});
console.log(user2);

const user3 = new User('Dima');
console.log(user3);
