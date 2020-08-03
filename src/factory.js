class Vehicle {
    constructor(data) {
        this.color = data.color ?? 'blue';
    }

    drive() {}
}

export class Truck extends Vehicle {
    constructor(data) {
        super(data);
        this.id = data.id ?? null;
        this.color = data.color ?? 'blue';
    }
}

export class Car extends Vehicle {
    constructor(data) {
        super(data);
        this.id = data.id ?? null;
        this.color = data.color ?? 'blue';
    }
}

class VehicleFactory {

    createVehicle(data) {
        switch(data.vehicleType){
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
        }

        return new this.vehicleClass(data);
    }
}

const vehicleFactory = new VehicleFactory();
const car = vehicleFactory.createVehicle( {
    vehicleType: 'car',
    color: "yellow",
    id: 228
});

const truck = vehicleFactory.createVehicle( {
    vehicleType: 'truck',
});
