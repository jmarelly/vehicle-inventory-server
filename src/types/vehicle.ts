export interface VehicleModel {
  id?: number;
  uuid?: string;
  name?: string;
  creation_date?: string;
  type?: VehicleType;
  latitude?: string;
  longtitude?: string;
  last_successful_connection?: string;
}

export enum VehicleType {
    SUV = 'SUV',
    TRUCK = 'Truck',
    HYBRID = 'Hybrid'
}
