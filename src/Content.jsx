import React from 'react'

const Content = ({ items, setitems, newitem, setnewitem, search, setsearch, handledelete, handleadd, handlecheck }) => {
  return (
    <div className="Todolist">
      <div className='input'>
        <input className='additem' value={newitem} onChange={(e) => setnewitem(e.target.value)} placeholder='Enter New Item'></input>
        <span><button onClick={() => handleadd(newitem)}>Add</button></span>
      </div>
      <div>
        <input className='search' type='text' value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search'></input>
      </div>




      {items.map((item) => (

        <div className='list' key={item.id}>
          <input
            type='checkbox'
            onChange={() => handlecheck(item.id)}
            checked={item.checked}>

            </input>
          <p>{item.item}</p>
          <button onClick={() => handledelete(item.id)}>Delete</button>
        </div>

      ))}




    </div>
  )
}

export default Content