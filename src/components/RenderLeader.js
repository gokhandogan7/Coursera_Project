import { Media } from 'reactstrap';

import React from 'react'
import {baseUrl} from "../shared/baseUrl"
export const RenderLeader = ({leader}) => {
    return (
        <div key={leader.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
              <Media object src={leader.image} alt={leader.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{leader.name}</Media>
            <Media className="mt-3">{leader.designation}</Media>
            <Media className="mt-3">{leader.description}</Media>
          </Media>
        </Media>
      </div>
    )
}
