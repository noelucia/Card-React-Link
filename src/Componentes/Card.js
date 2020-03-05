import React from "react";
import "./Card.css";
import { useParams } from "react-router-dom";
import cards from './infoCards'

const Card = () => {
  let { id } = useParams();
  const card = cards[id]
  return (
    <section className="todo">
      <section
        className="card"
        style={{ backgroundImage: `url(${card.img})` }}>
        <div className="contenedor-Texto">
          <p className="powerful">
          {card.subtitle}
          </p>
          <h1 style={{color: card.color}}>{card.title}</h1>
          <p>
           {card.texto}
          </p>
          <a
            href="https://www.linkedin.com/in/noelia-luc%C3%ADa-rodr%C3%ADguez/"
            className="link"
            style={{color: card.color}}>
            LINK
          </a>
        </div>
        <div className="icono">
          <i
            className="fa fa-chevron-circle-down"
            aria-hidden="true"
            style={{color: card.color}}
          ></i>
        </div>
      </section>
    </section>
  );
};

export default Card;
