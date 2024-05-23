import React, {useState, useEffect} from 'react'

const Api=() => {

    const [apiData, setApiData] = useState([]);

    async function loadData()
    {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const mainData = await res.json();
        setApiData(mainData)

        // console.log(mainData);
    }

    useEffect(() => {
        loadData();
    })

  return  !apiData.length > 0 ? (<div>
    <div className='h-[60vh] w-[90vw] bg-gray-400 rounded-lg shadow-lg'></div>
  </div>
  ):(
    <>
   {/* <button className='p-3 rounded-md bg-gray-900 text-white m-2 shadow-lg'
   onClick={loadData}
   >Click me</button> */}

   <table className='border-solid border-2 border-black-600 m-10 p-5' >
    <tr className='border-solid border-2 border-black-600  m-5 p-5'>
        <th>Sr No.</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Address</th>
    </tr>

    {
        apiData.map((val, index)=>{
            return(
                <tr className='border-solid border-2 border-black-600  m-5 p-5'>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.address.street},{val.address.city},{val.address.zipcode}</td>
                </tr>
            );
        })
    }
   </table>
    </>
  );
}

export default Api