import React, { useState } from "react";

function Header() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  const [checked, setChecked] = useState(currentTheme === "dark");

  function changeTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  }

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1>
              <a className="navbar-brand" href="/">
                <span className="fa fa-diamond"></span>
                BigNova
                <span className="logo">Devloppement web</span>
              </a>
            </h1>

            <button
              className="navbar-toggler collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Accueil
                  </a>
                </li>
                <li className="nav-item @@about__active">
                  <a className="nav-link">
                    À propos
                  </a>
                </li>
        
                <li className="nav-item @@contact__active">
                  <a className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              {/* Auth buttons */}
              <div className="top-quote mr-lg-2 text-center">
                {!token ? (
                  <>
                    <a href="/login" className="btn login mr-2">
                      <span className="fa fa-user"></span> Se connecter
                    </a>
                    <a href="/signup" className="btn login">
                      <span className="fa fa-user-plus"></span> s'inscrire
                    </a>
                  </>
                ) : (
                  <>
                    <a href="/dashboard" className="btn login mr-2">
                      <span className="fa fa-tachometer-alt"></span> Dashboard
                    </a>
                    <a
                      href="/"
                      onClick={handleLogout}
                      className="btn login"
                    >
                      <span className="fa fa-sign-out-alt"></span> Déconnexion
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* toggle switch */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={checked}
                      onChange={changeTheme}
                    />
                    <div className="mode-container py-1">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
