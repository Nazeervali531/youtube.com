import React from 'react';
import Videoitem from './Videoitem';
const VideoDetails= ({video})=>{
    if (!video){
        return<div>Iam wating</div>
    }
    const VideoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    return(

        <div>
             <div className="ui embed">
                   <iframe title="video player"src={VideoSrc}/>
             </div>
                       <div className="ui segment">
                     <h3 className="ui header"> {video.snippet.title}</h3>
                      <p>{video.snippet.description}</p>
                 
            </div>
    </div>
    );

};
export default VideoDetails;