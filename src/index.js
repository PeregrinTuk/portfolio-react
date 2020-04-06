import React from 'react';
import ReactDOM from 'react-dom';
import { Instagram, LinkedIn, Curriculum, Behance, Dribbble } from './svglogos';
import { Models } from './models';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';
import './style.css';

function Portfolio() {
	return (
		<Router>
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
				<a className="ocho border-bottom" href="CV.pdf" target="_blank">
					<div>
						<Curriculum />
					</div>
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
				<a
					className="diez border"
					href="https://dribbble.com/juliomu"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div>
						<Dribbble />
					</div>
				</a>
				<div className="post-uno"></div>
				<div className="post-dos"></div>
				<div className="post-tres"></div>
				<div className="post-cinco"></div>
			</div>
			<Switch>
				<Route
					path="/models"
					render={() => {
						return <Models />;
					}}
				/>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));
