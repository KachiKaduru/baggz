import { useState } from "react";

import backBtn from "../images/icons/Chevron-Left.svg";

import { productDetailsArr } from "./ItemsComponent";

const headingsArr = ["Description", "Shipping Info", "Payment Options"];

export default function ProductDescription({ onOpen, bag, onAddToCart }) {
  return (
    <section className="prod-desc">
      <div className="container">
        <ExitBar onOpen={onOpen} />
        <DisplayProduct bag={bag} onAddToCart={onAddToCart} />
        <ProductInformation />
      </div>
    </section>
  );
}

function ExitBar({ onOpen }) {
  return (
    <div className="exit-bar">
      <button onClick={onOpen}>
        <img src={backBtn} alt="back" />
      </button>
    </div>
  );
}

function DisplayProduct({ bag, onAddToCart }) {
  return (
    <section className="disp-prod">
      <div className="prod-img">
        <img src={bag.img} alt={bag.name} />
      </div>

      <div className="prod-details">
        <div className="names">
          <h2>{bag.name}</h2>

          <h4>
            Wallet with chain
            <p>Style #36252 0YK0G 1000</p>
          </h4>
          <h3 className="price">${bag.price}</h3>
        </div>

        <button className="buy-btn">buy now</button>

        {bag.cart ? (
          <h3 className="added">🎉 Added to cart </h3>
        ) : (
          <button className="add-btn" onClick={() => onAddToCart(bag)}>
            add to cart
          </button>
        )}
      </div>
    </section>
  );
}

function ProductInformation() {
  const [currentBar, setCurrentBar] = useState("Description");

  function handleBarChange(x) {
    setCurrentBar(x);
  }

  return (
    <section className="prod-info">
      <div className="info-bar">
        {headingsArr.map((head) => (
          <div
            className={`heading ${currentBar === head ? "current-bar" : null}`}
            onClick={() => handleBarChange(head)}
            key={head}
          >
            {head}
          </div>
        ))}
      </div>

      {productDetailsArr.map(
        (product) =>
          product.heading === currentBar && (
            <div className="info-stn" key={product.id}>
              <p>{product.topHeading}</p>
              <br />
              {product.subheading && <h4>{product.subheading}</h4>}
              <p>{product.bottomHeading} </p>
            </div>
          )
      )}
    </section>
  );
}
