import React,{useState} from 'react'
import {
    Card, CardText,
    CardTitle, Button,Modal,ModalBody,ModalHeader,Form,FormGroup,Input,FormFeedback, Label
} from 'reactstrap';

import { useFormik } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux"
import {postComment} from "../redux/ActionCreators"

export const RenderComments = ({ comments,dishId }) => {
   
    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch=useDispatch()
    const commentSchema=Yup.object().shape({
        name:Yup.string().required().min(3,"Must be greater than 2 characters").max(15,"Must be  15 characters or less"),

    })

    const formik=useFormik({
        initialValues:{
            rating:1,
            name:"",
            comment:""
        },
        validationSchema:commentSchema,
        onSubmit:values=>{
            console.log(values)
            setModalOpen(false)
            dispatch(postComment(dishId,+ values.rating,values.name,values.comment))
        }
    })

    const toggleModal = () => {
        setModalOpen(isModalOpen => !isModalOpen)
    }
    return (
        <div className="col-12 col-md-5 m-1" >
            <Card >
                <CardTitle>Comments</CardTitle>
                {
                    comments.map((comment, index) => {
                        return (
                            <div key={index}>
                                <CardText style={{ textAlign: "left" }}>{comment.comment}</CardText>
                                <CardText style={{ textAlign: "left" }}>--{comment.author}--
                               {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(comment.date)))}</CardText>

                            </div>
                        )
                    })
                }
               
            </Card>
            <Button outline size="mg" className="mt-3" onClick={toggleModal}>
                    <span className="fa fa-pencil"></span> Submit Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal} >
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Input 
                            type="select" 
                            id="rating"
                           
                            {...formik.getFieldProps('rating')}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Input>
                           
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Your Name</Label>
                            <Input
                            type="text"
                            id="name"
                             invalid={formik.errors.name}

                             {...formik.getFieldProps('name')}
                             />
                            <FormFeedback>{formik.errors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comment">Comment</Label>
                            <Input
                            id="comment"
                            type="textarea"
                            rows={6}
                            {...formik.getFieldProps('comment')}
                            />
                            <FormFeedback></FormFeedback>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" className="bg-primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
