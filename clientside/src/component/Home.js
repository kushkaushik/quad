import React, { useEffect,useState } from 'react'





const Home = () => {

  const [first, setFirst] = useState([])


useEffect(() => {
  fetch('/data').then(res=>  res.json()).then(data=>{
    console.log(data.mydata)
    setFirst(data.mydata)
  })



  





}, [])




















  return (
    <div className='container my-4'>
    <h4 style = {{marginLeft:"38%",padding:"0 3%"}}>Hodlinfo.com</h4>
<table className='centered card'>
    <thead>
      <tr>
          <th>Serial</th>
          <th>Name</th>
          <th>Last</th>
          <th>Buy</th>
          <th>Sell</th>
          <th>Volume</th>
          <th>Base_Unit</th>
      </tr>
    </thead>





<tbody>
 

{first.map((e)=>{

return (
  <>
       <tr>
   <td>{e.serial}</td>
        <td>{e.name}</td>
        <td>{e.last}</td>
        <td>{e.buy}</td>
        <td>{e.sell}</td>
        <td>{e.volume}</td>
        <td>{e.base_unit}</td>
       
        </tr>  

  </>
)

})}

       
      
     

    </tbody>



 



  </table>
        

</div>
  )
}




export default Home














































































































