import homeBtn from "../images/icons/n-home.png";
import searchBtn from "../images/icons/n-search.svg";
import wishlistBtn from "../images/icons/n-wishlist.svg";
import cartBtn from "../images/icons/n-cart.svg";

const navBarArr = [
  { id: 1, img: homeBtn, alt: "home" },
  { id: 2, img: searchBtn, alt: "search" },
  { id: 3, img: wishlistBtn, alt: "wishlist" },
  { id: 4, img: cartBtn, alt: "cart" },
];

export default function NavBar({ clickedNav, setClickedNav, cartArr }) {
  function handleNavClick(nav) {
    setClickedNav(nav.alt);
  }
  return (
    <nav className="navbar">
      <div className="container">
        {navBarArr.map((nav) => (
          <div
            className={`img-div ${clickedNav === nav.alt ? "clicked-nav" : null}`}
            onClick={() => handleNavClick(nav)}
            key={nav.id}
          >
            {nav.id === 4 && <div className="cart-count">{cartArr.length}</div>}
            <img src={nav.img} alt="" />
          </div>
        ))}
      </div>
    </nav>
  );
}
