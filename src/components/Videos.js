import React, { Component } from 'react';
import style from './styles/Videos.module.css';
import {VideoCard} from './VideoCard'
import {ChannelCard} from './ChannelCard'

export function Videos({selectedCategory, videos}) {
	return (
		<div className={style.main}>
			<div className={style.title}>{selectedCategory} <span>videos</span></div>
			<div className={style.videos}>
				{videos.map((item, index) => (
					<div key={index}>
						{item.id.videoId && <VideoCard video={item} />}
						{/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
					</div>
				))}
			</div>
		</div>
	);
}