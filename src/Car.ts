import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  public readonly CAR_RPM: number = 5;

  public pedal(): void {
    this.wheels.forEach((wheel) => (wheel.setNewRPM(this.CAR_RPM)));
  }
}
