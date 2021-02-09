import Header from './Header'
import { useState} from 'react'
function Register(){
     const [name,setName]=useState("");
     const [password,setPassword]=useState("");
    
    async function signUp(){
       // let item={name,password}
      //let result=await fetch('http://192.168.0.105/master/api/product/',{
           // method:'POST',
          //    headers:{
         //       'Content-Type':"application/json",
          //      'Accept':"application/json"
        //    },
        //    body:JSON.stringify(item)
        //});
        //result=await result.json();
        //console.warn("result",result);
      //  localStorage.setItem("user-info",JSON.stringify(result));
      //  history.pushState("./add");
    }
    return(
        <div>
            <Header/>
          <div className="col-sm-6 offset-sm-4">
            <h1>User Sign</h1>
             <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder='Product Name'/>
              <br/>                   
             <input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)}  placeholder='Password'/>
              <br/>
               <button onClick={signUp}>Register</button>
        </div>
        </div>
    )
}
export default Register