import React from 'react'
import style from "./Temp.module.css"

function Temp(props) {
  return (
    <div className={[style.temp, props.className].join(" ")}>
        <span className={style.label}>{props.label}</span>
        <span className={style.value}>{props.value}</span>
    </div>
  )
}

export {Temp}