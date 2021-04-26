import React from "react";

function Registraion(){

    return(

        <div className="container">

            <h1>  SIGN UP</h1>
            <form >
                <div className="form-group">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name"
                           onChange={(event)=>{
                               setName(event.target.value)
                           }}/>

                </div>

                <div className="form-group">
                    <label htmlFor="fname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="Enter Last Name"
                           onChange={(event)=>{
                               setName(event.target.value)
                           }}/>

                </div>


                <div className="form-group">
                    <label htmlFor="age" className="form-label">Email</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Email"
                           onChange={(event)=>{
                               setAge(event.target.value)
                           }}/>

                </div>



                <div className="form-group">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2"
                                       />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                            </div>



                            <br/>
                            <label htmlFor="register" className="form-label">Register As a</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="reg" id="researcher" checked/>
                                <label className="form-check-label" htmlFor="researcher">
                                    Researcher
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="reg" id="presenter" />
                                <label className="form-check-label" htmlFor="presenter">
                                    Workshop presenter
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="reg" id="attendee" />
                                <label className="form-check-label" htmlFor="attendee">
                                    Attendee
                                </label>
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
    )
}

export default Registraion;
