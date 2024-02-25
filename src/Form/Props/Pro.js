import React, { useState } from 'react'
import Pro1 from './Pro1';

export default function Pro() {
    let [ value, setValue] = useState('neha');
  return (
    <div>
        {value}
        <Pro1 name ={value} />
      
    </div>
  )
}
