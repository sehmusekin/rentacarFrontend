// AddCarForm.jsx

import { useState } from "react";
import axios from "axios";

const CarsAdd = () => {
  const [carData, setCarData] = useState({
    plate: "",
    kilometer: "",
    year: "",
    price: "",
    gearType: "",
    amountOfFuel: "",
    description: "",
    numberOfSeats: "",
    isAvailable: true,
    modelId: "",
    colorId: "",
    fuelTypeId: "",
    categoryId: "",
    brandId: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/cars/add", carData);
      alert("Araba başarıyla eklendi");
      // Formu sıfırla veya isteğin sonucuna göre başka bir eylem yapabilirsiniz
    } catch (error) {
      console.error("Araba eklenirken bir hata oluştu:", error);
      alert("Araba eklenirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="text-black">
      <h2>Araba Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>Plaka:</label>
        <input
          type="text"
          name="plate"
          value={carData.plate}
          onChange={handleChange}
        />

        <label>Kilometre:</label>
        <input
          type="text"
          name="kilometer"
          value={carData.kilometer}
          onChange={handleChange}
        />

        <label>Yıl:</label>
        <input
          type="number"
          name="year"
          value={carData.year}
          onChange={handleChange}
        />

        <label>Fiyat:</label>
        <input
          type="number"
          name="price"
          value={carData.price}
          onChange={handleChange}
        />

        <label>Vites Tipi:</label>
        <input
          type="text"
          name="gearType"
          value={carData.gearType}
          onChange={handleChange}
        />

        <label>Yakıt Türü:</label>
        <input
          type="text"
          name="amountOfFuel"
          value={carData.amountOfFuel}
          onChange={handleChange}
        />

        <label>Açıklama:</label>
        <input
          type="text"
          name="description"
          value={carData.description}
          onChange={handleChange}
        />

        <label>Koltuk Sayısı:</label>
        <input
          type="text"
          name="numberOfSeats"
          value={carData.numberOfSeats}
          onChange={handleChange}
        />

        {/* Diğer araba özellikleri için giriş alanlarını buraya ekleyin */}

        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default CarsAdd;
