import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router';


class Studentlist extends React.Component{

    state={
        student:[]
    }

    componentDidMount(){
axios.get("https://fakestoreapi.com/users")
.then((resposne)=>{
    console.log(resposne.data)
    this.setState({student:resposne.data})
})
.catch((err)=>{
    console.log(err)
})
    }

onButtonclick=()=>{
    this.props.history.push("/student/add");
}

onDeleteclick=(id)=>{
    axios.delete(`https://fakestoreapi.com/users/${id}`)
    .then((response)=>{
        console.log("student is deleted")
        axios.get("https://fakestoreapi.com/users")
.then((resposne)=>{
    console.log(resposne.data)
    this.setState({student:resposne.data})
})
.catch((err)=>{
    console.log(err)
})
    })
    .catch((err)=>{
        console.log(err)
    })
}
    render(){
        return(<div>
            <Button onClick={this.onButtonclick} >Add Student</Button>
<table className='table table-striped'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Username</th>
            </tr>
            </thead>
            <tbody>
                {this.state.student.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.name.firstname}</td>
                            <td>{item.password}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>
                            <Button onClick={()=>{
                                this.props.history.push(`/student/edit/${item.id}`)
                            }}>Edit</Button>
                            {" "}
                            <Button variant="danger" onClick={()=>{this.onDeleteclick(item.id)}}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
    </table>
        </div>)
    }d
}

export default withRouter(Studentlist);
