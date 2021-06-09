import React from 'react';

const VideoDetail = ({video}) =>{
  if (!video){
      return <div>Submit a search term to view videos.</div>
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSRC} title={video.snippet.title}/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )

};

export default VideoDetail
