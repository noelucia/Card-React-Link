import React from 'react';
import './App.css';
import Card from './Componentes/Card.js';
import HeaderImg from './Componentes/WonderWoman.jpg';
import Nueva from './Componentes/Cat2.jpg';
import Bati from'./Componentes/ella.jpg';

function App() {
  const imagenes=[
    {img:HeaderImg,
      title:"WONDER WOMAN",
      subtitle:"Powerful Women",
      color:"#FF0606",
      texto:" Wonder Woman 1984 (En español Mujer Maravilla 1984) es una próxima película de superhéroes estadounidense basada en el personaje de DC Comics, Mujer Maravilla. Está destinada a ser la secuela de Wonder Woman de 2017 y la novena entrega del Universo extendido de DC (DCEU). La película es dirigida por Patty Jenkins, con un guion de  Geoff Johns, David Callaham y Jenkins, y una historia escrita por Johns y Jenkins. Está protagonizada por Gal Gadot en el papel principal, junto a Chris Pine, Kristen Wiig y Pedro Pascal."
    }, 
    {
      img:Nueva,
      title:"CATWOMAN",
      subtitle:"Selina Kyle",
      color:"#2400A1",
      texto:"Catwoman is a fictional character created by Bill Finger and Bob Kane who appears in American comic books published by DC Comics, commonly in association with superhero Batman. The character made her debut as the Cat in Batman #1 (Spring 1940), and her real name is Selina Kyle. She is Batman's most enduring love interest and is known for her complex love-hate relationship with him.",
    },

    {
      img:Bati,
      title:"BATGIRL",
      subtitle:" Betty Kane",
      color:"#7750D7",
      texto:"Batgirl is the name of several fictional superheroines appearing in American comic books published by DC Comics, depicted as female counterparts to the superhero Batman. Although the character Betty Kane was introduced into publication in 1961 by Bill Finger and Sheldon Moldoff as Bat-Girl, she was replaced by Barbara Gordon in 1967, who later came to be identified as the iconic Batgirl. "
    }
  ];
  
  return (
      <div>
        {imagenes.map(card=>{ //hicimos un map (devuelve un array nuevo) para que loope y repita el headerImg
          return (<Card  title={card.title} color={card.color}  img={card.img} subtitle={card.subtitle} texto={card.texto}></Card>); //aca le cambie el titulo a la segunda carta
        })}
      </div>
    );
}

export default App;
