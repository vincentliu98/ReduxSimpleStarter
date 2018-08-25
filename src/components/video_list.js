import React from 'react';
import VideoListItem from './video_list_item';


// after in index.js it passes "videos" prop to video_list class
// we can access it using the props. Since it's a list of videos, use MAP! Avoid for loops
// etag is unique from youtube API
const VideoList = (props) => { 
	const videoItems = props.videos.map((video) =>  {
		return (
			<VideoListItem 
			video = {video} 
			key={video.etag}
			onVideoSelect={props.onVideoSelect}
			/>
		);
	});
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		)
}

export default VideoList;