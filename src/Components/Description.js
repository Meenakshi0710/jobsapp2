import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import dataContext from '../context/dataContext';

const Description = () => {
    const { id } = useParams();
    const context = useContext(dataContext);
    const {item,fetchspecificdata} = context;
    useEffect(() => {
       console.log(id);
        fetchspecificdata(id);
      }, [id] )
  return (
    <>
    
    <div className="card mb-3" style={{border:"none"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.company_logo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.id}</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Description