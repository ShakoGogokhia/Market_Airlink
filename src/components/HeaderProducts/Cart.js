import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div className="max-w-screen-md mx-auto mt-10 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ჩემი კალათა</h2>
      {cartItems.length === 0 ? (
        <p>კალათა ცარიელია</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <span>{item.name}</span>
              <span>{item.price} ₾</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
