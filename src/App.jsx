import Navbar from "./components/Navbar";
import CardProduct from "./components/CardProduct";
import CardCart from "./components/CardCart";
import { Products } from "./helper/Products";
import { useState } from "react";
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const remoyeFromCart = (id) => {
    setCart((prev) => prev.filter((element) => element.id != id));
  };

  return (
    <section className="flex flex-col w-full h-full  ">
      <Navbar />
      <main className="bg-[#D4ADFC] w-full h-full min-h-[90vh] flex flex-row p-10  font-sans">
        <section className="w-3/4  p-5 gap-5 flex flex-col">
          <h1 className="font-semibold text-lg">Products</h1>
          <section className="w-full flex flex-wrap overflow-scrol gap-5">
            {Products.map((element, index) => (
              <CardProduct
                key={index}
                image={element.image}
                title={element.title}
                price={element.price}
                handleClick={() => addToCart(element)}
              />
            ))}
          </section>
        </section>
        <section className="w-1/4 bg-gray-300 rounded-lg p-5 flex gap-3 flex-col mt-10">
          <h1 className="font-semibold text-lg">Cart</h1>
          <section className="w-full flex flex-col gap-2">
            {cart.length > 0 &&
              cart.map((element, index) => (
                <CardCart
                  key={index}
                  image={element.image}
                  title={element.title}
                  handleClick={() => remoyeFromCart(element.id)}
                />
              ))}
          </section>
        </section>
      </main>
    </section>
  );
};

export default App;
