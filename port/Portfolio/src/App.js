import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"

import Home from './components/Home'
import About from './components/About'
import NavBar from "./components/navigation";
import Links from "./components/Links";
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

function App() {
    return (
    	<Router>
			<div className="app">
				<NavBar/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/About" component={About} />
					<Route exact path="/Projects" component={Projects}/>
					<Route exact path="/Experience" component= {Experience} />
					<Route exact path="/Contact" component={Contact} />
				</Switch>
				<Links/>
			</div>
		</Router>
    );
}

export default App;