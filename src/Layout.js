import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <h1>Tanuljunk angolul!</h1>
      </header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Választó
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gepel" className="nav-link">
              Gépel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Rendez" className="nav-link">
              Rendez
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
