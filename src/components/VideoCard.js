import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, 
		demoChannelUrl, demoChannelTitle } from "../utils/constants";
import style from './styles/VideoCard.module.css';

export function VideoCard({video: {id: {videoId}, snippet}}) {
	console.log(videoId, snippet);
	return (
		<div className={style.containerCardVideo}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<img 
					className={style.preview}
					alt={snippet?.title}
					src={snippet?.thumbnails?.high?.url}>
				</img>
				<div className={style.titleVideo}>{snippet?.title}</div>
				<Link 
					to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
					className={style.descriptionVideo}>{snippet?.channelTitle || demoChannelTitle}
				</Link>
			</Link>
		</div>
	);
}