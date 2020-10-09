import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeListComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data})
        })
    }

    addEmployee(){
        this.props.history.push("/add-employee")
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`)
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id)
        this.props.history.push("/employees")
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className ="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key  = {employee.id}>
                                        <td>{employee.fName}</td>
                                        <td>{employee.lName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                           <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button> 
                                           <button onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-info" style={{marginLeft: "10px"}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                
            </div>
        );
    }
}

export default EmployeeListComponent;