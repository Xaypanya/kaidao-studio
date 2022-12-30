import React from 'react'
import '../index.css'

export default function KaidaoButton(props) {
    const {title, svgIcon, handleClick} = props;
    return (
      <>
             <button id="saveimg" onClick={()=> handleClick()} className="flex gap-2 hover:opacity-80 hover:scale-105 transition-all ease-in-out duration-200 active:opacity-60 items-center align-middle font-serif bg-black text-slate-50 py-1 px-2 rounded-lg shadow-xl">
                        {svgIcon}
                        {title}
             </button>
      </>
    )
}
