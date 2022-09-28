import "./style.css";
import Logo from "../../assets/logo.svg";
import Nav from "./NavTop.jsx";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo SportSee" />
      <Nav />
    </div>
  );
}

export default Header;
