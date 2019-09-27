import React, { Component } from "react";
import card1 from "./card1.jpeg";
import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";
import card4 from "./card4.jpeg";
import card5 from "./card5.jpeg";
import card6 from "./card6.jpeg";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row padding-custom">
          <div className="col-lg-4 col-sm-12">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={card1}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Cart app</h5>
                <p className="card-text">
                  An app where multiple products are listed. where we can add
                  the product to the cart and also remove from it
                </p>
                <a
                  href="https://youtu.be/1Ilhg7mBx10"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={card2}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Library</h5>
                <p className="card-text">
                  Multiple books are listed with their author name. One can
                  issue the book from library and can also return it
                </p>
                <a
                  href="https://youtu.be/yD6FVFJQREo"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={card3}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Form</h5>
                <p className="card-text">
                  A customer form app where we can add and edit customer details
                  and can display it in a tabular format
                </p>
                <a
                  href="https://youtu.be/ggw5t25NYfs"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row padding-custom">
          <div className="col-lg-4 col-sm-12">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={card4}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Click X</h5>
                <p className="card-text">
                  A game where one scores by clicking on the ever changing X
                </p>
                <a
                  href="https://youtu.be/X2zZBx8vleg"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={card5}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Fetch Books</h5>
                <p className="card-text">
                  App which fetch the book name and decription from the url
                </p>
                <a
                  href="https://youtu.be/wmLiTOViNX0"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={card6}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Store</h5>
                <p className="card-text">
                  A store with multiple views and multiple features over the
                  component
                </p>
                <a
                  href="https://www.youtube.com/watch?v=OUAv-cLKeEk&feature=youtu.be"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
