import React from "react";
import "../../styles/navbar.css";
import { useNavTransparenter } from "../../assets/js/useNavTransparenter";
import { useNavItemIndicator } from "../../assets/js/useNavItemIndicator";

export default function Navbar() {
  const isTransparent = useNavTransparenter();
  useNavItemIndicator();

  return (
    <nav
      class={`navbar ${
        isTransparent ? "" : "bg-dark"
      } fixed-top navbar-expand-lg p-2`}
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand ps-3 pt-2" href="#">
          <div class="h3 fw-bold text-header ">Lucas Su</div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item ms-2">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link" href="#articles">
                Articles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
