import React from 'react';
import style from "./SearchBar.module.css"
import { BiSearchAlt, BiMapPin } from 'react-icons/bi';

export default function SearchBar({onSearch}) {
  // acá va tu código

  return (
    <form 
      className={style.searchBar} 
      onSubmit={(e)=>{
          e.preventDefault();
          const input = document.getElementById("input");
          onSearch(input.value)
          input.value = "";
        }
      }
    >
      <BiMapPin className={style.icon}/>
      <input id='input' type="text" placeholder='Ciudad...' className={style.input}/>
      {/* <input type="submit" value="Agregar" onClick={()=>props.onSearch("Buscando...")} className={style.submit}/> */}
      <button type="submit" className={style.submit}>
        <BiSearchAlt />
      </button>
    </form>
  );
};