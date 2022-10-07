import Card from "./components/Card";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";

function App() {
  const arr = [
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "12 999 руб.",
      image: "/img/sneakers/1.jpg",
    },

    {
      name: "Мужские Кроссовки Nike Air Max 270 Suede",
      price: "12 999 руб.",
      image: "/img/sneakers/2.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "8 499 руб.",
      image: "/img/sneakers/3.jpg",
    },
    {
      name: "Кроссовки Puma X Aka Boku Future Rider Mid",
      price: "8 999 руб.",
      image: "/img/sneakers/4.jpg",
    },
  ];

  return (
    <div className="wrapper clear">
      {/* <Drawer /> */}
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search_block d-flex">
            <img src="/img/scope.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} image={obj.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
