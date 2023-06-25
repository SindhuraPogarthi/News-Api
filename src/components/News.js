import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import './News.css'


export default function News() {
   const[news,setnews] = useState([])
   const getnews=async()=>{
     let data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-25&sortBy=publishedAt&apiKey=78cabbc72ebc4b8ab2bb67f424f39ae2")
     const jsondata = await data.json()
     setnews(jsondata.articles)
     console.log(news)
   }
   useEffect(()=>{
     getnews()
   })
  return (
    <div className='container'>

        <div className="scroll-container">
        {news.map((item,index)=>{
            return <div className="item-container">
                <Newsitem title={item.title} description={item.description.slice(0,130)} image={item.urlToImage} url={item.url}/>
            </div>
        })}
        </div>
       
      
       
    </div>
  )
}