import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './styles/SearchBar.module.css';
import {searchSvg} from '../../utils/constants'

export function SearchBar() {
	return (
		<div className={style.container}>
			<input 
				placeholder='Введите запрос' 
				type="text" 
				className={style.searchInput} 
			/>
			<a href='#' className={style.searchButton}>🔍</a>
		</div>
	);
}