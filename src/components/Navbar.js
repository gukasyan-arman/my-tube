import React, { Component } from 'react';
import style from './styles/Navbar.module.css';
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import {SearchBar} from './UIItems/SearchBar'

export function Navbar() {
	return (
		<div className={style.container}>
			<Link to='/' className={style.logo}>
				<img src={logo} alt='logo' />
				<p className={style.logoTitle}>MyTube</p>
			</Link>
			<form>
				<SearchBar />
			</form>
		</div>
	);
}