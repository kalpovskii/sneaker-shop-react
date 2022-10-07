import Card from "./components/Card";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  useEffect(() => {
    fetch("https://634014c0e44b83bc73c878f9.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search_block d-flex">
            <img src="/img/scope.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              image={item.image}
              onPlus={onAddToCart}
              onFavorite={() => console.log("onfav")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
