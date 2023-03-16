import React from 'react'
import '../index.css'

export default function KaidaoButton(props) {
    const {title, svgIcon, handleClick} = props;
    return (
      <>
             <button id="saveimg" onClick={()=> handleClick()} className="flex items-center gap-2 px-2 py-1 font-sans font-serif font-bold align-middle transition-all duration-200 ease-in-out bg-black rounded-lg shadow-xl hover:opacity-80 hover:scale-105 active:opacity-60 text-slate-50">
                        {svgIcon}
                        {title}
             </button>
      </>
    )
}
