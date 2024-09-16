import React from 'react'

const List = ({ items, handlecheck, handledelete }) => {
  return (
    <>

      {items.map((item) => (
        <div className='listdiv'>

        <div className='list' key={item.id}>
          <input type="checkbox"
            onChange={() => handlecheck(item.id)}
            checked={item.checked}
          ></input>

          <p style={(item.checked) ? { textDecoration: "line-through" } : null} onClick={() => handlecheck(item.id)}>{item.item}</p>

          <button onClick={() => handledelete(item.id)}>Delete</button>



        </div>

</div>





      ))}
    </>
  )
}

export default List