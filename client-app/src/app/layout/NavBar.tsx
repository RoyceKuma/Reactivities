import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
    openForm: ()=> void;
}

export default function({openForm}:Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight:'10px'}}/>
                    Reactivites
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Acitvity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}