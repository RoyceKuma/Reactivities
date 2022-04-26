import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
export default function() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight:'10px'}}/>
                    Reactivites
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content='Create Acitvity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}