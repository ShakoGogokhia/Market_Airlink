import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "PoE ინჟექტორი",
    price: 35.83,
    inStock: true,
    brand: "Ubiquiti",
    image: "https://www.intellcom.ge/files/product_imgs/medium/804.png",
  },
  {
    id: 2,
    name: "PoE ინჟექტორი at",
    price: 70.59,
    inStock: true,
    brand: "Ubiquiti",
    image: "https://www.intellcom.ge/files/product_imgs/medium/804.png",
  },
  {
    id: 3,
    name: "მულტიმეტრი",
    price: 120.62,
    inStock: false,
    brand: "Generic",
    image: "https://www.intellcom.ge/files/product_imgs/medium/804.png",
  },
];



export default function ProductPage() {
  const [cart, setCart] = useState([]);
  const [maxPrice, setMaxPrice] = useState(200);
  const [filterStock, setFilterStock] = useState(false);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const allBrands = ["Ubiquiti", "Generic"];

  const handleToggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const filteredProducts = productsData.filter((p) => {
    const passPrice = p.price <= maxPrice;
    const passStock = !filterStock || p.inStock;
    const passBrand =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand);

    return passPrice && passStock && passBrand;
  });

  return (
    <div className="max-w-screen-xl mx-auto mt-6 px-4">
      {/* Page title / breadcrumb could go here, if needed */}
      <h1 className="text-2xl font-bold mb-6">ფასების ფილტრი & პროდუქტები</h1>

      {/* Main layout: left filters, right products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left filters */}
        <div className="col-span-1 bg-white shadow p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4">ფილტრები</h2>

          {/* Price Filter */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              ფასის ზღვარი: {maxPrice} ₾
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Stock Filter */}
          <div className="mb-6">
            <input
              type="checkbox"
              checked={filterStock}
              onChange={(e) => setFilterStock(e.target.checked)}
              className="mr-2"
              id="stockFilter"
            />
            <label htmlFor="stockFilter" className="cursor-pointer">
              მხოლოდ საწყობში არსებული
            </label>
          </div>

          {/* Brand Filter (optional) */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">ბრენდი</h3>
            {allBrands.map((brand) => (
              <div key={brand} className="mb-1">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleToggleBrand(brand)}
                  className="mr-2"
                />
                <label htmlFor={`brand-${brand}`} className="cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Right products column */}
        <div className="col-span-1 md:col-span-3">
          {/* We can add a 'results' header or sorting UI up here if desired */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              ნაპოვნია {filteredProducts.length} პროდუქტი
            </p>
            {/* A placeholder for sort dropdown, etc. */}
            {/* <select> <option>Sort by price</option> </select> */}
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-2 rounded"
                />
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p>{product.price} ₾</p>
                <p
                  className={
                    product.inStock ? "text-green-600" : "text-red-600"
                  }
                >
                  {product.inStock ? "საწყობშია" : "არ არის საწყობში"}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`mt-2 px-4 py-2 rounded text-white ${
                    product.inStock
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  კალათაში დამატება
                </button>
              </div>
            ))}
          </div>

          {/* Cart summary at bottom */}
          <div className="mt-6 bg-white shadow p-4 rounded-lg">
            <h2 className="font-bold text-xl mb-2">კალათა:</h2>
            {cart.length === 0 ? (
              <p>კალათა ცარიელია</p>
            ) : (
              <ul className="list-disc pl-6">
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.price} ₾
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
