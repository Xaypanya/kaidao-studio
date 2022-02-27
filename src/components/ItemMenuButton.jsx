import React from 'react'

export default function ItemMenuButton(props) {
  const {imgIconUrl, handleClick} = props;
  return (
    <>
        <button onClick={()=> handleClick()} className="flex flex-col gap-1 items-center py-2 px-2 align-middle shrink-0 bg-white text-xs border-transparent border-2 hover:border-black active:opacity-70 rounded-lg shadow-xl">
               <img src={imgIconUrl} alt={`${imgIconUrl} - icon | kaidao studio`} className="w-7 lg:w-11"/>
        </button>
    </>
  )
}
