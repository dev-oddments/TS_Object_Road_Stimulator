import Vehicle from './Vehicle';

export default class Bike extends Vehicle {
  public readonly BIKE_RPM: number = 8;

  public pedal(): void{
    this.wheels.forEach((wheel) => (wheel.setNewRPM(this.BIKE_RPM)));
  }
}
