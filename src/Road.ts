import Vehicle from './Vehicle';

export default class Road {
  private vehicles: Vehicle[] = [];

  addVehicles(vehicles: Vehicle[]): void {
    this.vehicles.push(...vehicles);
  }

  showVehicleList(): Array<Vehicle> {
    return this.vehicles;
  }

  public isVehicleEmpty(): boolean {
    return this.vehicles.length === 0;
  }
}
