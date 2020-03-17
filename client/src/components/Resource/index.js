import React, { Component } from 'react'
import "./style.css"

const API = "AIzaSyB9VyhRDYdmbZAXppHK91QeLHrz7NGc9d0";
const result = 20
const q = "Videos to help stop drinking alcohol"
const language = "en"
const regionCode = "US"
const publishedAfter = "2018-01-01T00:00:00Z"

var youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${q}&part=snippet,id&order=date&maxResults=${result}&relevanceLanguage=${language}&regionCode=${regionCode}&publishedAfter=${publishedAfter}`

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
        return (
            <div>
                <div className="jumbotron">
                <div class="container">
                    <div class="row">
                        <div className="col-md-4">
                        <button type="button" className="btn btn-lg btn-primary resourceBtn" onClick={this.clicked}>Videos</button>

                        </div>
                        <div className="col-md-4">
                        <button type="button" className="btn btn-lg btn-primary resourceBtn">AA MEETING</button>
                        </div>
                        <div className="col-md-4">
                        <button type="button" className="btn btn-lg btn-primary resourceBtn">COMING SOON...</button>
                        </div>
                    </div>
                </div>

                </div>
                
                <div className="video container">
                {this.state.videoresult.map((link, i) => {
                
                    var frame = <div key={i} className="text-center"id="youtube"><iframe width="250" height="200" src={link} frameBorder="0" allowFullScreen></iframe></div>
                    
                    return frame
                    
                })
                }
                </div>
                

                {this.frame}
                

            </div>




        )
    }
}


export default Resources
// YOUTUBE API
// AIzaSyB9VyhRDYdmbZAXppHK91QeLHrz7NGc9d0