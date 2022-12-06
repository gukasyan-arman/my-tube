import React, { useState, useEffect } from 'react';
import style from './styles/Feed.module.css';
import { categories } from '../utils/constants'
import {fetchFromApi} from '../utils/fetchFromAPI'
import {SideBar} from './SideBar'
import {Videos} from './Videos'

export function Feed() {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
		.then((data) => setVideos(data.items))
	}, [selectedCategory]);

	return (
		<div className={style.container}>
			<SideBar
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<Videos
				selectedCategory={selectedCategory}
				videos={videos}
			/>
		</div>
	);
}