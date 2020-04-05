import React from 'react';
import ReactDOM from 'react-dom';
import Instagram from './svglogos';
import LinkedIn from './svglogos';
import Curriculum from './svglogos';
import Behance from './svglogos';
import Dribbble from './svglogos';
import './style.css';

function Portfolio() {
	return (
		<div className="contenedor">
			<div
				className="pre-uno titulo-main"
				href="https://juliomu.netlify.com/"
			></div>
			<div className="pre-cuatro border-top"></div>
			<a className="uno border-top titulo" href="models.html">
				Models
			</a>
			<a
				className="dos border-top"
				href="http://instagram.com/julio.ux"
				target="_blank"
			>
				<Instagram />
			</a>
			<a
				className="tres border-top"
				href="https://www.linkedin.com/in/julio-mu"
				target="_blank"
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
			>
				<div>
					<Behance />
				</div>
			</a>
			<a
				className="diez border"
				href="https://dribbble.com/juliomu"
				target="_blank"
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
	);
}
ReactDOM.render(document.getElementById('root'));
