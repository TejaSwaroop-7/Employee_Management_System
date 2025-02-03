import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link } from 'react-router-dom';

export default class ListEmployeeComponent extends Component {
	constructor(props)
	{
    	super(props);
        this.state=
		{
            employees:[]
    	}
    }
  
    componentDidMount()
	{
  		EmployeeService.getEmployees().then((res)=>
        {
        	this.setState({employees:res.data})
    	})
   	}

	deleteEmployee=(EmpId)=>
	{
		EmployeeService.deleteEmployee(EmpId).then((res)=>
		{
			EmployeeService.getEmployees().then((res)=>
			{
				this.setState({employees:res.data});
			})
		}).catch(error=>{
			console.log(error);
		})
	}

  	render() {
    		return (
      		<div>
				<h2 className='text-center mt-5'>Employee List</h2>
            	<div className='row'>
					<Link to="/addemployee" className='btn btn-outline-primary mt-2 w-70 font-weight-bold'>ADD EMPLOYEE</Link>
                	<table className='table  table-striped table-bordered'>
                    	<thead>
                        	<tr>
                            	<th>ID</th>
                            	<th>FirstName</th>
                            	<th>LastName</th>
                            	<th>Email</th>
                           	    <th>Actions</th>
                        	</tr>
                    	</thead>
                    	<tbody>
                        	{
                            	this.state.employees.map(
                                	element=>
                                	<tr key={element.id}>
					                    <td>{element.id}</td>
                                      	<td>{element.firstName}</td>
                                      	<td>{element.lastName}</td>
                                      	<td>{element.email}</td>
										<td>
											<Link to={`/update/${element.id}`} className='btn btn-info mb-1 mt-1'>Update</Link>
											<button className='btn btn-danger' style={{marginLeft:"50px"}} onClick={()=>this.deleteEmployee(element.id)}>Delete</button>
										</td>
                                	</tr>
                            	)
                        	}
                    	</tbody>
                	</table>
            	</div>        
      	</div>
    	)
  	}
	}