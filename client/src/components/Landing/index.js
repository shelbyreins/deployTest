import React, { Component } from 'react'
import "./style.css"

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <div className="jumbotron mt-3"> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img className="d-block w-100 slides" src="../image4.jpg" alt="First slide" />
              <div class="carousel-caption  d-md-block ">
              <div className="steps">Step 1:</div>
                <h1>Create an account</h1>
                <h4>Click on the register button on the top left and fill out the form</h4>
              </div>
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100 slides" src="../image3.jpeg" alt="Second slide" />
              <div class="carousel-caption  d-md-block">
              <div className="steps">Step 2:</div>
                <h1>Login in and checkout our resouces!</h1>
                <h4>Buzz Buddy is here with many resources for you to explore</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 slides" src="../image2.jpeg" alt="Third slide" />
              <div class="carousel-caption  d-md-block">
                <div className="steps">Step 3:</div>
                <h1>Track your success!</h1>
                <h4>Click on Add an Event and select your event for the day</h4>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* </div> */}

        <h2 className="text-center" id="details">Track your Journey | Hold yourself Accountable | Save Money</h2>

        <div className="jumbotron mb-0 pb-1" id="background-jumbotron3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 landing-border">
                <h2 className="landing-title">Why Buzz Buddy?</h2>
                <p className="landing-p"> Buzz Buddy is the perfect buddy for you.  <br /> Built with you in mind. Buzz Buddy has <br/> and support to help you stop drinking. <br/> <strong>For good this time.</strong> </p>

              </div>
              
              <div className="col-md-6 landing-border">
                <h2 className="landing-title">How it works?</h2>
                <p  className="landing-p">Create an account and get tracking now... < br/> Buzz Buddy is not here to track alcohol intake, <br/> we track events. <strong>Be Proud!</strong> <br/> Did you go to an AA Meeting today? Track It!</p>

              </div>
            </div>

          </div>
        </div>

      </div>

    )
  }
}

export default Landing