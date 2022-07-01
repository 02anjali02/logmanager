import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "./Data";


const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
    address:""
    
  });
 
  const { id } = useParams();
 
  return (
    <div className="container py-4 ">
      <Link className="btn btn-dark" to="/">
        back to Home
      </Link>
      <h3  >User Id: {id}</h3>
      <hr />
      {
        users.filter((user) => user.id.toString() === id.toString())
        .map((user)=>(

      <ul className="list-group w-50 border shadow " key={id} >
        <li className="list-group-item my-2 mx-2">name: {user.name}</li>
        <li className="list-group-item my-2 mx-2">user name: {user.username}</li>
        <li className="list-group-item my-2 mx-2">email: {user.email}</li>
        <li className="list-group-item my-2 mx-2">phone: {user.phone}</li>
        <li className="list-group-item my-2 mx-2">website: {user.website}</li>
        <li className="list-group-item my-2 mx-2">City: {user.address.city}</li>
  
  </ul>
        )

        )

      }
      
     
    </div>
  );
};

export default User;