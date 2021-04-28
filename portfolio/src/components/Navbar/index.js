import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand nav-brand-custom" href=".">Javier</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href=".">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=".">Portfolio</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href=".">About<span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
  );
}
