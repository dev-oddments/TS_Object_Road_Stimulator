import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  // 시동을 켠다
  public run() {
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 5;
    }
  }
}
