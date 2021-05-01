import React from 'react'
import {RenderCard} from "./RenderCard"


export const HomeComponent = (props) => {
    
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                    item={props.dish}
                    isLoading={props.dishesLoading} 
                    errMess={props.errMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard 
                    item={props.promotion}
                    isLoading={props.promosLoading} 
                    errMess={props.promosErrMess} 
                    
                    />
                </div>
              <div className="col-12 col-md m-1">
                    <RenderCard 
                    item={props.leader}
                    isLoading={props.leaderLoading} 
                    errMess={props.leaderErrMess} />
                    
                </div> 

            </div>
        </div>
    )
}
