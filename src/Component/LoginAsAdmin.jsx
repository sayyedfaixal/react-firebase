import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getDatabase, ref, onValue} from "firebase/database";

const LoginAsAdmin = () => {
  const data = [
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
  ];

  const [fireBaseData, setFireBaseData] = useState({});

  useEffect(()=>{
    const db = getDatabase();
    const volunteerData = ref(db, "volunteerContact");
    onValue(volunteerData, (snapshot)=>{
      if(snapshot.val() !== null){
        setFireBaseData({...snapshot.val()});
      }else{
        setFireBaseData({})
      }
      console.log(data)
    })
  }, [])

  // debugger;
  // const tableRows = data.map(({id, classroomID, capacity, requirement, subjects, languageRequirement, location})=>{
  //   return (
  //     <tr key={id}>
  //       <td>{id}</td>
  //       <td>{classroomID}</td>
  //       <td>{capacity}</td>
  //       <td>{requirement}</td>
  //       <td>{subjects + ' '}</td>
  //       <td>{languageRequirement + ' '}</td>
  //       <td>{location}</td>
  //     </tr>
  //   )
  // })
  // const tableRows = data.

  return (
    <Table striped bordered hover size = "sm" className='table-responsive'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Locaiton</th>
          <th>Language</th>
          <th>Subject</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {/* {tableRows} */}
        {
           Object.keys(fireBaseData).map( (id, index) =>{
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
    </Table>

// classroomID: "AHM01",
// capacity: 5,
// requirement: 2,
// subjects: ["Maths", "Science"],
// languageRequirement: ["Gujarati", "Hindi"],
// location

  );
}

export default LoginAsAdmin
