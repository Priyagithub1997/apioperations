

const apiRequest = async(url="",optionobject=null) => {

try{
    const response=await fetch(url,optionobject)

}
catch(err){
    console.log(err);
}
  return (
    <>

    </>
  
  )
}

export default apiRequest