import Road from './src/Road';
import Wheel from './src/components/wheel';
import Car from './src/Car';
import Bike from './src/Bike';

const road = new Road();
const car = new Car(4, [new Wheel('rubber'), new Wheel('rubber'), new Wheel('rubber'), new Wheel('ribber')], 100);

const bike = new Bike(2, [new Wheel('plastic'), new Wheel('plastic')], 50);

road.addVehicles([car]);
road.addVehicles([bike]);
car.run();
bike.start();

console.log('All vehicles on road: ', road);
console.log('isEmpty: ', road.isVehicleEmpty());
