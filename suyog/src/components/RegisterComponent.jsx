import React, { Component } from 'react'
import UserService from '../services/UserService';
import "../css/RegisterComponent.css"
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router';


 class RegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            full_name: '',
            email: '',
            password: '',
            mobile_number: '',
            gender: '',
            // area: '',
            // building: '',
            // state: 'Maharashtra',
            // city: '',
            // pincode: '',
        }
        this.changefull_nameHandler = this.changefull_nameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changemobile_numberHandler = this.changemobile_numberHandler.bind(this);
        this.changegender_genderHandler = this.changegender_genderHandler.bind(this);
        // this.changeareaHandler = this.changeareaHandler.bind(this);
        // this.changebuildingHandler = this.changebuildingHandler.bind(this);
        // this.changestateHandler = this.changestateHandler.bind(this);
        // this.changecityHandler = this.changecityHandler.bind(this);
        // this.changepincodeHandler = this.changepincodeHandler.bind(this);
    }
    saveUser = (u) => {
        u.preventDefault();
        let users = { name: this.state.full_name, email: this.state.email, password: this.state.password, contactNo: this.state.mobile_number, gender: this.state.gender}; //, aadharNumber: this.state.aadhar_number
        console.log('Users => ' + JSON.stringify(users));

        UserService.addUser(users).then((res) => {
            alert(`Hello You have Registered  sucessfully`)
            this.props.history.push('/');
            // console.log("register sucessfully")
            })
            .catch((error)=>{
              alert("something went wrong");
        });
    }
    cancel() {
        return <Redirect to='/register' />
    }

    changefull_nameHandler = (event) => {
        this.setState({ full_name: event.target.value });
    }
    changeemailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changepasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changemobile_numberHandler = (event) => {
        this.setState({ mobile_number: event.target.value });
    }
    changegender_genderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }
    // changeareaHandler = (event) => {
    //     this.setState({ area: event.target.value });
    // }
    // changebuildingHandler = (event) => {
    //     this.setState({ building: event.target.value });
    // }
    // changecityHandler = (event) => {
    //     this.setState({ city: event.target.value });
    // }
    // changestateHandler = (event) => {
    //     this.setState({ state: event.target.value });
    // }
    // changepincodeHandler = (event) => {
    //     this.setState({ pincode: event.target.value });
    // }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Register</h3>
                            <div className="card-body">
                                <form className="registerForm">
                                    <div className="form-group">
                                        <label> Full Name: </label>
                                        <input placeholder="Full Name" name="full_name" className="form-control"
                                            value={this.state.full_name} onChange={this.changefull_nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeemailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control" type="password"
                                            value={this.state.password} onChange={this.changepasswordHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label> Mobile Number: </label>
                                        <input placeholder="Mobile Number" name="mobile_number" className="form-control"
                                            value={this.state.mobile_number} onChange={this.changemobile_numberHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Gender: </label>
                                        <input placeholder="gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changegender_genderHandler} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label> Area: </label>
                                        <input placeholder="Area" name="area" className="form-control"
                                            value={this.state.area} onChange={this.changeareaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Building: </label>
                                        <input placeholder="Building" name="building" className="form-control"
                                            value={this.state.building} onChange={this.changebuildingHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control"
                                            value={this.state.city} onChange={this.changecityHandler} />
                                    </div>
                                   
                                    <div className="form-group">
                                        <label> State: </label>
                                        <input placeholder="State" name="building" className="form-control"
                                            value={this.state.state} onChange={this.changestateHandler} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label> Pin Code: </label>
                                        <input placeholder="Pin Code" name="pincode" className="form-control"
                                            value={this.state.pincode} onChange={this.changepincodeHandler} />
                                    </div> */}
                                   


                                    <button className="btn btn-success" onClick={this.saveUser} style={{ marginTop: "10px" }}>Sign Up</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default withRouter(RegisterComponent)