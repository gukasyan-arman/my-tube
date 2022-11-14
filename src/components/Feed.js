import React, { useState, useEffect } from 'react';
import style from './styles/Feed.module.css';
import {SideBar} from './SideBar'

export function Feed() {
	return (
		<div className={style.container}>
			<SideBar />
		</div>
	);
}