function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btn_cross.svg"
            alt="remove"
            onClick={onClose}
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cart_item d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.image})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn_cross.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/cart_empty.svg"
              alt="emptyCart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте что-нибудь в корзину, чтобы сделать заказ
            </p>
            <button onClick={onClose}>Вернуться назад</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
