import axios from "axios";

export default class CarService {
  getAllCars() {
    return axios.get("http://localhost:8080/api/v1/cars/getAll");
  }

  getByIdCar(id: number) {
    return axios.get("http://localhost:8080/api/v1/cars/getById?id=" + id);
  }
}
