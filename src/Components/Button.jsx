import React from 'react'

export default function Button({number,setActiveTab,objBoolean,setRating,activeTab}) {
  return (
    <div onClick={()=>{setActiveTab(objBoolean);setRating(number)}} className={`${
      activeTab
        ? "bg-med-grey text-white "
        : "bg-star-bg text-med-grey"
    }  w-8 h-8 rounded-full flex justify-center items-center hover:bg-orange cursor-pointer hover:text-white`}>{number}</div>
  )
}
