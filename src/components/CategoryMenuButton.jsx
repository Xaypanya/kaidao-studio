import React from 'react'

export default function CategoryMenuButton(props) {
  const {title, imgIconUrl, handleClick, isCategoryActive, currentCategory } = props;


  return (
    <>
        
        <button onClick={()=> handleClick()} className={`flex flex-col gap-1  items-center py-2 px-2 align-middle shrink-0 text-white text-xs  ${currentCategory === title ? "bg-yellow-400" : "bg-black" } hover:opacity-90 active:opacity-60 rounded-lg shadow-xl`}>
               <img src={imgIconUrl} alt={`${title} icon | kaidao studio`} className="w-7 lg:w-11"/> 
               {/* {title} */}
        </button>
    </>
  )
}
