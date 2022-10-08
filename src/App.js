import Card from "./components/Card";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onAddToCart = (obj) => {
    axios
      .post("https://634014c0e44b83bc73c878f9.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://634014c0e44b83bc73c878f9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    axios
      .get("https://634014c0e44b83bc73c878f9.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://634014c0e44b83bc73c878f9.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search_block d-flex">
            <img src="/img/scope.svg" alt="search" />
            <input
              onChange={onChangeSearchValue}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
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
