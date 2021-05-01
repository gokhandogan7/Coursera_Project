import {
    Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col,  FormFeedback
} from 'reactstrap';

import { useFormik } from "formik";
import { Link } from "react-router-dom"
import * as Yup from "yup";
import {useDispatch} from "react-redux"
import {postFeedback} from "../redux/ActionCreators"


export const Contact = (props) => {
    const dispatch=useDispatch()
    const contactUsSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is required!!"),
        firstName: Yup.string()
            .required("Please enter your name.")
            .min(2, "Please enter valid name"),
        lastName: Yup.string()
            .required("Please enter your  last name")
            .min(2, "Please enter valid name"),
        feedback: Yup.string()
            .required("Please enter your feedback"),
        telnum: Yup.number()
            .required("Please enter your feedback")

    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            telnum: "",
            email: "",
            contactType: "",
            agree: false,
            feedback: ""
        },
        onSubmit: values => {
            dispatch(postFeedback(values))
        },
        validationSchema: contactUsSchema
    })



    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Contact Us
                </BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    invalid={formik.errors.firstName}

                                    {...formik.getFieldProps('firstName')}
                                />
                                <FormFeedback>{formik.errors.firstName}</FormFeedback>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    invalid={formik.errors.lastName}
                                    {...formik.getFieldProps('lastName')}
                                />
                                <FormFeedback>{formik.errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel</Label>
                            <Col md={10}>
                                <Input
                                    type="tel"
                                    id="telnum"
                                    name="telnum"
                                    invalid={formik.errors.telnum}
                                    placeholder="Tel. Num"
                                    {...formik.getFieldProps('telnum')}
                                />

                                <FormFeedback>{formik.errors.telnum}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E mail"
                                    invalid={formik.errors.email}
                                    {...formik.getFieldProps('email')}
                                />
                                <FormFeedback>{formik.errors.email}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            name="agree"

                                            {...formik.getFieldProps('agree')}

                                        />{" "}

                                        <strong>May we contact you</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType" {...formik.getFieldProps('contactType')}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input
                                    type="textarea"
                                    id="message"
                                    name="message"
                                    placeholder="Feedback"
                                    rows="12"
                                    invalid={formik.errors.feedback}
                                    {...formik.getFieldProps('feedback')}
                                />
                                <FormFeedback>{formik.errors.feedback}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                               </Button>
                            </Col>
                        </FormGroup>

                    </Form>
                </div>
            </div>
        </div>
    );
}
