import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "./details/ActivityDetails";
import ActivityList from "./ActivityList";
import AcitvityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity:Activity;
    selectActivity:(id:string)=>void;
    cancelSelectActivity:()=>void;
     
}

export default function AcitvityDashboard({activities, selectedActivity,selectActivity,cancelSelectActivity}:Props){
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>            
            <Grid.Column width='6'>
                {activities[0] && 
                <ActivityDetails activity={activities[0]}/>}
                <AcitvityForm />
            </Grid.Column>
        </Grid>
    )
}