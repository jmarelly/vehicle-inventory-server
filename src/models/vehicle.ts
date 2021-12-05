import db from "../utils/database";
import { VehicleModel } from '../types/vehicle'

export default class Vehicle {
  constructor() {}

  static fetchAll(): Promise<any> {
    return db.execute(
      "SELECT v.id, v.uuid, DATE_FORMAT(v.creation_date, '%Y-%m-%d %H:%i:%s') AS creation_date, v.name, vt.type, ST_X(v.geo_location_point) AS latitude, ST_Y(geo_location_point) AS longtitude, DATE_FORMAT(v.last_successful_connection, '%Y-%m-%d %H:%i:%s') AS last_successful_connection FROM vehicles v INNER JOIN vehicle_types vt ON v.type=vt.id"
      );
  }

  static getVehicle(uuid: string): Promise<any> {
    return db.execute(
      "SELECT v.id, v.uuid, DATE_FORMAT(v.creation_date, '%Y-%m-%d %H:%i:%s') AS creation_date, v.name, vt.type, ST_X(v.geo_location_point) AS latitude, ST_Y(geo_location_point) AS longtitude, DATE_FORMAT(v.last_successful_connection, '%Y-%m-%d %H:%i:%s') AS last_successful_connection FROM vehicles v INNER JOIN vehicle_types vt ON v.type=vt.id WHERE UUID=?", [uuid]
      );
  }

  static vehicleTypes(){
    return db.execute(
      "SELECT id, type FROM vehicle_types"
      );
  }

  static insertVehicle(obj: VehicleModel): Promise<any> {
    return db.execute(
      "INSERT INTO vehicles SET UUID=UUID(), name=?, type=(SELECT id FROM vehicle_types WHERE type=?), geo_location_point = Point(?, ?), creation_date=NOW(), last_successful_connection=?",
      [obj.name, obj.type, obj.latitude, obj.longtitude, obj.last_successful_connection]
    );
  }

  static deleteVehicle(uuid: string): Promise<any> {
    return db.execute(
      "DELETE FROM vehicles WHERE uuid=?", [uuid]
      )
  }

  static updateVehicle(obj: VehicleModel): Promise<any> {
    return db.execute(
      "UPDATE vehicles SET name=?, type=(SELECT id FROM vehicle_types WHERE type=?), geo_location_point = Point(?, ?), creation_date=NOW(), last_successful_connection=? WHERE UUID=?",
      [obj.name, obj.type, obj.latitude, obj.longtitude, obj.last_successful_connection, obj.uuid]
    );
  }
}
