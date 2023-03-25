import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getDatabase, ref, onValue} from "firebase/database";
import Spinner from 'react-bootstrap/Spinner';
import NavbarComponent from './NavbarComponent';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Admin = () => {
  // Classroom data
  /*const data = [
    {
      id: 1,
      classroomID: "AHM01",
      capacity: 5,
      requirement: 2,
      subjects: ["Maths", "Science"],
      languageRequirement: ["Gujarati", "Hindi"],
      location: "Ahmedabad",
    },
    {
      id:2 ,
      classroomID: "AHM02",
      capacity: 5,
      requirement: 4,
      subjects: ["Maths", "Science", "English", "Social Studies"],
      languageRequirement: [],
      location: "Ahmedabad",
    },
    {
      id: 3,
      classroomID: "CHE01",
      capacity: 3,
      requirement: 2,
      subjects: ["English", "Social Studies"],
      languageRequirement: ["Tamil"],
      location: "Chennai",
    },
    {
      id: 4,
      classroomID: "CHE02",
      capacity: 3,
      requirement: 2,
      subjects: ["Maths"],
      languageRequirement: [],
      location: "Chennai",
    },
    {
      id:5 ,
      classroomID: "BLR01",
      capacity: 3,
      requirement: 2,
      subjects: ["Maths", "Science"],
      languageRequirement: [],
      location: "Bengaluru",
    },
    {
      id:6 ,
      classroomID: "BLR02",
      capacity: 2,
      requirement: 1,
      subjects: ["English"],
      languageRequirement: [],
      location: "Bengaluru",
    },
  ]; */

  const [fireBaseData, setFireBaseData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const db = getDatabase();
    const volunteerData = ref(db, "volunteerContact");
    onValue(volunteerData, (snapshot)=>{
      if(snapshot.val() !== null){
        setFireBaseData({...snapshot.val()});
      }else{
        setFireBaseData({})
      }
    })
      setLoading(false)
  }, [])


  return (
    <div>
      <NavbarComponent />

      <div className='d-flex justify-between mr-5 mt-2'>
      <h3>List of Volunteers</h3>
          <Link to="/">
              <Button variant="outline-danger" >Logout</Button>
          </Link>
      </div>
      {isLoading ?
      <Spinner animation="border" variant="info"  size='lg'/> :
      <Table striped bordered hover size = "sm" className='table-responsive mt-2 ml-2 mr-2' variant='dark'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Locaiton</th>
          <th>Language</th>
          <th>Subject</th>
          <th>Day</th>
        </tr>
      </thead>

      <tbody>
          {Object.keys(fireBaseData).map( (id, index) =>{
                return (
                  <tr  key={id}>
                      <th scope='row'>{index +1}</th>
                      <td>{fireBaseData[id].name}</td>
                      <td>{fireBaseData[id].email}</td>
                      <td>{fireBaseData[id].loc}</td>
                      <td>{fireBaseData[id].language}</td>
                      <td>{fireBaseData[id].subject}</td>
                      <td>{fireBaseData[id].date}</td>
                  </tr>
              )}
          )
        }
      </tbody>
      </Table> }
    </div>
  );
}

export default Admin
