import { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Login from './LoginForm';
import Register from './RegisterForm';
import EnergyProduct from './HeaderProducts/energyProduct.js';
import Cart from './HeaderProducts/Cart.js';


const categories = [
  { name: 'ენერგო უზრუნველყოფა', image: 'https://www.intellcom.ge/images/category_icons/1718872549353.png' },
  { name: 'უსაფრთხოების სისტემები', image: 'https://www.intellcom.ge/images/category_icons/1718871864190.png' },
  { name: 'LAN & WAN', image: 'https://www.intellcom.ge/images/category_icons/1718871873622.png' },
  { name: 'ოპტიკური ქსელი', image: 'https://www.intellcom.ge/images/category_icons/1718871880556.png' },
  { name: 'აუდიო-ვიდეო', image: 'https://www.intellcom.ge/images/category_icons/1718871888783.png' },
  { name: 'მონაცემთა შენახვა', image: 'https://www.intellcom.ge/images/category_icons/1718871893761.png' },
];

const productCards = [
  { name: 'Product 1', model: 'Model 1', price: '€50', image: 'https://www.intellcom.ge/files/product_imgs/medium/1739437997125.png', inStock: true },
  { name: 'Product 2', model: 'Model 2', price: '€60', image: 'https://www.intellcom.ge/files/product_imgs/medium/1739449519403.png', inStock: false },
  { name: 'Product 3', model: 'Model 3', price: '€70', image: 'https://www.intellcom.ge/files/product_imgs/medium/1709639031639.png', inStock: true },
  { name: 'Product 4', model: 'Model 4', price: '€80', image: 'https://www.intellcom.ge/files/product_imgs/medium/1707290858508.png', inStock: true },
  { name: 'Product 5', model: 'Model 5', price: '€90', image: 'https://www.intellcom.ge/files/product_imgs/medium/1707288460985.png', inStock: true },
  { name: 'Product 6', model: 'Model 6', price: '€100', image: 'https://www.intellcom.ge/files/product_imgs/medium/1711519607409.png', inStock: false },
  { name: 'Product 7', model: 'Model 7', price: '€110', image: 'https://www.intellcom.ge/files/product_imgs/medium/1739436458767.png', inStock: true },
  { name: 'Product 8', model: 'Model 8', price: '€120', image: 'https://www.intellcom.ge/files/product_imgs/medium/1693559258553.png', inStock: true },
];

export default function Header() {
  const [language, setLanguage] = useState('ქარ');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showEnergyProduct, setShowEnergyProduct] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const languages = [
    {
      code: 'ქარ',
      label: 'ქართული',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    },
    {
      code: 'Eng',
      label: 'English',
      flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    },
  ];

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [
    'https://www.intellcom.ge/files/slider/1741096969467.png',
    'https://www.intellcom.ge/files/slider/1728048068765.png',
    'https://www.intellcom.ge/files/slider/1742474368819.png',
    'https://www.intellcom.ge/files/slider/1742474368819.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowBody(false);
    setShowLogin(true);
    setShowRegister(false);
    setShowEnergyProduct(false);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowBody(false);
    setShowRegister(true);
    setShowLogin(false);
    setShowEnergyProduct(false);
  };

  const handleEnergyClick = (e) => {
    e.preventDefault();
    setShowBody(false);
    setShowEnergyProduct(true);
    setShowLogin(false);
    setShowRegister(false);
  };
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowBody(false);
    setShowCart(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowEnergyProduct(false);
  };

  return (
    <div className=''>
      <header className="w-full">
        <div className="bg-white shadow-sm">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <img 
              src="https://cdn.vectorstock.com/i/500p/56/81/gear-and-wrench-icon-service-support-logo-vector-20755681.jpg" 
              alt="Logo" 
              className="h-8" 
            />
            <span className="text-lg font-bold text-gray-800">My Market</span>
          </div>

            <nav className="flex items-center gap-6 text-sm text-gray-800">
              <a href="#" className="hover:underline">პროექტები</a>
              <a href="#" className="hover:underline">ვაკანსია <span className="text-red-600 font-bold"></span></a>
              <a href="#" className="hover:underline">ტრენინგები <span className="text-red-600 font-bold"></span></a>
              <a href="#" className="hover:underline">კონტაქტი</a>
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative inline-block">
                <div className="absolute top-2 left-2 flex items-center pointer-events-none">
                  <img
                    src={languages.find((l) => l.code === language).flag}
                    alt="Flag"
                    className="w-5 h-5 mr-2"
                  />
                </div>
                <select
                  value={language}
                  onChange={handleChange}
                  className="appearance-none bg-white border border-gray-300 text-sm pl-8 pr-6 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
              <FaHeart className="text-gray-600 cursor-pointer border w-7 h-7 rounded" />
              <FaShoppingCart 
                onClick={handleCartClick}
                className="text-gray-600 cursor-pointer border w-7 h-7" 
              />
              <div className="">
                <button 
                  onClick={handleLoginClick}
                  className="px-4 py-2 rounded hover:text-red-400 transition duration-200"
                >
                  შესვლა
                </button>
                <span>/</span>
                <button 
                  onClick={handleRegisterClick}
                  className="text-black px-4 py-2 rounded hover:text-red-400 transition duration-200"
                >
                  რეგისტრაცია
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white relative">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3 relative">
            <div className="flex gap-6 text-sm flex-wrap relative">
              {/* You may update dropdown links to use similar click handlers if needed */}
              <div className="group">
                {/* For dropdown example, we use a simple link here */}
                <a href="#" onClick={handleEnergyClick} className="hover:underline">ენერგო უზრუნველყოფა</a>
                <div className="absolute left-0 top-full w-full bg-white text-black shadow-md mt-1 z-50 hidden group-hover:block">
                  <div className="max-w-screen-xl mx-auto px-6 py-6">
                    <div className="grid grid-cols-5 gap-8">
                      <div className="flex flex-col items-start space-y-1 text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src="https://www.intellcom.ge/images/category_icons/1716204060692.png" 
                            alt="solar" 
                            className="w-5 h-5" 
                          />
                          <h1 className="font-bold">მზის ენერგია</h1>
                        </div>
                        <a href="#" className="hover:underline text-sm">მზის პანელები</a>
                        <a href="#" className="hover:underline text-sm">On-Grid ინვერტორები</a>
                        <a href="#" className="hover:underline text-sm">Off-Grid ინვერტორები</a>
                        <a href="#" className="hover:underline text-sm">MPPT კონტროლერები</a>
                        <a href="#" className="hover:underline text-sm">აქსესუარები მზის ენერგიისთვის</a>
                      </div>
                      {/* Column 2 */}
                      <div className="flex flex-col items-start space-y-1 text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src="https://www.intellcom.ge/images/category_icons/1716204282728.png" 
                            alt="ups" 
                            className="w-5 h-5" 
                          />
                          <h1 className="font-bold">უწყვეტი კვების წყაროები</h1>
                        </div>
                        <a href="#" className="hover:underline text-sm">Line Interactive UPS</a>
                        <a href="#" className="hover:underline text-sm">On-Line UPS</a>
                        <a href="#" className="hover:underline text-sm">მოდულარული UPS</a>
                        <a href="#" className="hover:underline text-sm">UPS აქსესუარები</a>
                      </div>
                      {/* Column 3 */}
                      <div className="flex flex-col items-start space-y-1 text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src="https://www.intellcom.ge/images/category_icons/1716204341978.png" 
                            alt="battery" 
                            className="w-5 h-5" 
                          />
                          <h1 className="font-bold">აკუმულატორები</h1>
                        </div>
                        <a href="#" className="hover:underline text-sm">AGM აკუმულატორები</a>
                        <a href="#" className="hover:underline text-sm">GEL აკუმულატორები</a>
                        <a href="#" className="hover:underline text-sm">ლითიუმის აკუმულატორები</a>
                        <a href="#" className="hover:underline text-sm">აკუმულატორების კაბინეტები</a>
                        <a href="#" className="hover:underline text-sm">განმუხტვის კონტროლერები</a>
                        <a href="#" className="hover:underline text-sm">აკუმულატორის აქსესუარები</a>
                      </div>
                      {/* Column 4 */}
                      <div className="flex flex-col items-start space-y-1 text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src="https://www.intellcom.ge/images/category_icons/1720007621152.png" 
                            alt="protection" 
                            className="w-5 h-5" 
                          />
                          <h1 className="font-bold">ელექტროდამცავი მოწყობილობები</h1>
                        </div>
                        <a href="#" className="hover:underline text-sm">დენის იმპულსისგან დაცვა</a>
                        <a href="#" className="hover:underline text-sm">აკუმულატორის განმუხტვის კონტროლერები</a>
                        <a href="#" className="hover:underline text-sm">ავტომატური ამომრთველები</a>
                        <a href="#" className="hover:underline text-sm">დიფერენციალური ავტომატები</a>
                        <a href="#" className="hover:underline text-sm">DC ავტომატური ამომრთველები</a>
                        <a href="#" className="hover:underline text-sm">Bypass ავტომატური ამომრთველები</a>
                        <a href="#" className="hover:underline text-sm">დნობადი მცველები</a>
                        <a href="#" className="hover:underline text-sm">გაჟონვის რელეები</a>
                      </div>
                    </div>

                    <div></div>


                    {/* Bottom Centered 3 Items */}
                    <div className="mt-8 flex justify-center gap-16">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="https://www.intellcom.ge/images/category_icons/1719919271555.png" 
                          alt="dc-ac" 
                          className="w-6 h-6 mb-1" 
                        />
                        <a href="#" className="hover:underline text-sm">DC-AC ინვერტორები</a>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="https://www.intellcom.ge/images/category_icons/1720007461234.png" 
                          alt="poe" 
                          className="w-6 h-6 mb-1" 
                        />
                        <a href="#" className="hover:underline text-sm">PoE კვება</a>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="https://www.intellcom.ge/images/category_icons/1720007488280.png" 
                          alt="adapter" 
                          className="w-6 h-6 mb-1" 
                        />
                        <a href="#" className="hover:underline text-sm">ადაპტერები</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other navigation dropdowns ... */}
              <div className="group e flex items-center gap-2">
                <a href="#" className="hover:underline">უსაფრთხოების სისტემები</a>
                <div className="absolute left-0 right-0 top-full bg-white text-black shadow-md mt-1 z-50 hidden group-hover:block">
                  <div className="max-w-screen-xl mx-auto px-4 py-4 grid grid-cols-5 gap-4">
                    <a href="#" className="hover:underline text-sm">ვიდეო კამერები</a>
                    <a href="#" className="hover:underline text-sm">აუდიო ინტერფონი</a>
                    <a href="#" className="hover:underline text-sm">მოძრაობის დეტექტორები</a>
                    <a href="#" className="hover:underline text-sm">ქსელის ვიდეო ჩამწერები</a>
                    <a href="#" className="hover:underline text-sm">ტესტერი ხელსაწყოები</a>
                  </div>
                </div>
              </div>

              <div className="group">
                <a href="#" className="hover:underline">LAN & WAN</a>
                <div className="absolute left-0 right-0 top-full bg-white text-black shadow-md mt-1 z-50 hidden group-hover:block">
                  <div className="max-w-screen-xl mx-auto px-4 py-4 grid grid-cols-5 gap-4">
                    <a href="#" className="hover:underline text-sm">სვიჩები</a>
                    <a href="#" className="hover:underline text-sm">როუტერები</a>
                    <a href="#" className="hover:underline text-sm">PoE მოწყობილობები</a>
                    <a href="#" className="hover:underline text-sm">Patch Panel</a>
                    <a href="#" className="hover:underline text-sm">LAN კაბელები</a>
                  </div>
                </div>
              </div>

              <div className="group">
                <a href="#" className="hover:underline">ტელევიზია და ხმა</a>
                <div className="absolute left-0 right-0 top-full bg-white text-black shadow-md mt-1 z-50 hidden group-hover:block">
                  <div className="max-w-screen-xl mx-auto px-4 py-4 grid grid-cols-5 gap-4">
                    <a href="#" className="hover:underline text-sm">IPTV მოწყობილობები</a>
                    <a href="#" className="hover:underline text-sm">აუდიო გამაძლიერებლები</a>
                    <a href="#" className="hover:underline text-sm">დინამიკები</a>
                    <a href="#" className="hover:underline text-sm">HDMI Extenders</a>
                    <a href="#" className="hover:underline text-sm">IR კონტროლერები</a>
                  </div>
                </div>
              </div>

              <div className="group">
                <a href="#" className="hover:underline">აუდიო-ვიდეო</a>
                <div className="absolute left-0 right-0 top-full bg-white text-black shadow-md mt-1 z-50 hidden group-hover:block">
                  <div className="max-w-screen-xl mx-auto px-4 py-4 grid grid-cols-5 gap-4">
                    <a href="#" className="hover:underline text-sm">პროექტორები</a>
                    <a href="#" className="hover:underline text-sm">ეკრანები</a>
                    <a href="#" className="hover:underline text-sm">ვიდეო კედლები</a>
                    <a href="#" className="hover:underline text-sm">მიქშერები</a>
                    <a href="#" className="hover:underline text-sm">კონტროლერები</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="პროდუქტის ძიება"
                className="px-4 py-2 rounded-full text-black text-sm w-64"
              />
              <IoSearch className="absolute right-3 top-2.5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="FromAnotherPage">
        {!showBody && showLogin && (
          <div className="p-6">
            <Login />
          </div>
        )}
        {!showBody && showRegister && (
          <div className="p-6">
            <Register />
          </div>
        )}
        {!showBody && showEnergyProduct && (
          <div className="p-6">
            <EnergyProduct />
          </div>
        )}
                {!showBody && showCart && (
          <div className="p-6">
            <Cart />
          </div>
        )}
      </div>

      {showBody && (
        <div className="BODY">
          <div className="relative mt-8 flex justify-center">
            <div className="relative">
              <img
                src={carouselImages[currentIndex]}
                alt={`Carousel Image ${currentIndex}`}
                className="h-120 object-cover border rounded-lg shadow-lg"
              />
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
              >
                &gt;
              </button>
            </div>
          </div>


          <div className="flex justify-center items-center mt-8">
            <div className="grid grid-cols-3 gap-4 w-full max-w-screen-lg">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg shadow-lg bg-cover bg-center flex items-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-opacity-40 rounded-lg" />
                  <div className="relative z-10 px-4 text-black text-left">
                    <span className="text-xl font-semibold">{category.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 px-4">
            <div className="bg-gray-300 py-4 px-6 rounded-lg shadow-lg text-center w-full max-w-screen-lg">
              <h2 className="text-xl font-bold mb-4">ახალი პროდუქები</h2>
              <div className="grid grid-cols-4 gap-4">
                {productCards.map((product, index) => (
                  <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.model}</p>
                    <p className="text-lg font-bold">{product.price}</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                      Add to Cart
                    </button>
                    <p className={`mt-2 text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">ჩვენს შესახებ</h3>
              <ul className="text-left space-y-1">
                <li><a href="#" className="hover:underline">კომპანია</a></li>
                <li><a href="#" className="hover:underline">პარტნიორები</a></li>
                <li><a href="#" className="hover:underline">სიახლეები და მოვლენები</a></li>
                <li><a href="#" className="hover:underline">შესრულებული პროექტები</a></li>
                <li><a href="#" className="hover:underline">სერვისები</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-left">მზის ენერგია</h3>
              <ul className="space-y-2 text-left">
                <li><a href="#" className="hover:underline">სამეთვალყურეო სისტემის პროექტირება</a></li>
                <li><a href="#" className="hover:underline">უწყვეტი კვების წყაროების პროექტირება</a></li>
                <li><a href="#" className="hover:underline">WiFi ქსელი</a></li>
                <li><a href="#" className="hover:underline">MikroTik-ის კონფიგურაცია</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-left">ყველას ნახვა</h3>
              <ul className="space-y-2 text-left">
                <li><a href="#" className="hover:underline">წესები და პირობები</a></li>
                <li><a href="#" className="hover:underline">ზოგადი პირობები</a></li>
                <li><a href="#" className="hover:underline">მიწოდების პირობები</a></li>
                <li><a href="#" className="hover:underline">გადახდის პირობები</a></li>
                <li><a href="#" className="hover:underline">საგარანტიო მომსახურების პირობები</a></li>
                <li><a href="#" className="hover:underline">კონფიდენციალურობის პოლიტიკა</a></li>
                <li><a href="#" className="hover:underline">დაბრუნების პოლიტიკა</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-left">საკონტაქტო ინფორმაცია</h3>
              <ul className="space-y-2 text-left">
                <li>+995 322420410</li>
                <li>+995 577657520</li>
                <li><a href="mailto:sale@intellcom.net" className="hover:underline">info@airlink.ge</a></li>
                <li>დიდი დიღომი, ბარონ დე ბაის #44</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          </div>
        </div>
      </footer>
    </div>
  );
}
