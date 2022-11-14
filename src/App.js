import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Feed } from './components/Feed';
import { VideoDetail } from './components/VideoDetail';
import { ChannelDetail } from './components/ChannelDetail';
import { SearchFeed } from './components/SearchFeed';

export function App() {
  return (
    <BrowserRouter>
        <div>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Feed />} />
				<Route path='/video/:id' element={<VideoDetail />} />
				<Route path='/channel/:id' element={<ChannelDetail />} />
				<Route path='/search/:searchTerm' element={<SearchFeed />} />
			</Routes>
		</div>
    </BrowserRouter>
  );
}