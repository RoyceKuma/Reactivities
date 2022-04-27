import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import AcitvityDashboard from "./ActivityDashboard";

interface Props{
    activities: Activity[];
    selectActivity:(id:string)=>void;
}

export default function ActivityList({activities, selectActivity}:Props){
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity=>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=>{selectActivity(activity.id)}} floated='right' content='View' color='blue'/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>

                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}