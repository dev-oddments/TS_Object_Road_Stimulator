import Vehicle from './Vehicle';

export default class Bike extends Vehicle {
  // 페달을 밟는다
  public start() {
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 8;
    }
  }

  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
