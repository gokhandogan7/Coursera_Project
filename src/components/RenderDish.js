import React from 'react'
import { CardImg,Card, CardBody, CardTitle,CardText } from 'reactstrap'
export const RenderDish = ({dish}) => {
    return (
      <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
      </div>
    )
}
