// import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import Allstudents from './components/Allstudents';
import OneStudent from './components/OneStudent';
import NewStudent from './components/NewStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
      <br/>
      <h1>Student Tracker!</h1>
      <Router>
      <Allstudents path="/"></Allstudents>
      <OneStudent path="student/:studentId"></OneStudent>
      <EditStudent path="student/edit/:studentId"></EditStudent>
      <NewStudent path="/new"></NewStudent>
      </Router>
    </div>
  );
}

export default App;
