import axios from "axios"
export default function Show() {
    async function xyz() {
        
        var response = await axios.get("http://localhost:4000/users");
        var data = await response.data;
        
        alert(JSON.stringify(data))

    }
        return (
            <>
                <button onClick={xyz}>SHOW</button>
            </>
        )
}