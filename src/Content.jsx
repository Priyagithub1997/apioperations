import React from 'react'
import List from './List'

const Content = ({ items, newitem, setnewitem, handlecheck, search, setsearch, handledelete, handleadd }) => {
  return (
    <>
      <div className="Todolist">
        <div className='inputdiv'>
        <div className='input'>
          <input className='additem' value={newitem} onChange={(e) => setnewitem(e.target.value)} placeholder='Enter New Item'></input>
          <span><button onClick={() => handleadd(newitem)}>Add</button></span>
        </div>
        <div>
          <input className='search' type='text' value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search'></input>
        </div>
        </div>



        <List
          items={items}
          handlecheck={handlecheck}
          handledelete={handledelete}


        />








      </div>
    </>
  )
}

export default Content