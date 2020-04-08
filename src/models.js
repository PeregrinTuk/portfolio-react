import React, { Component } from 'react';
import { AirBnb, JavaScript, Grid, Wordpress, ReactLogo } from './svglogos';
import './style.css';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import pdfFile from './CV.pdf';

export function Models() {
	return (
		<div className="contenedor">
			<div
				className="pre-uno titulo-main"
				href="https://juliomu.netlify.com/"
			></div>
			<div className="pre-cuatro border-top"></div>
			<Link to="/" className="uno border-top titulo">
				Main
			</Link>
			<Link to="/airbnb" className="dos border-top titulo" target="_blank">
				<AirBnb />
			</Link>
			<a
				className="tres border-top"
				href="/Models/cronometro"
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
					<ReactLogo />
				</div>
			</a>
			<div className="post-uno"></div>
			<div className="post-dos"></div>
			<div className="post-tres"></div>
			<div className="post-cinco"></div>
		</div>
	);
}

export default class App extends Component {
	state = { numPages: null, pageNumber: 1 };

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

	render() {
		const { pageNumber, numPages } = this.state;

		return (
			<div>
				<nav>
					<button onClick={this.goToPrevPage}>Prev</button>
					<button onClick={this.goToNextPage}>Next</button>
				</nav>

				<div style={{ width: 600 }}>
					<Document file="/CV.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
						<Page pageNumber={pageNumber} width={600} />
					</Document>
				</div>

				<p>
					Page {pageNumber} of {numPages}
				</p>
			</div>
		);
	}
}
