import React from 'react';
import ReactDOM from 'react-dom';
import { AirBnb, JavaScript, Grid, Wordpress } from './svglogos';
import './style.css';

export function Models() {
	return (
		<div className="contenedor">
			<div
				className="pre-uno titulo-main"
				href="https://juliomu.netlify.com/"
			></div>
			<div className="pre-cuatro border-top"></div>
			<a
				className="uno border-top titulo"
				href="/models"
				rel="noopener noreferrer"
			>
				Main
			</a>
			<a
				className="dos border-top"
				href="airbnb.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AirBnb />
			</a>
			<a
				className="tres border-top"
				href="https://www.linkedin.com/in/julio-mu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<JavaScript />
			</a>
			<div className="seis border-bottom"></div>
			<div className="siete"></div>
			<a className="ocho border-bottom" href="CV.pdf" target="_blank">
				<div>
					<Grid />
				</div>
			</a>
			<a
				className="nueve border-bottom"
				href="https://www.behance.net/juliomu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<Wordpress />
				</div>
			</a>
			<a
				className="diez border"
				href="https://dribbble.com/juliomu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<Wordpress />
				</div>
			</a>
			<div className="post-uno"></div>
			<div className="post-dos"></div>
			<div className="post-tres"></div>
			<div className="post-cinco"></div>
		</div>
	);
}
