import React from 'react'
import "./InputBoxs.css"

function InputBoxs({type,value,placeholder}) {
  return (
    <div>
      <input 
      type={type} 
      value={value}
      placeholder={placeholder}
      className='input-box'
      />
    </div>
  )
}

export default InputBoxs;