import React from "react"

 function Employee () {


    return(

        <div>
            <h1>Employees</h1>

                <div className="sort">
                    <input placeholder="search by name, email or phone no"></input>
                </div>


                <div className="showData">

                        <table>
                                <thead>
                                <tr>
                                    
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Department</th>
                                    <th>Status</th>
                                    <th>Phone no</th>
                                    <th>Email</th>
                                </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>shailesh</td>
                                        <td>Junior </td>
                                        <td>IT</td>
                                        <td>Active</td>
                                        <td>7893443789</td>
                                        <td>sp@gmail.com</td>
                                    </tr>
                                </tbody>
                                {/* <tbody>
                                {employees.map((employee) => (
                                    <div>

                                        <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.position}</td>
                                        </tr>
                                    </div>
                                ))}
                                </tbody> */}
                        </table>

                </div>


        </div>
    );
    
}

export default Employee;