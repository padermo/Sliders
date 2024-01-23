'use client'
import React, {useEffect, useState} from 'react'

function Device() {
  const [device, setDevice] = useState('')
  
  useEffect(()=>{
    setDevice(window.navigator.userAgent)
  },[])

  return (
    <div>
      {device && device}
    </div>
  )
}

export default Device