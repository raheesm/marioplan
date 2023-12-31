import {NavLink } from "react-router-dom";

const SingnedInLinks = () => {
    return ( 
        <ul className="right">
            <li><NavLink to={"/create"}>New Project</NavLink></li>
            <li><NavLink to={"/"}>Log Out</NavLink></li>
            <li><NavLink to={"/"} className="btn btn-floating pink lighten-1">MP</NavLink></li>
        </ul>
     );
}
 
export default SingnedInLinks;