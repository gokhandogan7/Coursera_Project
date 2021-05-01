import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    Jumbotron,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    FormGroup,
    Input,
    Label,
    Form,
    FormFeedback


} from 'reactstrap';

import { useFormik } from "formik";
import * as Yup from "yup";


import { NavLink } from "react-router-dom"

export const HeaderComponent = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const toggleModal = () => {
        setModalOpen(isModalOpen => !isModalOpen)
    }

    const loginSchema = Yup.object().shape({
        userName: Yup.string().required(),
        password: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            remember:true
        },
        validationSchema: loginSchema

        ,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })


    return (
        <>
            <Navbar dark expand="md" >
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="logo" />
                    </NavbarBrand>
                    <Collapse navbar isOpen={isOpen}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                            </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="userName">Username</Label>
                            <Input 
                            type="text" 
                            name="username" 
                            invalid={formik.errors.userName} 
                            {...formik.getFieldProps('userName')}/>
                            <FormFeedback>{formik.errors.userName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="userName">Password</Label>
                            <Input 
                            type="password" 
                            name="password"  
                            invalid={formik.errors.password} 
                            {...formik.getFieldProps('password')}
                            />
                            <FormFeedback>{formik.errors.password}</FormFeedback>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                type="checkbox" 
                                name="remember"
                                {...formik.getFieldProps('remember')}
                                />
                            Remember me
                        </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" className="bg-primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}
