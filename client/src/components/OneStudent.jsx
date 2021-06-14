import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios'

const OneStudent = (props) => {

    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/things/${props.studentId}`)
            .then(res => {
                console.log('************')
                console.log(res)
                console.log('************')
                setDetails(res.data.results)
            })
            .catch(err => console.log(err))
    }, []);

    const deleteStudent = (e, id) =>{
        console.log('delete student id number = ', id)
        axios.delete(`http://localhost:8000/api/things/delete/${props.studentId}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                navigate("/")
            
            })
            .catch(err=> console.log (err))
    }





    return (
        <div className="row">
            <div className="col">
                <Link className="btn btn-secondary" to="/">Back to Home</Link>
                <br />
                <br />
                <br />
                <h3>Student infor for: {details.first_name} {details.last_name}</h3>
                <br />
                <h3>Graduation Date: {details.graduation_date}</h3>
                <br />
                <img src={details.profilePic} height="400px" width="400px" alt="Student Picture" />
                <br />
                <br />
                <h3>Number of belts: {details.numberOfBelts}</h3>
                <br />
                <h3>Verteran Status: {details.isVeteran ? "Active Veteran" : "Not a Verteran"}</h3>
                <br />
                <button className="btn btn-warning"><Link to={`/student/edit/${details._id}`}>Edit Student</Link></button>
                <br />
                <br />
                <button className="btn btn-danger" onClick={(e)=>deleteStudent(e, details._id)} >Delete Student</button>
                <br />
                <br />
            </div>
        </div>
    );
};


export default OneStudent;