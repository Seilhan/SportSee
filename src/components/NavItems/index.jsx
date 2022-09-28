import "./style.css";
import Méditation from "../../assets/meditation.svg";
import Natation from "../../assets/natation.svg";
import Bike from "../../assets/bike.svg";
import Musculation from "../../assets/musculation.svg";

function NavItems() {
  return (
    <div className="navitems-container">
      <div className="navitems-content">
        <img src={Méditation} alt="" />
        <img src={Bike} alt="" />
        <img src={Natation} alt="" />
        <img src={Musculation} alt="" />
      </div>
      <p className="text-info">Copiryght, SportSee 2020</p>
    </div>
  );
}

export default NavItems;
