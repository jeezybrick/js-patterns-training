import { Car, Truck } from './factory.js';

const abstractVehicleFactory = (function () {
    let types = {};

    return {
        getVehicle: function (type, customizations) {
            const Vehicle = types[type];

            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function (type, Vehicle) {
            const proto = Vehicle.prototype;

            if (proto.drive) {
                types[type] = Vehicle;
            }

            return abstractVehicleFactory;
        }
    };
})();


abstractVehicleFactory.registerVehicle( 'car', Car );
abstractVehicleFactory.registerVehicle( 'truck', Truck );

const car = abstractVehicleFactory.getVehicle( 'car', {
    color: 'lime green',
});

const truck = abstractVehicleFactory.getVehicle( 'truck', {
    id: 322,
    color: 'neon yellow'
});

