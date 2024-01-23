'use client'
import React, {useEffect, useState} from 'react'
import {isAndroid, isIOS, isWindows, isMacOs, deviceType, osName, osVersion, browserName} from 'react-device-detect'

function Device() {
  const [device, setDevice] = useState({
    os: osName,
    os_version: osVersion,
    type: deviceType,
    name:browserName,
    date:new Date()
  })
  
  // useEffect(()=>{
    
  //   console.log('isAndroid', isAndroid);
  //   console.log('isIOS', isIOS);
  //   console.log('isWindows', isWindows);
  //   console.log('isMacOs', isMacOs);
  //   console.log('deviceType', deviceType);
  //   console.log('osName', osName);
  //   console.log('osVersion', osVersion);
  //   console.log('browserName', browserName);
  // },[])

  return (
    <div>
      {JSON.stringify(device, null, '\n')}
    </div>
  )
}

export default Device