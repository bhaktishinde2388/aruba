import React from 'react'
import "./InputBoxs.css"

function InputBoxs({type,value,placeholder,onChange,error}) {
  return (
    <div>
      <input 
      type={type} 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='input-box'
      
      />
           {error && (
        <p style={{ color: "red", fontSize: "12px" }}>
          {error}
        </p>
      )}
    </div>
  )
}

export default InputBoxs;