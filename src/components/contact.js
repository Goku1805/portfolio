import React, { Component } from "react";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row bg-contact justify-content-center">
          <div className="col-6">
            <form
              className="form-style"
              method="POST"
              action=" https://poback.herokuapp.com/post-feedback"
            >
              <h1>Hola!</h1>
              <h4>
                {" "}
                I am based out of Delhi and will be happy to assist you with
                your request
              </h4>
              {/* <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input
                  type="Name"
                  name="Name"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="Name"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlMessage1">Message</label>
                <textarea
                  type="message"
                  name="message"
                  className="form-control"
                  id="exampleFormControlMessage1"
                  rows="3"
                ></textarea>
              </div>

              <input type="submit" className="btn btn-dark" value="Submit" />
            </form>
          </div> */}
          <div className="row col-12 justify-content-center padding-custom">
            <div>
              <h2>Connect</h2>
              <div className="social pa-icon">
                <a
                  href="https://www.facebook.com/gokul.rajan.140"
                  target="_blank"
                >
                  {" "}
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/gokul-rajan-90a368169/"
                  target="_blank"
                >
                  {" "}
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/Goku1805" target="_blank">
                  {" "}
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCktpo6o9xZ_TMKSM4nVML3w/videos"
                  target="_blank"
                >
                  {" "}
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
