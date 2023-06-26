import Add from "./Add";
import Show from "./Show";
import Update from "./Update"
import Delete from "./Delete" ;
import Search  from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return ( <>
    <Link to="/">Home</Link>
    <Link to="/add">Add</Link>
    <Link to="/show">Show</Link>
    <Link to="/update">Update</Link>
    <Link to="/delete">Delete</Link>
    <Link to="/search">Search</Link>
    <Routes>
      <Route path="/add" element=<Add /> />
      <Route path="/update" element=<Update /> />
      <Route path="/delete" element=<Delete /> />
      <Route path="/show" element=<Show /> />
      <Route path="/search" element=<Search /> />
    </Routes>
  </> );
}
    export default App;
