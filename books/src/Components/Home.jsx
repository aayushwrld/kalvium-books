// ^ importing and destructuring required components

import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeFetchData } from '../Utils/Redux/action';
import loading from "../assets/loading.gif";

// ^ creating the Home component
const Home = () => {

    const dispatch = useDispatch()

    const books = useSelector((data)=>{
        return data.books
    })

    const searchQuery = useSelector((data)=>{
        return data.searchStr
    })

    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{headers:
            { Authorization: 'whatever-you-want' }
        }).then((res)=>{
            const data = res.data.books
            dispatch(storeFetchData(data))
        })
    }, [])

  const localCheck = JSON.parse(localStorage.getItem('data'))

    const filteredArr = books.filter((e, i)=>{return e.title.toLowerCase().includes(searchQuery.toLowerCase())})
    console.log(filteredArr)
    console.log(searchQuery)
    console.log(books);
  return (
    <>
    {localCheck == null ? (
    <div className="check-register">Register to see contents!</div>
    ) : ""}
    
    <div className={localCheck != null ? "parent-home" : "parent-blur"}>
        {books.length != 0 ? (<div id='booksMain'>
            <div id="heading">BOOKS</div>
            {filteredArr.length != 0 ? (
                <div className="grid">
                    {filteredArr.map((e, i)=>{
                        return (
                            <div className="item" key={i} >
                                <a href ={e.previewLink}  target="blank">
                                <img src={e.imageLinks.thumbnail} alt="" id="item-image"/>
                                </a>
                                <div className='item-title'><b>{e.title}</b></div>
                                <div className="item-author">by
                                {e.authors.map((e,i)=> {
                                    return (
                                        <div key={i}>
                                            <b>{e}</b>
                                        </div>
                                    )
                                })}</div>
                                <div className='item-rating'>
                                <img src=".\src\assets\stars.png" alt="" className='item-star'/>
                                    {e.averageRating ? e.averageRating : "4.69"}
                                &nbsp;&nbsp;&nbsp;<span id='item-free'>FREE</span>
                                </div>

                            </div>
                        )
                    })}
                </div>
            ) : ('')}
        </div> 
        ) : (
            <div className='loading'>
                <img src={loading} alt="" id='loading-img'/>
            </div>
        )}
    </div>
    </>
  )
}

export default Home