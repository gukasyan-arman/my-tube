import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './styles/SearchBar.module.css';
import {searchSvg} from '../../utils/constants'

export function SearchBar() {
	return (
		<form className={style.container} onSubmit={() => {}}>
			<input
				placeholder='Введите запрос' 
				type="text" 
				className={style.searchInput} 
				onChange={() => {}}
			/>
			<button href='#' type='submit' className={style.searchButton}>🔍</button>
		</form>
	);
}