import React from 'react';
import ReactDOM from 'react-dom';
import { Instagram, LinkedIn, Curriculum, Behance } from './svglogos';
import { Models } from './models';
import { AirBnb } from './airbnb';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

function Portfolio() {
	return (
		<div className="contenedor">
			<div
				className="pre-uno titulo-main"
				href="https://juliomu.netlify.com/"
			></div>
			<div className="pre-cuatro border-top"></div>
			<Link to="/models" className="uno border-top titulo">
				Models
			</Link>
			<a
				className="dos border-top"
				href="http://instagram.com/julio.ux"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Instagram />
			</a>
			<a
				className="tres border-top"
				href="https://www.linkedin.com/in/julio-mu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedIn />
			</a>
			<div className="seis border-bottom"></div>
			<div className="siete"></div>
			<a
				className="ocho border-bottom"
				href="https://drive.google.com/file/d/19Bk9WHkEfxyyNqk3tnDMNpc_khbPCbcu/view?usp=sharing"
				target="_blank"
			>
				<Curriculum />
			</a>
			<a
				className="nueve border-bottom"
				href="https://www.behance.net/juliomu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<Behance />
				</div>
			</a>
			<a className="diez border"></a>
			<div className="post-uno"></div>
			<div className="post-dos"></div>
			<div className="post-tres"></div>
			<div className="post-cinco"></div>
		</div>
	);
}

function Main() {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					exact
					render={() => {
						return <Portfolio />;
					}}
				></Route>
				<Route
					path="/models"
					render={() => {
						return <Models />;
					}}
				/>
				<Route
					path="/airbnb"
					render={() => {
						return <AirBnb />;
					}}
				></Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));
