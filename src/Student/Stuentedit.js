import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router';

 class Studentedit extends Component {
state={
    name:'',
    password:'',
    phone:'',
    username:''
}

componentDidMount(){
    axios.get(`https://fakestoreapi.com/users/${this.props.match.params.id}`)
    .then((response)=>{
        this.setState({
            name:response.data.name.firstname,
            password:response.data.password,
            phone:response.data.phone,
            username:response.data.username
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
ButtonClick=()=>{
    axios.put(`https://fakestoreapi.com/users/${this.props.match.params.id}`,{
        name:this.state.name,
        password:this.state.password,
        phone:this.state.phone,
        username:this.state.username
    })
    .then((response)=>{
        console.log(response.data)
        this.props.history.goBack()
    })
    .catch((err)=>{
        console.log(err)
    })
}

    render() {
        return (
            <div>
                <h1>Edit student</h1>
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" placeholder="Enter name" onChange={(event)=>{
                                this.setState({name:event.target.value}) 
                            }} value={this.state.name} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="number" placeholder="Enter password" onChange={(event)=>{
                                this.setState({password:event.target.value})
                            }} value={this.state.password} readOnly/></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input type="number" placeholder="Enter number" onChange={(event)=>{
                                this.setState({phone:event.target.value})
                            }} value={this.state.phone} readOnly/></td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" placeholder="Enter username" onChange={(event)=>{
                                this.setState({username:event.target.value})
                            }} value={this.state.username} readOnly/></td>
                        </tr>
                    </tbody>
                </table>
                <Button onClick={this.ButtonClick}>Add</Button>
            </div>
        )
    }
}
export default withRouter(Studentedit);