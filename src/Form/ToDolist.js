import React, { useState } from 'react'

export default function ToDolist() {

  let [field, setfield] = useState('');
  let [list, setlist] = useState([]);

  function addList() {
    setlist([...list, field])
    setfield('');
    return
  }

  function deletelist(index) {
    list = list.filter((x, i) => index !== i)
    setlist([...list])

  }
  return (
    <div>
      <input type=" text" value={field} onChange={(e) => setfield(e.target.value)} />
      <button onClick={() => addList()}> add list</button>
      <ul>
        {list.map((x, i) => {
          return (
            <li key={i}>
              {x}
              <button onClick={() => deletelist(i)}> delete list</button>
            </li>
          )
        })}
      </ul>


    </div>
  )
}

