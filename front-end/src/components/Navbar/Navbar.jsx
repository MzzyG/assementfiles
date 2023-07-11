import "./Navbar.css";
import { logo_KJD } from "../../assets/index";

const Navbar = () => {
  return (
    <menu>
      <nav className="wrapper">
        <a href="#" className="logo">
          <img src={logo_KJD} />
        </a>
        <ul className="nav-bar-menu">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Industries</a>
          </li>
          <li>
            <a href="#">Cases</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <a href="#" className="btn-primary">{`Let's Talk`}</a>
      </nav>
    </menu>
  );
};

export default Navbar;
