import React, { Fragment } from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
        return <div> Please wait. Video Loading...</div> 
      }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

	return(
				<div className="video-detail col-md-8">
						<div className ="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
						</div>
						<div className="details"> 
								<div>{video.snippet.title}</div>
								<div>{video.snippet.description}</div>
						</div>

				</div>
	);
}

export default VideoDetail;