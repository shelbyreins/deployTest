import React, { Component } from 'react'
import "./style.css"

const API = "AIzaSyB9VyhRDYdmbZAXppHK91QeLHrz7NGc9d0";
const result = 10
const q = "motivation"


var youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${q}&part=snippet,id&order=date&maxResults=${result}`

class Resources extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoresult: [],

        };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {

        fetch(youtubeURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const videoresult = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({ videoresult });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        console.log(youtubeURL)
        return (
            <div>
                <div className="jumbotron">
                <div class="container">
                    <div class="row">
                        <div className="col-md-4">
                        <button type="button" className="btn btn-lg btn-primary resourceBtn" onClick={this.clicked}>YOUTUBE</button>

                        </div>
                        <div className="col-md-4">
                        <button  type="button" className="btn btn-lg btn-primary resourceBtn">MEETUP</button>
                        </div>
                        <div className="col-md-4">
                        <button type="button" className="btn btn-lg btn-primary resourceBtn">AA MEETING</button>
                        </div>
                    </div>
                </div>

                </div>


                {this.state.videoresult.map((link, i) => {
                    var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                    return frame
                    console.log(link)
                })
                }

                {this.frame}

            </div>




        )
    }
}


export default Resources
// YOUTUBE API
// AIzaSyB9VyhRDYdmbZAXppHK91QeLHrz7NGc9d0