import React, { Component } from 'react';
import style from './styles/SideBar.module.css';
import { categories } from '../utils/constants'
import classNames from 'classnames/bind'

export function SideBar() {
	const cx = classNames.bind(style);
	let selectedCategory = ''

	return (
		<div className={style.container}>
			{categories.map((category) => (
				<button 
					className={cx('item', {'itemSelected' : (selectedCategory === category.name)})}
					key={category.name}
					onClick={() => {
						selectedCategory = category.name
						console.log(selectedCategory)
					}}

				>
					<span className={style.iconMargin}>{category.icon}</span>
					<span>{category.name}</span>
				</button>
			))}

			<div className={style.sideBarCopyright}>© 2022 Gukasyan-Arman</div>
		</div>
	);
}