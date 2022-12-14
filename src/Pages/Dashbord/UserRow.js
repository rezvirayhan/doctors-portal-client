import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index, refetch}) => {
    const {email, role} = user
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Beraer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> {
            if(res.status === 403){
                toast.error('Opps... Sorry Fillad Make an Admin');
            }
            return res.json()})
        .then(data =>{
           if(data.modifiedCount > 0){
            refetch()
            toast.success('Opps... Sucessfully Make An Admin');
           }
        })
    }
    return (
        <tr>
        <th>{index +1}</th>
        <td>{email}</td>
        <td>{
            role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make An Admin</button>
                }</td>
        <td> <button class="btn btn-xs">Remove User</button></td>
      </tr>
    );
};

export default UserRow;