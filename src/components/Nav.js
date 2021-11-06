import React from "react";
import logo from "../images/favicon.png";
import search from "../images/search.png";
import cart from "../images/shopping-cart.png";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="navbar">
          <div style={{ display: "flex", gap: "50px", marginLeft: "25px" }}>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img src={logo} style={{ height: "40px" }} alt="..." />
            </a>
          </div>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <a class="navbar-brand" href="#">
                  <img src={logo} style={{ height: "40px" }} alt="..." />
                </a>
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" style={{ color: "black" }}>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{ color: "black" }} href="#about">
                    Link
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
