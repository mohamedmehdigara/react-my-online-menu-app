// src/components/Cart/CartPage.js
import React from 'react';
import CartItem from './CartItem';

const CartPage = () => {
  return (
    <div>
      <h1>صفحة السلة</h1>
      <CartItem />
      {/* هنا يمكن إضافة قائمة بجميع المنتجات في السلة وعرض إجمالي السعر */}
    </div>
  );
};

export default CartPage;
