import React from "react";

import portfolioConfig from "../assests/json/portfolioConfig.js";

const Portfolio = (props) => {
  let loadFile = this.props.portfolioConfig;
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 text-box float-left">
          <h1 class="underline">Portfolio</h1>
          <img
            src={loadFile.portfolio.img}
            class="custom-img-500 img-fluid float-left"
            alt="placeholder"
          >
            {" "}
          </img>
          <img
            src="../glatorian13.github.io/img/500x500.png"
            class="custom-img-500 img-fluid float-left"
            alt="placeholder"
          >
            {" "}
          </img>
          <img
            src="../glatorian13.github.io/img/500x500.png"
            class="custom-img-500 img-fluid float-left"
            alt="placeholder"
          >
            {" "}
          </img>
          <img
            src="../glatorian13.github.io/img/500x500.png"
            class="custom-img-500 img-fluid float-left"
            alt="placeholder"
          >
            {" "}
          </img>
          <img
            src="../glatorian13.github.io/img/500x500.png"
            class="custom-img-500 img-fluid float-left"
            alt="placeholder"
          >
            {" "}
          </img>
          <img
            src="../glatorian13.github.io/img/500x500.png"
            class="custom-img-500 img-fluid float-left"
            alt="placeholder"
          >
            {" "}
          </img>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
