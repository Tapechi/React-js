import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="./">
            <Logo></Logo>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Categoria1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Categoria2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Categoria3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <li className="icon">
              <CartWidget />
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
