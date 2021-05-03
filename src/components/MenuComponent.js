import React from 'react'
import { Link ,useHistory} from 'react-router-dom';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle,Breadcrumb,BreadcrumbItem
} from 'reactstrap';

import {baseUrl} from "../shared/baseUrl"

export const MenuComponent = (props) => {
    const history=useHistory()

    return (
        <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Menu
                </BreadcrumbItem>
            </Breadcrumb>

            <div className="col-12">
                <h3>Menu</h3>
                <hr/>
            </div>
          
           
            {
                props.dishes.dishes.map(dish => {
                    return (
                        <div key={dish.id} className="col-12 col-md-5 m-1">

                        <Card onClick={()=>history.push(`/menu/${dish.id}`)} >
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle tag="h5" style={{textAlign:'left'}}>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        </div>
                    )
                })
            }
            </div>
        
        </div>
    )
}
