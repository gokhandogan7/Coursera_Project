import React from 'react'
import {
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from "react-router-dom"
import { RenderDish } from './RenderDish';
import { RenderComments } from './RenderComments';
import { Loading } from "./LoadingComponent"

export const DishDetailComponent = (props) => {

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.errMess) {
        return(
        <div className="container">
            <div className="row">
                <h4>{props.errMess}</h4>
            </div>
        </div>
        )
    }

    if (props.dish) {
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>

                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} dishId={props.dish.id} />

                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
