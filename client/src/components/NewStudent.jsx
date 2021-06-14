import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewStudent = () => {

    const [formInfo, setFormInfo] = useState({
        first_name:"",
        last_name:"",
        graduation_date:"",
        profilePic:"",
        numberOfBelts:"",
        isVeteran:false
    })

    const [errors, setErrors] = useState ({})

    const changeHandler = (e) =>{
        console.log("********CHANGING********")
        if(e.target.type=="checkbox"){
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
        }else{
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit", formInfo)
        axios.post('http://localhost:8000/api/things/create', formInfo)
            .then(res=>{
                console.log('***********')
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }
                else{
                    setErrors(res.data.errors)
                }

            })
            .catch(err=> console.log (err))
    }

    return (
        <div className="container">
            <Link type="button" className="btn btn-primary" to="/">Back to Home</Link>
            <br />
            <br/>
            <h1>Enroll a New Student Below</h1>
            <br/>
            <form onSubmit={submitHandler} className="col-4 mx-auto">
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange={changeHandler} type="text" name="first_name" className="form-control" />
                </div>
                <p style={{color:"red"}}>{errors.first_name? errors.first_name.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange={changeHandler} type="text" name="last_name" className="form-control" />
                </div>
                <p style={{color:"red"}}>{errors.last_name? errors.last_name.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" name="graduation_date" className="form-control" />
                </div>
                <p style={{color:"red"}}>{errors.graduation_date? errors.graduation_date.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Profile Pictue:</label>
                    <input onChange={changeHandler} type="text" name="profilePic" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Number of Belts:</label>
                    <input onChange={changeHandler} type="number" name="numberOfBelts" className="form-control" />
                </div>

                <div className="form-check">
                    <label htmlFor="">Veteran Status:</label>
                    <input onChange={changeHandler} type="checkbox" checked={formInfo.isVeteran} value={formInfo.isVeteran} name="isVeteran" className="form-control" />
                </div>

                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default NewStudent;