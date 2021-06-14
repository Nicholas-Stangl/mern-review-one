import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios'


const Allstudents = () => {
    const [allStudents, setAllStudents] = useState([])

    const[grantBeltClicked, setGrantBeltClicked] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:8000/api/things")
            .then(res => {
                console.log('*************')
                console.log(res)
                console.log('*************')
                setAllStudents(res.data.results)
            })
            .catch(err => console.log(err))
    }, [grantBeltClicked]);

    
    const grantBelt = (event, student)=>{
        setGrantBeltClicked(grantBeltClicked+1)
        console.log("tying to get this student a belt", student)
        student.numberOfBelts +=1
        console.log("after adding a belt")
        console.log(student)
        axios.put(`http://localhost:8000/api/things/update/${student._id}`, student)
        .then(res=>{
            console.log("RESPONSE AFTER PUT REQUEST", res)
        })
        .catch(err=> console.log(err))
    }



    return (
        <div className="container">
            <Link type="button" className="btn btn-info" to="/new">Add a New Student</Link>
            <br/>
            <br/>
            <div className="row">
                <div className="col">
                    <h3>Ninjas (0-1 Belt)</h3>
                    {
                        allStudents.filter(student => student.numberOfBelts < 2).map((student, i) => {
                            return <div key={i} className="card">
                                <div className="card-body">
                                    <h4 className="card-title"><Link to={`/student/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                                    <h6 className="card-subtitle mb-2 text-muted">Graduation Date: {student.graduation_date}</h6>
                                    <p className="card-text">
                                        Number of Belts: {student.numberOfBelts}
                                        <br />
                                        <img src={student.profilePic} height="200px" width="200px" alt="source missing" />
                                    </p>
                                    <button onClick={(e)=>grantBelt(e, student)} className="btn btn-success">Grant a Belt</button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-warning"><Link to={`/student/edit/${student._id}`}>Edit Student</Link></button>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="col">
                    <h3>Samurai (2 Belts)</h3>
                    {
                        allStudents.filter(student => student.numberOfBelts === 2).map((student, i) => {
                            return <div key={i} className="card">
                                <div className="card-body">
                                <h4 className="card-title"><Link to={`/student/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                                    <h6 className="card-subtitle mb-2 text-muted">Graduation Date: {student.graduation_date}</h6>
                                    <p className="card-text">
                                        Number of Belts: {student.numberOfBelts}
                                        <br />
                                        <img src={student.profilePic} height="200px" width="200px" alt="source missing" />
                                    </p>
                                    <button onClick={(e)=>grantBelt(e, student)} className="btn btn-success">Grant a Belt</button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-warning"><Link to={`/student/edit/${student._id}`}>Edit Student</Link></button>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="col">
                    <h3>Samurai (3 Belts)</h3>
                    {
                        allStudents.filter(student => student.numberOfBelts > 2).map((student, i) => {
                            return <div key={i} className="card">
                                <div className="card-body">
                                <h4 className="card-title"><Link to={`/student/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                                    <h6 className="card-subtitle mb-2 text-muted">Graduation Date: {student.graduation_date}</h6>
                                    <p className="card-text">
                                        Number of Belts: {student.numberOfBelts}
                                        <br />
                                        <img src={student.profilePic} height="200px" width="200px" alt="source missing" />
                                    </p>
                                    <button onClick={(e)=>grantBelt(e, student)} className="btn btn-success">Grant a Belt</button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-warning"><Link to={`/student/edit/${student._id}`}>Edit Student</Link></button>
                                </div>
                            </div>
                        })
                    }
                </div>


            </div> 
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Allstudents;