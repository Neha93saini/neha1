import React, { useEffect, useState } from 'react'

export default function Useeffect() {
  let [ count, setcount] = useState(0);
  let [ ele,setele] = useState("");

  useEffect(()=>{
    ele = `u can click neha ${count}`
    setele(ele)
  })
  return (
    <div>
      {ele}
      <button onClick={() => setcount(count+1)}> click here</button>
      
    </div>
  )
}

