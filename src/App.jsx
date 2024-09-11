
import { useEffect, useState } from 'react';
import './App.css'
import Content from './content';
import apiRequest from './apiRequest';


function App() {
  const [newitem, setnewitem] = useState("");
  const [search, setsearch] = useState("");
  const [items, setitems] = useState([]);
  const [read, setread] = useState(false);
  const [checked, setchecked] = useState(true);




  useEffect(() => {

    const fetchdata = async () => {
      const APIURL = "http://localhost:3500/items";

      try {

        const response = await fetch(APIURL);
        const data = await response.json();
        setitems(data);

      } catch (err) {
        console.log("Error", err);
      }
    }
    fetchdata();
  });



  const handledelete = async (id) => {


    const listitems = items.filter((item) => (item.id !== id));
    setitems(listitems);




    const deleteoptions = {
      method: "DELETE",

    }

    const result = await apiRequest(`http://localhost:3500/items/${id}`, deleteoptions)



  }
  const handlecheck = async(id) => {

    
    const listitems=items.map((item)=>item.id===id
  ?{...item,checked:!item.checked} :item)
setitems(listitems); 
const myitem=listitems.filter(item=>(item.id===id))

const updateoptions = {
  method: "PATCH",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({checked:myitem[0].checked})
}

const result = await apiRequest(`http://localhost:3500/items/${id}`, updateoptions)



  }


  const handleadd = async (newitem) => {


    const id = items.length ? items[items.length - 1].id + 1 : 1;


    const newlistitems = { id, checked: false, item:newitem }
    const listitems = [...items, newlistitems];
    console.log(listitems);
    setitems(listitems);
    setnewitem("");


    const postoptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newlistitems)
    }

    const result = await apiRequest("http://localhost:3500/items", postoptions)




  }






  return (
    <>
      <Content
    
       items={items.filter(item=>((item.item.toLowerCase()).includes(search.toLowerCase())))}
        setitems={setitems}
        newitem={newitem}
        setnewitem={setnewitem}
        search={search}
        setsearch={setsearch}
        handlecheck={handlecheck}
        handleadd={handleadd}
        read={read}
        setread={setread}
        handledelete={handledelete}


      />



    </>
  )
}

export default App
