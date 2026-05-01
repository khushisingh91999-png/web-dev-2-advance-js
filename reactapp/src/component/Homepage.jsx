import React,{useState} from 'react';
import { Link } from 'react-router-dom'
function Homepage() {
     const [login,setLogin]=useState(false)
//   if(login){
//     return<><button onClick={()=>setLogin(false)}>Logout</button></>
//   }else{
//   return<><button onClick={()=>setLogin(true)}>Login</button></>
//   }

    return (
      <>
      {login?<button onClick={() => setLogin(false)}>Logout</button>:<button onClick={() => setLogin(true)}>Login</button>}
      <ul>
        <li><Link to ="/">Homepage</Link></li>
        <li><Link to ="/Contact">Contact</Link></li>
      </ul>
        </>
    )
}
export default Homepage