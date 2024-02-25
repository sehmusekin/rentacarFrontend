import "./CarsAdd.css";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

const CarsAdd = () => {
  const [carData, setCarData] = useState({
    kilometer: "",
    year: "",
    price: "",
    gearType: "",
    plate: "",
    description: "",
    numberOfSeats: "",
    isAvailable: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/cars/add", carData);
      alert("Araba başarıyla eklendi");
    } catch (error) {
      console.error("Araba eklenirken bir hata oluştu:", error);
      alert("Araba eklenirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="car-add-container">
      <form className="car-add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="input-label">Plaka:</label>
          <input
            type="text"
            name="plate"
            value={carData.plate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Kilometre</label>
          <input
            type="text"
            name="kilometer"
            value={carData.kilometer}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Yıl</label>
          <input
            type="number"
            name="kilometer"
            value={carData.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Fiyat</label>
          <input
            type="number"
            name="price"
            value={carData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Vites Tipi</label>
          <input
            type="text"
            name="gearType"
            value={carData.gearType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Açıklama</label>
          <input
            type="text"
            name="description"
            value={carData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Koltuk Sayısı</label>
          <input
            type="text"
            name="numberOfSeats"
            value={carData.numberOfSeats}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Araç müsait mi?</label>
          <input
            type="boolean"
            name="isAvailable"
            value={carData.isAvailable.toString()} 
            onChange={handleChange}
          />
        </div>
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default CarsAdd;
