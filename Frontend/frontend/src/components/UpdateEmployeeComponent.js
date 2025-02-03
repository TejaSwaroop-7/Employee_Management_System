import React, { useEffect } from 'react'
import { useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployeeComponent() {

    let navigate=useNavigate();

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const{id}=useParams("");

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res)=>
        {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        }).catch(error=>
            {
                console.log(error);
            })
    },[])

    const updateHandler=(e)=>
    {
        e.preventDefault();
        const employee={firstName,lastName,email};
        if(id)
        {
            EmployeeService.updateEmployee(id,employee).then(res=>
            {
                navigate('/show');
            }); 
        }
        else
        {    
            EmployeeService.createEmployee(employee).then(res=>
            {
                console.log(res.data);
                navigate('/show');
            })
        }
    }

    const cancelHandler=(e)=>
    {
        navigate('/show');
    }

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Update Employee</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group my-2'>
                            <label>First Name:</label>
                            <input className='form-control' placeholder='First Name' name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                        </div>
                        <div className='form-group my-2'>
                            <label>Last Name:</label>
                            <input className='form-control' placeholder='Last Name' name='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                        </div>
                        <div className='form-group my-2'>
                            <label>Email:</label>
                            <input className='form-control' placeholder='Email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <button className='btn btn-success' onClick={updateHandler}>update</button>
                        <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployeeComponent