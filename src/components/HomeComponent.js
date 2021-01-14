import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item[0]?.image} alt={item[0]?.name} />
      <CardBody>
        <CardTitle>{item?.name}</CardTitle>
        {item[0]?.designation ? (
          <CardSubtitle>{item[0]?.designation}</CardSubtitle>
        ) : null}
        <CardText>{item[0]?.description}</CardText>
      </CardBody>
    </Card>
  );
};

const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props?.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props?.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props?.leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
