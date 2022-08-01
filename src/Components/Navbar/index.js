import React, {useState} from "react";
import { Nav } from "react-bootstrap";
import "../Components.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openCloseMenu = event => {
    setIsOpen(current => !current);
  };

  return (
    <header className="fix-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="/img/image 1.svg" alt="" width={180} />
            </a>
            <button className="navbar-toggler" onClick={openCloseMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isOpen? 'collapse navbar-collapse show':'collapse navbar-collapse'}`} id="navbarText">
              <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimony">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacts">Clients</a>
                </li>

                <li className="nav-item btn-reg">
                  <a href="https://app.zeals.asia/signin" className="nav-link">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
