import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import AcitvityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityList from '../../features/activities/dashboard/ActivityList';


function App() {
 const [activities, setActivites] =useState<Activity[]>([]);
 const [selectedActivity, setSelectedActivity] = useState<Activity|undefined>(undefined);

 useEffect(() => {
  axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
    setActivites(response.data);
  })
 }, [])

 function handleSelectActivity(id:string){
   setSelectedActivity(activities.find(x=>x.id===id));
 }
 function handleCancelSelectActivity( ){
  setSelectedActivity(undefined);
}


  return (
    <>
     <NavBar />
     <Container style={{marginTop: '7em'}}>
       <AcitvityDashboard 
       activities={activities}
       selectedActivity={selectedActivity}
       selectActivity={selectedActivity}
       cancelSelectActivity={selectedActivity}
       
       />
      </Container>     
    </>
  );
}

export default App;
