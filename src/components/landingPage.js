import React, { Component } from "react";
import me from "./me.png";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="bg-grad">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img src={me} alt="avatar" className="avatar-img"></img>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="display-4  d-flex justify-content-center">
              Full stack Web Developer
            </h3>
            <hr className="style1"></hr>
            <p className="lead d-flex justify-content-center">
              HTML | CSS | Javascript | Core Java | React | Bootstrap | SQL |
              Mongo | Node
            </p>
            <p className="align-para">
              Gokul here, I have been working on React.js and node.js recently,
              I have hands on experience on developing websites and web
              applications. I am looking forward to working on challenging
              opportunties and projects which gives me a learning experience and
              grow my skills, I started working on Java inititaly and learned
              from scratch all by myself and worked on few projects. To know
              more details please get in touch
            </p>
          </div>
        </div>
        <footer style={{ textAlign: "center" }}>
          Copyright &copy; Gokul Parath{" "}
        </footer>
      </div>
    );
  }
}

export default LandingPage;
