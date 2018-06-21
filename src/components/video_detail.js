import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading....</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${ videoId }`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={ url }></iframe>
        </div>
          <div className="details">
              <img src="../images/comments-icons.svg"  alt="" id="comments-icon" />
              <div><h2>{ video.snippet.title }</h2></div>
              <div><p className="main-vid-sub-text">{ video.snippet.description }</p></div>
          </div>
      </div>
    );
};

export default VideoDetail;