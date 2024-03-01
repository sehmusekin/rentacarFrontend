import axios from "axios";
import {Car} from '../../models/car/CarAddModel';

export default class CarService {
  static async getCars() {
    return axios.get("http://localhost:8080/api/v1/cars/getAll");
  }

  static async addCar(carData: Car) {
    return axios.post("http://localhost:8080/api/v1/cars/add", carData);
  }
  
}
