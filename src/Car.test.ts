import Car from './Car';
import Wheel from './components/Wheel';

describe('Car', () => {
  const CAR_FUEL: number = 80;
  const CAR_RPM: number = 5;

  context('when step on the pedal', () => {
    it('assembled 4 of rubber wheels', () => {
      const car = new Car(
        [
          new Wheel('rubber'),
          new Wheel('rubber'),
          new Wheel('rubber'),
          new Wheel('rubber'),
        ],
        CAR_FUEL,
      );

      car.pedal();

      const { wheels } = car;

      wheels.forEach((wheel) => {
        expect(wheel.kind).toBe('rubber');
        expect(wheel.rpm).toBe(CAR_RPM);
      });
      expect(car.getFuel()).toBe(CAR_FUEL);
    });

    it('assembled 3 of plastic wheels', () => {
      const car = new Car(
        [
          new Wheel('plastic'),
          new Wheel('plastic'),
          new Wheel('plastic'),
        ],
        CAR_FUEL,
      );

      car.pedal();

      const { wheels } = car;

      wheels.forEach((wheel) => {
        expect(wheel.kind).toBe('plastic');
        expect(wheel.rpm).toBe(CAR_RPM);
      });
      expect(car.getFuel()).toBe(CAR_FUEL);
    });
  });
});
