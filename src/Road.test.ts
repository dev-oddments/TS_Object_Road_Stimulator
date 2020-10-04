import Road from './Road';
import Car from './Car';
import Bike from './Bike';
import Wheel from './components/Wheel';

describe('Road', () => {
  context('when road is empty', () => {
    const road = new Road();

    it('call showVehicleList', () => {
      expect(road.showVehicleList().length).toBe(0);
    });

    it('call isVehicleEmpty', () => {
      expect(road.isVehicleEmpty()).toBe(true);
    });
  });

  context('when car and bikes on the road', () => {
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

    const bike1 = new Bike(
      [
        new Wheel('plastic'),
        new Wheel('plastic'),
      ],
      50,
    );
    const bike2 = new Bike(
      [
        new Wheel('rubber'),
        new Wheel('rubber'),
      ],
      60,
    );

    road.addVehicles([car, bike1, bike2]);

    it('call showVehicleList', () => {
      expect(road.showVehicleList().length).toBe(3);
    });

    it('call isVehicleEmpty', () => {
      expect(road.isVehicleEmpty()).toBe(false);
    });
  });
});
