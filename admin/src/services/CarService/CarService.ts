import axios from "axios";

export default class CarService {
  getAllCars() {
    return axios.get("http://localhost:8080/api/v1/cars/getAll");
  }

  addCar() {
    return axios.post("http://localhost:8080/api/v1/cars/add");
  }

getDelete(){
  return axios.delete("http://localhost:8080/api/v1/cars/delete");
}
}
