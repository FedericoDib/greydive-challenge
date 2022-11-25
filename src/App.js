import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Client from './components/client/Client';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path=':nameClient'
						loader={({ params }) => console.log(params)}
						action={({ params }) => {}}
						element={<Client />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
