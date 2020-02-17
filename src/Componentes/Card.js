import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <section className="todo">
      <section
        className="card"
        style={{ backgroundImage: `url(${props.img})` }}>
        <div className="contenedor-Texto">
          <p className="powerful">
          {props.subtitle}
          </p>
          <h1 style={{color: props.color}}>{props.title}</h1>
          <p>
           {props.texto}
          </p>
          <a
            href="https://www.linkedin.com/in/noelia-luc%C3%ADa-rodr%C3%ADguez/"
            className="link"
            style={{color: props.color}}>
            LINK
          </a>
        </div>
        <div className="icono">
          <i
            className="fa fa-chevron-circle-down"
            aria-hidden="true"
            style={{color: props.color}}
          ></i>
        </div>
      </section>
    </section>
  );
};

export default Card;
