import React from "react";
import { format as formatDate, parseISO } from "date-fns";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import RenderComments from './RenderComments'

export const formatter = (date) => {
  return formatDate(parseISO(date), "MM/dd/yyyy HH:mm");
};

const DishDetail = ({ selectedDish, comments }) => {
  return (
    <div className="container">
      <div classNme="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-md-6">
            <h3>{selectedDish.name}</h3>
          </div>
          <hr />
        </div>
      </div>
      {selectedDish ? (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                top
                src={selectedDish.image}
                alt={selectedDish.name}
              />
              <CardImgOverlay>
              </CardImgOverlay>
              <CardText>{selectedDish.description}</CardText>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
           <RenderComments comments={comments}/>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DishDetail;
