import React,{useState} from "react";
import AppBarComponent from "../LandingPage/AppBar/AppBarComponent";
import axios from "axios";



function Registraion(){

    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[gender,setGender]=useState("");
    const[member,setMember]=useState("");


    function sendData(e){
        e.preventDefault();

        const newRegister = {
            firstname,
            lastname,
            email,
            gender,
            member
        }

        axios.post("http://localhost:8090/member/add",newRegister).then(()=>{
            alert("Registered successfully");
        }).catch((err)=>{
            alert(err)
        })
    }


    return(
        <div>
            <AppBarComponent />
            <div className="container">



                <h1>  SIGN UP</h1>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="fname" placeholder="Enter First Name"
                               onChange={(event)=>{
                                   setFirstname(event.target.value)
                               }}/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="fname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="fname" placeholder="Enter Last Name"
                               onChange={(event)=>{
                                   setLastname(event.target.value)
                               }}/>

                    </div>


                    <div className="form-group">
                        <label htmlFor="age" className="form-label">Email</label>
                        <input type="text" className="form-control" id="age" placeholder="Enter Email"
                               onChange={(event)=>{
                                   setEmail(event.target.value)
                               }}/>

                    </div>



                    <div className="form-group">
                        <label >Gender</label>
                        <div className="form-check">
                            <input  type="radio" name="gender"  value="male"
                                    onChange={(event)=>{
                                        setGender(event.target.value)
                                    }}/>
                            <label>Male </label>
                        </div>
                        <div className="form-check">

                            <input  type="radio" name="gender"  value="female"
                                    onChange={(event)=>{
                                        setGender(event.target.value)
                                    }} />
                            <label >Female</label>
                        </div>



                        <br/>
                        <label >Register As a</label>

                        <div className="form-check">
                            <input  type="radio" name="reg"   value= "Researcher"
                                    onChange={(event)=>{
                                        setMember(event.target.value)
                                    }}/>
                            <label >Researcher</label>
                        </div>
                        <div className="form-check">

                            <input  type="radio" name="reg"  value= "presenter"
                                    onChange={(event)=>{
                                        setMember(event.target.value)
                                    }}/>
                            <label >
                                Workshop presenter
                            </label>
                        </div>
                        <div className="form-check">

                            <input type="radio" name="reg" value= "Attendee"
                                   onChange={(event)=>{
                                       setMember(event.target.value)
                                   }}/>
                            <label >Attendee</label>
                        </div>

                    </div>


                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I agreed terms and conditions.
                        </label>
                    </div>

                    <br/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Registraion;
