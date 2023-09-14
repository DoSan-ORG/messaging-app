import { useDispatch } from "react-redux";
import { themeActions } from "../store/theme";
function NavBar() {
  const theme = localStorage.getItem("theme");
  const dispatch = useDispatch();

  const onSwitchThemeHandler = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    dispatch(themeActions.switchTheme(newTheme));
  };

  return (
    <header className="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top">
      <div className="container px-3">
        <a href="/" className="navbar-brand pe-3">
          Chat
        </a>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                {/* <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">tab1</a> */}
              </li>
              <li className="nav-item dropdown">
                {/* <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">tab2</a> */}
              </li>
              <li className="nav-item dropdown">
                {/* <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" aria-current="page">Tab3</a> */}
                <ul className="dropdown-menu">
                  <li>
                    <a href="account-details.html" className="dropdown-item">
                      Account Details
                    </a>
                  </li>
                  <li>
                    <a href="account-security.html" className="dropdown-item">
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-notifications.html"
                      className="dropdown-item"
                    >
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="account-messages.html" className="dropdown-item">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-saved-items.html"
                      className="dropdown-item"
                    >
                      Saved Items
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-collections.html"
                      className="dropdown-item"
                    >
                      My Collections
                    </a>
                  </li>
                  <li>
                    <a href="account-payment.html" className="dropdown-item">
                      Payment Details
                    </a>
                  </li>
                  <li>
                    <a href="/sign-in" className="dropdown-item">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="account-signup.html" className="dropdown-item">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
          data-bs-toggle="mode"
        >
          <input
            type="checkbox"
            className="form-check-input"
            id="theme-mode"
            style={{ cursor: "pointer" }}
            onClick={onSwitchThemeHandler}
            defaultChecked={theme === "dark" ? true : false}
          />
          <label
            className="form-check-label d-none d-sm-block"
            htmlFor="theme-mode"
          >
            Light
          </label>
          <label
            className="form-check-label d-none d-sm-block"
            htmlFor="theme-mode"
          >
            Dark
          </label>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
