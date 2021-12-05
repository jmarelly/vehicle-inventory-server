import vehicle from "../models/vehicle";
import { resObject } from "../handlers/responseObject";

const INTERNAL_ERROR = "Internal Error!";

export default class Vehicle {
  constructor() {}

  static addVehicle(req: any, res: any, next: any) {
    vehicle
      .insertVehicle(req.body)
      .then((data) => res.status(201).json())
      .catch((err) => res.json(resObject(INTERNAL_ERROR)));
  }

  static getVehicleTypes(req: any, res: any, next: any) {
    vehicle
      .vehicleTypes()
      .then((data) => res.status(200).json(resObject("", data[0])))
      .catch((err) => res.status(200).json(resObject(INTERNAL_ERROR)));
  }

  static getAllVehicles(req: any, res: any, next: any) {
    vehicle
      .fetchAll()
      .then((data) => res.status(200).json(resObject("", data[0])))
      .catch((err) => res.status(200).json(resObject(INTERNAL_ERROR)));
  }

  static getVehicleId(req: any, res: any, next: any) {
    vehicle
      .getVehicle(req.params.uuid)
      .then((data) => res.status(200).json(resObject("", data[0])))
      .catch((err) => res.status(200).json(resObject(INTERNAL_ERROR)));
  }

  static deleteVehicle(req: any, res: any, next: any) {
    vehicle
      .deleteVehicle(req.params.uuid)
      .then((data) => res.status(200).json())
      .catch((err) => res.status(200).json(resObject(INTERNAL_ERROR)));
  }

  static updateVehicle(req: any, res: any, next: any) {
    req.body.uuid = req.params.uuid;
    vehicle
      .updateVehicle(req.body)
      .then((data) => res.status(201).json())
      .catch((err) => res.status(200).json(resObject(INTERNAL_ERROR)));
  }
}
