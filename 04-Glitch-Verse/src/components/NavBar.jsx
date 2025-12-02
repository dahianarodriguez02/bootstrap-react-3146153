import "../Styles/NavBar.css";

export const NavBar = () => {
  return (
    <header
      className="navbar-wrapper bg-info-subtle"
      style={{ width: "100%", height: "160px" }}
    >
      <nav className="container nav-grid">

        {/* IZQUIERDA */}
        <div className="nav-left d-flex gap-4 align-items-center">
          <a href="#" className="nav-link-custom">Conoce el cómic</a>
          <a href="#" className="nav-link-custom">Conoce GlitchVerse</a>
        </div>

        {/* CENTRO */}
        <div className="nav-center">
          <img  src="./logo.png" alt="GlitchVerse" className="logo-img"
          />
        </div>

        {/* DERECHA */}
        <div className="iconos">
          <i className="bi bi-search nav-icon"></i>
          <i className="bi bi-cart3 nav-icon"></i>
        </div>

      </nav>
    </header>
  );
};


