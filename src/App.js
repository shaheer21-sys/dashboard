import React from "react";
import "./App.css";
import Nav from "./nav";
import { CardsComp as Card } from "./CardsComp";
//import PortList from './portList';

function App() {
	return (
		<div className="App">
			<Nav />
			<Card />
		</div>
	);
}

// console.log("not ")
export default App;
