import express from 'express';
import Vehicle from '../controllers/vehicle';

const router = express.Router();
const API = "/api"
const API_VEHICLE = API + "/vehicle";
const API_VEHICLES = API + "/vehicles";

router.post(API_VEHICLE, Vehicle.addVehicle);
router.get(API_VEHICLE + "/types", Vehicle.getVehicleTypes);
router.get(API_VEHICLES, Vehicle.getAllVehicles);
router.get(API_VEHICLE + "/:uuid", Vehicle.getVehicleId);
router.delete(API_VEHICLE + "/:uuid", Vehicle.deleteVehicle);
router.put(API_VEHICLE + "/:uuid", Vehicle.updateVehicle);

export default router;