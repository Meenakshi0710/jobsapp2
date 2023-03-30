import React from 'react'
import { Link } from "react-router-dom";

const Jobs = (props) => {
 
    let {item} = props;
        return (
          <Link to = {`/job/${item._id}`} className='text-decoration-none text-reset'>
            <div className="my-3">
              <div className="card mb-3" style={{height: "120px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{margin: "5px 5px"}} src={item.company_logo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
             
              <p className="card-text"><small className="text-muted">By {item.source} on {new Date(item.date).toGMTString()}</small></p>
              
      </div>
    </div>
  </div>
</div>
           </div>
           </Link>
  )
}

export default Jobs