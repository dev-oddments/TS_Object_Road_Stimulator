import Road from './src/Road';
import Wheel from './src/components/Wheel';
import Car from './src/Car';
import Bike from './src/Bike';

const road = new Road();

const car = new Car(
  [
    new Wheel('rubber'),
    new Wheel('rubber'),
    new Wheel('rubber'),
    new Wheel('rubber'),
  ],
  100,
);

const bike = new Bike(
  [
    new Wheel('plastic'),
    new Wheel('plastic'),
  ],
  50,
);

road.addVehicles([car, bike]);

car.pedal();
bike.pedal();

console.log('All vehicles on road: ', road);
console.log('isEmpty: ', road.isVehicleEmpty());
