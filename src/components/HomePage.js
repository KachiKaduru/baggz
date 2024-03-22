import Header from "./HeaderComponent";
import wishlistBtn from "../images/icons/icons8-heart-50.png";
import wishlistBtnII from "../images/icons/icons8-heart-50-red.png";

export default function HomePage({ bagsList, onClickedBag, onAddToWishlist }) {
  return (
    <section className="homepage">
      <div className="container">
        <Header />
        <Hero />
        <BagsComponent
          bagsList={bagsList}
          onClickedBag={onClickedBag}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    </section>
  );
}

function Hero() {
  return (
    <main>
      <h3>
        <span>This </span>
        <span>season's </span>
        <span>latest</span>
      </h3>
    </main>
  );
}

function BagsComponent({ bagsList, onClickedBag, onAddToWishlist }) {
  return (
    <section className="bags-comp-stn">
      {bagsList.map((bag) => (
        <div className="bag-item" key={bag.id} onClick={(e) => onClickedBag(e, bag)}>
          <div className="imgs-div">
            <img src={bag.img} alt={bag.name} />
          </div>

          <h3>{bag.name}</h3>
          <button>shop now</button>
          <div
            className={`wishlist-btn heart ${bag.liked ? "liked" : ""}`}
            onClick={() => onAddToWishlist(bag)}
          >
            <img className="heart" src={bag.liked ? wishlistBtnII : wishlistBtn} alt="like" />
          </div>
        </div>
      ))}
    </section>
  );
}
