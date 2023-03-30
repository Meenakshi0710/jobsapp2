import React, { useContext, useEffect, useState } from 'react'
import Jobs from './Jobs';
import dataContext from '../context/dataContext';

const JobsContainer = (props) => {
    
    const context = useContext(dataContext);
  const {items,page,total,fetchData,handleNextClick,handlePrevClick} = context;
    useEffect(() => {
        document.title = `Top Remote Jobs`;
        fetchData();
      }, [] )// eslint-disable-line react-hooks/exhaustive-deps
  return (
   <>
         <h1 className = "text-center" style = {{margin : "35px 0px", marginTop : "90px"}}>Top Remote Jobs</h1>
         <div className='container'>
         <div className = "row">
           <div className='col-md-3'>

           </div>
           <div className='col-md-9'>
         {items.map((item)=>{
             return <div  key = {item._id}>
             <Jobs  item = {item}/>

             </div>
         })}
         </div>
         </div> 
         </div> 
         <div className = "container d-flex justify-content-between">
                <button type="button" disabled = {page < 1} className="btn btn-dark" onClick = {handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled = {page+ 1 > Math.ceil(total/props.pageSize)} className="btn btn-dark" onClick = {handleNextClick}>Next &rarr;</button>
                </div>
        
         </>
  )
}

export default JobsContainer