import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Form,
  FormGroup,
  FormFeedback,
  Card,
  CardText,
} from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import { format as formatDate, parseISO } from "date-fns";
import {addComment} from '../redux/ActionCreator'
import {useDispatch, useSelector} from 'react-redux';

export const formatter = (date) => {
  return formatDate(parseISO(date), "MM/dd/yyyy HH:mm");
};

const CommentSchema = Yup.object().shape({
  yourname: Yup.string()
    .min(2, "Must be greater than 3 characters!")
    .max(15, "Must be 15 characters or less!")
    .required("Required"),
  comment: Yup.string().required("Required"),
});


const RenderComments = ({dishId}) => {
  const dispatch = useDispatch();

  const comments = useSelector(state => state.comments)
  console.log(comments)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  

const filteredComments = comments.filter(
          (comment) => comment.dishId === +dishId
        )
console.log(filteredComments)
  return (
    <div>
      <Card>
        <h3>Comments</h3>
        <hr />
        {filteredComments?.map((comment) => {
          return (
            <div className="container" key={comment.comment.id}>
              <CardText>{comment?.comment}</CardText>
              <CardText>
                --{comment?.author} , {formatter(comment?.date)}
              </CardText>
              <br />
            </div>
          );
        })}
      </Card>
      <Button outline onClick={toggle}>
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{ rating: 4, yourname: "", comment: "" }}
              onSubmit={(values) => {
              dispatch(addComment(+dishId, values.rating, values.yourname, values.comment))  
              }}
              validationSchema={CommentSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="exampleSelect">Rating</Label>
                    <Input
                      type="select"
                      name="rating"
                      onChange={handleChange}
                      invalid={errors.rating}
                      value={values.rating}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup column>
                    <Label htmlFor="yourname">Your Name</Label>
                    <Input
                      type="text"
                      name="yourname"
                      placeholder="Your Name"
                      value={values.yourname}
                      onChange={handleChange}
                      invalid={errors.yourname}
                    />
                    <FormFeedback>{errors.yourname}</FormFeedback>
                  </FormGroup>
                  <FormGroup column>
                    <Label htmlFor="message">Comment</Label>
                    <Input
                      type="textarea"
                      id="comment"
                      name="comment"
                      rows="7"
                      value={values.comment}
                      onChange={handleChange}
                      invalid={errors.comment}
                    ></Input>
                    <FormFeedback>{errors.comment}</FormFeedback>
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default RenderComments;