import { useState } from "react"
import { json } from "react-router-dom";
export default function Add(){
    const[all,setAll]=useState(null);
    function xyz(event){
        const a=event.target.name;
        const b=event.target.value;
        setAll((x)=>({...x,[a]:b}));
    }
    async function abc(){
        var headers={"method":"post","headers":{"content-type":"application/json"},
        "body":JSON.stringify(all)};
        var res=await fetch("http://tsdc:4000/users",headers);
        var data=await res.json();
        alert((JSON.stringify(data)));
    }
    
    return(<>
        <table>
            <tr>
                <td>ID</td>
                <td><input name="_id" onChange={xyz} /></td>
            </tr>
            <tr>
                <td>pass</td>
                <td><input name="password" onChange={xyz} /></td>
            </tr>
            <tr>
                <td>name</td>
                <td><input name="name" onChange={xyz} /></td>
            </tr>
            <tr>
                <td>role</td>
                <td><input name="role" onChange={xyz} /></td>
            </tr>
            
        </table>
        <button onClick={abc}>ADD</button>
    </>)

    }