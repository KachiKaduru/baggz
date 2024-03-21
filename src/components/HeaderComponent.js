import logo from "../images/icons/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>bagzz</h2>
      </div>

      <div className="user-dp"></div>
    </header>
  );
}
