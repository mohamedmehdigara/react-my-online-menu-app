// src/components/Product/ProductDetails.js
import React from 'react';

const ProductDetails = () => {
  // معلومات المنتج
  const product = {
    name: 'Product Name',
    price: 20.99,
    imageUrl: 'url-to-image',
  }; // يمكنك استبدال هذه البيانات بمعلومات المنتج الفعلية

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>السعر: ${product.price}</p>
      {/* هنا يمكنك إضافة خيارات إضافية مثل الحجم والمكونات والملاحظات */}
    </div>
  );
};

export default ProductDetails;
