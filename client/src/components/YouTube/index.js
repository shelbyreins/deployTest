import React, { Component } from 'react'

class YouTube extends Component {
    render() {
      return (
        <div className="container">
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
        </div>
      )
    }
  }
  
  export default YouTube
