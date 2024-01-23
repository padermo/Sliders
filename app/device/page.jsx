'use client'
import React, {useEffect, useState} from 'react'

function Device() {
  const [device, setDevice] = useState('')
  
  useEffect(()=>{
    const userAgent = window.navigator.userAgent;
    let os = '';

    if (/Windows/.test(userAgent)) {
      os = 'Windows';
    } else if (/Macintosh/.test(userAgent)) {
      os = 'Macintosh';
    } else if (/Linux/.test(userAgent)) {
      os = 'Linux';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
      os = 'iOS';
    } else {
      os = 'Unknown';
    }

    setDevice(os)
  },[])

  return (
    <div>
      {device && device}
    </div>
  )
}

export default Device