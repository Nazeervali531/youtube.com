import React from 'react';
import './Videoitem.css';

const Videoitem=({video, onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(video) }   className=" Video-item item">
            <img alt={video.snippet.title} className="ui image"src={video.snippet.thumbnails.high.url}/>
            <div className="content">
              <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};
export default Videoitem;