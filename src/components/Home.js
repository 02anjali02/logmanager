import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Dialog from './DialogBox';
import { users } from './Data';

export default function Home() {
    // const [users, setusers] = useState([]);
    const[query,setquery]=useState("");
    const [userlist, setuserlist] = useState(users);
    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
        
        username: ""
    });
    const iduserRef = useRef();
    const handleDialog = (message, isLoading, username) => {
        setDialog({
            message,
            isLoading,
            username
        });
    };

    const handleDelete = (id) => {
        //Update
        const index = users.findIndex((p) => p.id === id);

        handleDialog("Are you sure you want to delete?", true, users[index].name);
        iduserRef.current = id;
    };

    const areUSureDelete = (choose) => {
        if (choose) {
            setuserlist(userlist.filter((p) => p.id !== iduserRef.current));
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };


  
    
    return (
        <div className='container'>
           <input type="text" className='form-control  my-4' placeholder='search' onChange={e=>setquery(e.target.value)} ></input>
           <i class="fa-solid fa-magnifying-glass"></i>
            <table class="table border shadow">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    userlist.filter((user)=>user.name.toLowerCase().includes(query))
                    .map((user,index)=>(
                        <tr>

                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td className='my-2'>
                               <Link to={`/${user.id}`} className='btn btn-dark me-2'>view</Link>
                               <Link to="/" className='btn btn-dark me-2'onClick={() => handleDelete(user.id)} >delete</Link>
                            </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
            {dialog.isLoading && (
        <Dialog
          //Update
          nameProduct={dialog.username}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}


        </div>
        
    )
}
