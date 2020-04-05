import React from "react";
import ReactDOM from "react-dom";
import { Instagram, LinkedIn, Curriculum, Behance, Dribbble } from "./svglogos";
import "./style.css";

function Portfolio() {
  return (
    <div className="contenedor">
      <div
        className="pre-uno titulo-main"
        href="https://juliomu.netlify.com/"
      />
      <div className="pre-cuatro border-top" />
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
      <div className="seis border-bottom" />
      <div className="siete" />
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
      <div className="post-uno" />
      <div className="post-dos" />
      <div className="post-tres" />
      <div className="post-cinco" />
    </div>
  );
}
ReactDOM.render(<Portfolio />, document.getElementById("root"));
