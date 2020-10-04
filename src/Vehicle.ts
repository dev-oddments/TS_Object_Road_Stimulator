import Wheel from './components/Wheel';

export default class Vehicle {
  public wheels: Wheel[];

  private fuel: number;

  constructor(wheels: Wheel[], fuel: number) {
    if (wheels.length <= -1) {
      throw new Error('바퀴의 갯수는 "-1" 보다 커야 합니다.');
    }

    if (fuel <= 0 || fuel > 100) {
      throw new Error('연료는 양은 0 ~ 100 사이 입니다.');
    }

    this.wheels = wheels;
    this.fuel = fuel;
  }

  public getNumberOfWheels() {
    return this.wheels.length;
  }

  public getFuel() {
    return this.fuel;
  }
}
