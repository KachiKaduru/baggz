import bag1 from "../images/b-artsey.svg";
import bag2 from "../images/b-berkley.svg";
import bag3 from "../images/b-capucinus.svg";
import bag4 from "../images/b-dansboy-navyblue.png";
import bag5 from "../images/b-dansboy-wine.png";
import bag6 from "../images/b-louisv-blue.png";
import bag7 from "../images/b-louisv-pink.png";
import bag8 from "../images/b-monogram.svg";

export const bagItems = [
  { id: 1, liked: false, cart: false, price: 564, name: "Artsy", img: bag1 },
  { id: 2, liked: false, cart: false, price: 480, name: "Berkley", img: bag2 },
  { id: 3, liked: false, cart: false, price: 755, name: "Capucinus", img: bag3 },
  { id: 4, liked: false, cart: true, price: 610, name: "Dansboy Blue", img: bag4 },
  { id: 5, liked: false, cart: false, price: 522, name: "Dansboy Wine", img: bag5 },
  { id: 6, liked: false, cart: false, price: 920, name: "Louis Vuitton Blue", img: bag6 },
  { id: 7, liked: false, cart: false, price: 930, name: "Louis Vuitton Pink", img: bag7 },
  { id: 8, liked: false, cart: false, price: 805, name: "Monogram", img: bag8 },
];

export const productDetailsArr = [
  {
    id: 1,
    heading: "Description",
    subheading: "Materials & Care",
    topHeading:
      "As in handbags, the double ring and bar design defines the wallet shape, highlighting the front flap closure which is tucked inside the hardware. Completed with an organizational interior, the black leather wallet features a detachable chain.",
    bottomHeading: `All products are made with carefully selected materials. Please handle with care for longer product life.
    - Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth
    - Store in the provided flannel bag or box
    - Clean with a soft, dry cloth`,
  },
  {
    id: 2,
    heading: "Shipping Info",
    subheading: "Return Policy",
    topHeading:
      "Pre-order, Made to Order and DIY items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available.",
    bottomHeading:
      "Returns may be made by mail or in store. The return window for online purchases is 30 days (10 days in the case of beauty items) from the date of delivery. You may return products by mail using the complimentary prepaid return label included with your order, and following the return instructions provided in your digital invoice.",
  },
  {
    id: 2,
    heading: "Payment Options",
    subheading: false,
    topHeading:
      "We accepts the following forms of payment for online purchases: PayPal may not be used to purchase Made to Order Décor or DIY items.",
    bottomHeading:
      "The full transaction value will be charged to your credit card after we have verified your card details, received credit authorisation, confirmed availability and prepared your order for shipping. For Made To Order, DIY, personalised and selected Décor products, payment will be taken at the time the order is placed.",
  },
];
