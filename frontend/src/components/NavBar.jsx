import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import { useMovieContext } from "../contexts/MovieContext";

function NavBar() {
  const { favorites } = useMovieContext();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Movie App</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
          {favorites.length > 0 && (
            <span className="nav-badge">{favorites.length}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
