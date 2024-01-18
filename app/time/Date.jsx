'use client'
import React, {useState} from 'react'
import './time.css'

function Date() {
  const [date, setDate] = useState('');

  const onChange = (e) => {
    setDate(e.target.value)
  } 

  return (
    <div className='time_content'>
      <input type="date" value={date ? date.toString().split('T')[0]:''} onChange={onChange} placeholder='fecha' className='time_input' />
    </div>
  )
}

export default Date