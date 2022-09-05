import React from 'react';
import {Temp} from "./Temp"
import style from "./Card.module.css"

export default function Card(props) {
  // acá va tu código
  return (
    <article className={[style.card, props.main ? style.mainCard : ""].join(" ")}>
      <span className={style.name}>{props.name}</span>
      <button onClick={props.onClose} className={style.button}>X</button>
      <section>
        <Temp className={style.temp} label="Min" value={props.min} />
        <Temp className={style.temp} label="Max" value={props.max} />
        <img src={`http://openweathermap.org/img/wn/${props.img}@${props.main ? 4 : 2}x.png`} alt="img" />
        {/* <div>
          <h5>Min</h5>
          <p>{props.min}</p>
        </div>
        <div>
          <h5>Max</h5>
          <p>{props.max}</p>
        </div> */}
      </section>
    </article>
    );
};