import React from 'react'

function ModifyCart() {
  return (
    <div className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] text-center border-gray-500 border-[0.5px] bg-red-400">
        <button className="float-left text-[8px] bg-yellow-400 rounded-lg h-3 w-4">-</button>
        <small className=" text-[8px]">1</small>
        <button className="float-right text-[8px] bg-yellow-400 rounded-lg h-3 w-4">+</button>
    </div> 
  )
}

export default ModifyCart
