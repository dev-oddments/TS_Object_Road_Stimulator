import Vehicle from './Vehicle';
import Wheel from './components/Wheel';

describe('Vehicle', () => {
  context('when assemble 4 of rubber wheels', () => {
    const VEHICLE_FUEL: number = 20;

    const vehicle = new Vehicle(
      [
        new Wheel('rubber'),
        new Wheel('rubber'),
        new Wheel('rubber'),
        new Wheel('rubber'),
      ],
      VEHICLE_FUEL,
    );

    expect(vehicle.getNumberOfWheels()).toBe(4);
    expect(vehicle.getFuel()).toBe(VEHICLE_FUEL);
  });

  context('when cause error', () => {
    it('call fuel error', () => {
      try {
        const vehicle = new Vehicle([], -1);
        expect(vehicle.getNumberOfWheels()).toBe(0);
      } catch (e) {
        expect(e).toStrictEqual(Error('연료는 양은 0 ~ 100 사이 입니다.'));
      }
    });

    // it('call wheel error', () => {
    //   try {
    //     // 원소 갯수가 음수인 배열을 넘기는 방법..
    //     const vehicle = new Vehicle(<???>, 2);

    //     expect(vehicle.getNumberOfWheels()).toBe(-1);
    //   } catch (e) {
    //     expect(e).toStrictEqual(Error('바퀴의 갯수는 "-1" 보다 커야 합니다.'));
    //   }
    // });
  });
});
