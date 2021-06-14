import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios'

const EditStudent = (props) => {

    const [formInfo, setFormInfo] = useState({
        first_name:"",
        last_name:"",
        graduation_date:"",
        profilePic:"",
        numberOfBelts:"",
        isVeteran:false
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/things/${props.studentId}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setFormInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);

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
        axios.put(`http://localhost:8000/api/things/update/${props.studentId}`, formInfo)
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
            <Link className="btn btn-warning" to={`/student/${props.studentId}`}>Back to Student Detail</Link>
            <br/>
            <br/>            <form onSubmit={submitHandler} className="col-4 mx-auto">
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange={changeHandler} type="text" name="first_name" className="form-control" value={formInfo.first_name}/>
                </div>
                <p style={{color:"red"}}>{errors.first_name? errors.first_name.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange={changeHandler} type="text" name="last_name" className="form-control" value={formInfo.last_name}/>
                </div>
                <p style={{color:"red"}}>{errors.last_name? errors.last_name.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" name="graduation_date" className="form-control" value={formInfo.graduation_date} />
                </div>
                <p style={{color:"red"}}>{errors.graduation_date? errors.graduation_date.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Profile Pictue:</label>
                    <input onChange={changeHandler} type="text" name="profilePic" className="form-control" value={formInfo.profilePic} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Number of Belts:</label>
                    <input onChange={changeHandler} type="number" name="numberOfBelts" className="form-control" value={formInfo.numberOfBelts} />
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

export default EditStudent;