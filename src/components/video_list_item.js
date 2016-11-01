import React from 'react';

const VideoListItem = (props) => {

    //the same as using ({video}) as parameter of the functional component
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => onVideoSelect(video) } className="list-group-item">
          <div className="video-list media">
              <div className="media-left">
                  <img src={imageUrl} className="media-object" />
              </div>

              <div className="media-body">
                   <div className="media-heading">{video.snippet.title}</div>
              </div>

          </div>

      </li>
    );
};

export default VideoListItem;