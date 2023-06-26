import { useState } from "react"
import { json } from "react-router-dom";
export default function Delete(){
    const[all,setAll]=useState(null);
    function xyz(event){
        const a=event.target.name;
        const b=event.target.value;
        setAll((x)=>({...x,[a]:b}));
    }
    async function abc(){
        var headers={"method":"put","headers":{"content-type":"application/json"},
        "body":JSON.stringify(all)};
        var res=await fetch("http://tsdc:4000/users/" + all._id,headers);
        var data=await res.json();
        alert("added");
    }
    
    return(<>
        <table>
            <tr>
                <td>ID</td>
                <td><input name="_id" onChange={xyz} /></td>
            </tr>
           
        </table>
        <button onClick={abc}>ADD</button>
    </>)

    }