import React, {useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { When, If, Then, Else } from "react-if";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Logincontext}from '../context/contextlogin'

export default function Login(props) {
    const context =useContext(Logincontext)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handelSubmit(e) {
        e.preventDefault()
        context.login(username,password)
    }

    return (
        <>
        <If condition={context.login}>
        <Then>
          <button
            class="bp3-button bp3-minimal bp3-icon-home"
            onClick={context.logout}
          >
            Logout
          </button>
        </Then>
 
        <Else>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>userName</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
            </Form></Else>
            </If>
        </>
    )
}