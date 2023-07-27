// src/components/Home/Categories.js
import React from 'react';

const Categories = () => {
  // قائمة التصنيفات
  const categories = ['Category 1', 'Category 2', 'Category 3']; // يمكنك استبدال هذه البيانات بالتصنيفات الفعلية

  return (
    <div>
      <h2>التصنيفات</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
