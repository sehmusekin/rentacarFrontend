import React, { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}

const CategoriesList: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://localhost:8080/api/v1/categories/getAll"
      );
      setCategoriesList(response.data);
    } catch (error) {
      console.error("Veri çekme işleminde hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(categoriesList);
  return (
    <div>
      <h1>Kategori Listesi</h1>
      <ul>
        {categoriesList.map((category) => (
          <li key={category.id}>
            {category.id} - {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
