import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeFetchData } from '../Utils/Redux/action';

const Home = () => {

    const dispatch = useDispatch()

    const books = useSelector((data)=>{
        return data.books
    })

    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{headers:
            { Authorization: 'whatever-you-want' }
        }).then((res)=>{
            const data = res.data.books
            dispatch(storeFetchData(data))
        })
    }, [])
    console.log(books);
  return (
    <>
    <div className="parent">
        
    </div>
    </>
  )
}

export default Home