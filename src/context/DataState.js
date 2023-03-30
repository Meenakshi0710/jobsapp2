import React, { useState } from 'react'
import dataContext from './dataContext'

const DataState = (props) => {
    const itemsinitial = []
    const [items, setItems] = useState(itemsinitial)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [item, setItem] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e825c71d59mshc175fc326a87350p198f73jsnff9c0b62b6cd',
            'X-RapidAPI-Host': 'remote-jobs-api.p.rapidapi.com'
        }
    };
    const fetchData = async () =>{
        await fetch(`https://remote-jobs-api.p.rapidapi.com/jobs`, options)
        .then(response => response.json())
        .then(response => {console.log(response)
        setItems(response.items)
        setPage(response.meta.page)
        setTotal(response.meta.total);
        console.log(response.meta.page)
        })
        .catch(err => console.error(err));
    }
    const handlePrevClick = async () =>{
        await fetch(`https://remote-jobs-api.p.rapidapi.com/jobs/page/${page-1}`, options)
        .then(response => response.json())
        .then(response => {console.log(response)
        setItems(response.items)
        setPage(response.meta.page)
        setTotal(response.meta.total);
        console.log(response.meta)
        })
        .catch(err => console.error(err));

    }

    const handleNextClick = async () =>{
        if(page+ 1 > Math.ceil(total/props.pageSize)){

        }else{
            await fetch(`https://remote-jobs-api.p.rapidapi.com/jobs/page/${page+1}`, options)
            .then(response => response.json())
            .then(response => {console.log(response)
            setItems(response.items)
            setPage(response.meta.page)
            setTotal(response.meta.total);
            console.log(response.meta)
            })
            .catch(err => console.error(err));
    }
} 
const fetchspecificdata = async (id)=>{
   await fetch(`https://remote-jobs-api.p.rapidapi.com/job/${id}`, options)
	.then(response => response.json())
	.then(response => {console.log(response)
    setItem(response.items)})
	.catch(err => console.error(err));
}
  return (
    <dataContext.Provider value = {{items,item,page,total,fetchData,handleNextClick,handlePrevClick,fetchspecificdata}}>
    {props.children}
    </dataContext.Provider>
  )
}

export default DataState