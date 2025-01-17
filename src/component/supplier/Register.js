import React , {Component} from 'react';
import './css/Login.css';
import {register} from './UserFunctions';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            email:'',
            password:''            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.logintosupplier = this.logintosupplier.bind(this);
    }

   onChange(e){
       this.setState({[e.target.name]:e.target.value})
   }
   onSubmit(e){
        e.preventDefault();
        const obj = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password,
        };
        axios.post('http://localhost:4000/user/register/',obj)
            .then(res => {
                        if(res){
                            this.props.history.push({
                                pathname: '/supplier-login',
                                state: { email:this.state.email }
                            })
                        }
                    })
    }
   
   logintosupplier(e){
     this.props.history.push('/supplier-login')
   }
//    state={
//        selectedFile:null
//    }
//    fileSelectedHandler = event =>{
//        this.setState({
//            selectedFile:event.target.files[0]
//        })
//    }
//    fileUploadedHandler = () =>{
//         axios.post('http://');
//    }

    render(){
        return(
            <div className ="bg-img">
                {/* <div className ="container"> */}
                <div className ="row">
                    <div className ="col-md-6 mt-5 mx-auto">
                        <form className = "form-container" noValidate onSubmit ={this.onSubmit}> 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">SignUp Form</h1>
                            <div className ="form-group">
                                <input type ="text"
                                        className="form-control"
                                        name = "first_name"
                                        placeholder ="Enter First Name"
                                        value ={this.state.first_name}
                                        onChange ={this.onChange}
                                />
                            </div>
                            
                            <div className ="form-group">
                                <input type ="text"
                                        className="form-control"
                                        name = "last_name"
                                        placeholder ="Enter Last Name"
                                        value ={this.state.last_name}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            {/* <div className ="form-group">
                                <label htmlFor = "address">Address</label>
                                <input type ="text"
                                        className="form-control"
                                        name = "address"
                                        placeholder ="Enter Your Permanent address"
                                        value ={this.state.address}
                                        onChange ={this.onChange}
                                
                                />
                            </div> */}
                            <div className ="form-group">
                                <input type ="email"
                                        className="form-control"
                                        name = "email"
                                        placeholder ="Enter Email Address"
                                        value ={this.state.email}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className ="form-group">
                                <input type ="password"
                                        className="form-control"
                                        name = "password"
                                        placeholder ="Enter Password "
                                        value ={this.state.password}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            {/* <div className ="form-group">
                                <label htmlFor = "file">Profile Image</label>
                                <input type ="file"
                                        className="form-control"
                                        name = "file"
                                        placeholder ="Select your Photo"
                                        value ={this.state.selectedFile}
                                        onChange ={this.fileSelectedHandler}
                                
                                />
                            </div> */}
                            <button onClick = {this.fileUploadedHandler} type ="submit" className ="btn btn-primary btn--block">
                                    Register
                            </button>
                            <p>Are you already Signup?
                                <button onClick = {this.logintosupplier} type ="submit" className ="btn btn-primary btn--block">
                                        Login
                                </button>
                            </p>
                        </form>
                        
                    </div>
                </div>
           {/* </div> */}
            </div>


        )
    }
}



export default Register;

