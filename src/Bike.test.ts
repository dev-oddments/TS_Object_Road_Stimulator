import Bike from './Bike';
import Wheel from './components/Wheel';

describe('Bike', () => {
  const BIKE_FUEL: number = 50;
  const BIKE_RPM: number = 8;

  context('when step on the pedal', () => {
    it('assembled 2 of rubber wheels', () => {
      const bike = new Bike(
        [
          new Wheel('rubber'),
          new Wheel('rubber'),
        ],
        BIKE_FUEL,
      );

      bike.pedal();

      const { wheels } = bike;

      wheels.forEach((wheel) => {
        expect(wheel.kind).toBe('rubber');
        expect(wheel.rpm).toBe(BIKE_RPM);
      });
      expect(bike.getFuel()).toBe(BIKE_FUEL);
    });

    it('assembled 3 of plastic wheels', () => {
      const bike = new Bike(
        [
          new Wheel('plastic'),
          new Wheel('plastic'),
          new Wheel('plastic'),
        ],
        BIKE_FUEL,
      );

      bike.pedal();

      const { wheels } = bike;

      wheels.forEach((wheel) => {
        expect(wheel.kind).toBe('plastic');
        expect(wheel.rpm).toBe(BIKE_RPM);
      });
      expect(bike.getFuel()).toBe(BIKE_FUEL);
    });
  });
});
